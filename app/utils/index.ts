import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashed: string = await bcrypt.hash(password, 10);
    return hashed;
  } catch (error) {
    return "error";
  }
};
