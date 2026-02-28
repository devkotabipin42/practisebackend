import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  const hanldeSubmit = async(e) => {
    e.preventDefault();

	await handleLogin(username,password)

	navigate('/feed')
	
  };

  if(loading){
	return (
		<main>
			<h1 className="text-3xl flex justify-center items-center h-screen">Loading</h1>
		</main>
	)
  }

  return (
    <main className="flex justify-center items-center h-screen w-screen ">
      <div className="flex flex-col max-w-[350px] w-full gap-2">
        <h1 className="text-2xl">Login</h1>
        <form onSubmit={hanldeSubmit} className="flex flex-col gap-2  ">
          <input
		  	onInput={(e)=>{setUsername(e.target.value)}}
            className="border-2 border-amber-50 px-6 py-4 rounded-2xl"
            type="text"
            name="username"
            placeholder="enter username"
          />
          <input
		  	onInput={(e)=>{setPassword(e.target.value)}}
            className="border-2 border-amber-50 px-6 py-4 rounded-2xl"
            type="password"
            name="password"
            placeholder="enter password"
          />
          <button className=" w-full px-6 py-4 rounded-2xl bg-[#bd0c23] text-white cursor-pointer active:scale-95 ">
            Login
          </button>
        </form>
        <p>
          Create an account{" "}
          <Link to="/register" className="text-amber-800 text-[20px]">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
