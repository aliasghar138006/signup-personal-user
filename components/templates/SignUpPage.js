import { useState } from "react";
import User from "../../public/icons/user";
import Eye from "../../public/icons/Eye";
import Closeeye from "../../public/icons/Closeeye";
import { toast } from "react-toastify";

function SignUpPage() {
 
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);

  const [click , setClick] = useState(false);
  const signupHandler = async () => {
    setClick(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });

    const data = await res.json();
    console.log(data);
    if (data.status == "success") {
      toast.success(data.message);
    }else{
      toast.error(data.message);
    }
    
  };
  return (
    <div className="flex relative text-white w-[70%] h-[550px] mt-[100px] mb-[100px] mx-auto">
      <div className="w-[50%] max-[914px]:hidden rounded-l-lg h-full bg-blue-500 text-white text-center">
        {/* <img src="/images/N.jpg" width='537.6px' height='100px' alt="leftSide" /> */}
        <div className="w-[200px] h-[200px] mx-auto mt-[100px]">
          <User />
        </div>
        <h1 className="my-[100px] text-[2rem] font-bold">
          به صفحه ثبت نام خوش آمدید
        </h1>
      </div>
      <div className="bg-blue-800 max-[914px]:w-[100%] w-[50%] h-full rounded-r-lg max-[914px]:rounded-lg">
        <div dir="rtl" className="w-[70%] mt-[150px] [914px]:ml-[70px] mx-auto">
          <label className="text-gray-400" htmlFor="userName">
            نام کاربری
          </label>
          <input
            className="bg-transparent border-b border-white outline-none w-full transition ease-in-out duration-300"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div dir="rtl" className="relative w-[70%] mt-[50px] [914px]:ml-[70px] mx-auto">
          <label className="text-gray-400" htmlFor="password">
            کلمه عبور
          </label>
          <input
            className="bg-transparent border-b border-white outline-none w-full transition ease-in-out duration-300"
            type={eye ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            onClick={() => setEye(!eye)}
            className="absolute cursor-pointer left-0 bottom-1 w-[20px] h-[20px]"
          >
            {eye ? <Eye /> : <Closeeye />}
          </div>
        </div>
        <div
          onClick={signupHandler}
          className="bg-[#3b82f6] text-center font-bold py-3 mt-[100px] ml-[20%] w-[60%] rounded-[30px] cursor-pointer hover:bg-white hover:text-blue-800 transition ease-in-out duration-300"
        >
          ثبت نام
        </div>
      </div>
      
    </div>
  );
}

export default SignUpPage;


export async function getServerSideProps() {
  
  // const fs = require("fs");
  // const envfile = require("envfile");
  // console.log(envfile);
  // const sourcePath = ".env";
  // console.log(envfile.parse(sourcePath));
  // let parsedFile = envfile.parse(sourcePath);
  // parsedFile.USER_NAME = "newVariableValue";
  // fs.writeFileSync("./.env", envfile.stringify(parsedFile));
  // console.log(envfile.stringify(parsedFile));
  return {
    props: {},
  };
}
