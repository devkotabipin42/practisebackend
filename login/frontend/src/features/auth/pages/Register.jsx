import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

const Register = () => {
  const { handleRegister, loading } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate= useNavigate()


  const hanldeSubmit = async(e) => {
    e.preventDefault();
    await handleRegister(username,email,password)
    Navigate('/feed')
  };
  if (loading) {
    return (
      <main>
        <h1 className="text-3xl flex justify-center items-center h-screen">
          Loading...
        </h1>
      </main>
    );
  }
  return (
    <main className="flex justify-center items-center h-screen w-screen ">
      <div className="flex flex-col max-w-[350px] w-full gap-2">
        <h1 className="text-2xl">Register</h1>
        <form onSubmit={hanldeSubmit} className="flex flex-col gap-2  ">
          <input
            onInput={(e)=>{setUsername(e.target.value)}}
            className=" px-6 py-4 rounded-2xl bg-amber-800 text-black"
            type="text"
            name="username"
            placeholder="enter username"
          />
          <input
            onInput={(e)=>{setEmail(e.target.value)}}
            className="  px-6 py-4 rounded-2xl bg-amber-800 text-black"
            type="text"
            name="email"
            placeholder="enter email"
          />
          <input
            onInput={(e)=>{setPassword(e.target.value)}}
            className=" px-6 py-4 rounded-2xl bg-amber-800 text-black"
            type="password"
            name="password"
            placeholder="enter password"
          />
          <button className=" w-full px-6 py-4 rounded-2xl bg-[#bd0c23] text-white cursor-pointer active:scale-95 ">
            Register
          </button>
        </form>
        <p>
          Already hanve an account{" "}
          <Link to="/login" className="text-amber-800 text-[20px]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
