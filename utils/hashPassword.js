import { hash } from "bcryptjs";

export async function HashPassword(password){
    const hashedPassword = await hash(password , 12);
    return hashedPassword;
}