import { Request, Response } from "express";
import { StudentServices } from "./student.servic";

const createStudent = async (req:Request,res:Response)=>{

   try{
    const student = req.body.student;
  
    const result = await StudentServices.createStudentIntoDB;
    
    res.status(200).json({
        success:true,
        message: 'Student is created successfully',
        data:result
    })
   }catch(err){
    console.log(err)
   }

}

export const studentController = {
     createStudent
}