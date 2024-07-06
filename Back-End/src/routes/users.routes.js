import { Router } from "express";
import { PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
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
      })
      res.json({success:true, message: 'user Created successfully', user: newUser});
   }catch(e){
    res.status(500).json({success:false, message: e.message })
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