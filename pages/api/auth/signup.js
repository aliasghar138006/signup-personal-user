import PersonalUser from "../../../models/personalUser";
import Connect from "../../../utils/connectDB";
import { HashPassword } from "../../../utils/hashPassword";

export default async function handler(req , res){
    if (req.method !== 'POST'){
        return;
    }

    const {userName , password} = req.body;

    if(!userName || !password) {
        res.status(422).json({status:'faild' , message : 'لطفا تمام فیلدها را پر کنید'});
        return;
    }

    await Connect();

    const user = await PersonalUser.findOne({userName:userName})

    if (user) {
        res.status(401).json({status:'faild' , message:'نام کاربری وجود دارد'});
        return;
    }


    const hashedPassword = await HashPassword(password);

    const newUser = await PersonalUser.create({userName:userName , password : hashedPassword});

    res.status(201).json({status:'success' , message:'حساب کاربری با موفقیت ساخته شد' , data:newUser});

}