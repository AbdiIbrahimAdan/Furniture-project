import { Router } from "express";

const router = Router ();
router.post("/Signup", (req, res) =>{
   try{
      //
   }catch(e){
    res.status(500).json({success:false, message: e.message })
   }
})






export default router;