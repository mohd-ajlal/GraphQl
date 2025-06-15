import { User } from "@/models/userModel";

export const getAllUsers = async () => {
  const users = await User.find();
  // console.log(users);
  return users;
};


export const getUserById = async (id:string) => {
  const user = await User.findById(id);
  // console.log(users);
  return user;
};
