import { Course } from "../models/courseModel";
export const getAllCourses = async () => {
    const courses = await Course.find();
    return courses;
};
export const getCoursesById = async (parent, args) => {
    const course = await Course.findById(args.id);
    console.log(args.id);
    return course;
};
