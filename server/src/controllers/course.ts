import { Course } from "@/models/courseModel"


export const getAllCourses = async () =>{
    const courses = await Course.find();
    return courses;
}