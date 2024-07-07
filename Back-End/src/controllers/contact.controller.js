import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const createMessage = async(req, res) =>{
    const {firstName, lastName, email, subject, message} = req.body;
    try{
        const contact = await prisma.contact.create({
            data: {
                firstName,
                lastName,
                email,
                subject,
                message,
            }
        });
        res.status(201).json({message: 'Contact message sent successfully', contact})
    }catch(error){
        console.error('Error sending contact message:', error);
        res.status(500).json({error: 'internal server error'});
    }finally {
        await prisma.$disconnect();
    }
};