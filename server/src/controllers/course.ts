import { Course } from "@/models/courseModel"


export const getAllCourses = async () =>{
    const courses = await Course.find();
    return courses;
}

export const getCoursesById = async (parent: unknown, args: { id: string }) => {
    const course = await Course.findById(args.id);
    console.log(args.id);
    return course;
}