import { Router } from "express";
import { PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = Router ();
const prisma = new PrismaClient();
router.post("/Signup", async(req, res) =>{
   const {firstName, lastName,email, password, confirmPassword} = req.body;
   try{
      if (password !== confirmPassword){
         return res.status(400).json({success:false, message: 'Passwords do not match'});
      }
 
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
         data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
           
         }
      });

      const token = jwt.sign(newUser, process.env.JWT_SECRET, {
         expiresIn:'1h',
       });

       res.cookie('jwt', token, {
         httpOnly:true,
         secure: process.env.NODE_ENV === 'production',
         sameSite: 'strict',
       });



      res.status(201).json({success:true, message: 'User signed up successfully', user: newUser});
   }catch(error){
      console.error('Signup failed:', error);
    res.status(500).json({message: 'SignUp failed'});
   }
});

router.post("/login", async(req, res) =>{
    const {email, password} =req.body;
    try{
      const user = await prisma.user.findUnique({
         where: {email},
      });

      if(!user){
         return res.status(404).json({message: 'User is not found'});

      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch){
         return res.status(401).json({message:'Invalid credentials'});
      }

      const token = jwt.sign({id:user.id, email:user.email}, process.env.JWT_SECRET, {
         expiresIn:'1h',
       });

       res.cookie('jwt', token, {
         httpOnly:true,
         secure: process.env.NODE_ENV === 'production',
         sameSite: 'strict',
       });
       res.status(200).json({message: 'Login successful', user});
    }catch(error){
      console.error('Login fail:', error);
      res.status(500).json({message: 'Login fail'});
    }
});











router.get("/Signup", async(req, res) =>{
   try{
      const allusers = await prisma.user.findMany();
      res.json({success:true, users: allusers});
   }catch(e){
      res.status(500).json({success: false, message: e.message});
   }
});


router.get("/Signup/:id", async(req, res) =>{
   const userId = req.params.id;
   try{
      const user = await prisma.user.findUnique({
         where: {id: userId},
      })
      if (!user){
         return res.status(404).json({success: false, message: 'User is not found'});
      }

      res.json({success: true, user});
   }catch(e){
      res.status(500).json({success: false, message: e.message});
   }
});


router.patch("/Signup/:id", async(req, res) =>{
   const userId = req.params.id;
   const {firstName, lastName, email} = req.body;
   try{
      const updateUser = await prisma.user.update({
        where: {id: userId},
        data: {
         firstName,
         lastName,
         email,
        },
      });
      res.json({success: true, message: 'User updated successfully', user: updateUser});
   }catch(e){
      res.status(500).json({success: false, message: e.message});
   }
});

router.delete("/Signup/:id", async(req, res) =>{
   const userId = req.params.id;
   try{
      await prisma.user.delete({
         where: {id: userId},
      });
      res.json({success: true, message: 'User deleted successfully'});
      
   }catch(e){
      res.status(500).json({success: false, message: e.message});
   }
});



export default router;