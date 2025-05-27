import { User } from "@/models/userModel";

export const getAllUsers =async()=>{
        const users =  await User.find() 
        // console.log(users);
        return users;
      }