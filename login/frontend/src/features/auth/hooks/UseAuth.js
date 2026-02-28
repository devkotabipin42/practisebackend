import { useContext } from "react";
import { login,register,getMe } from "../services/auth.api";
import { AuthContext } from "../Auth.contexts";

export const useAuth=()=>{
const context = useContext(AuthContext)

const {user,setUser,loading,setLoading} = context

const handleLogin=async(username,password)=>{
  setLoading(true)
  const response =await login(username,password)
  setUser(response.user)
  setLoading(false)
}


const handleRegister=async(email,username,password)=>{
  setLoading(true)
  const response = await register(email,username,password)
  setUser(response.user)
  setLoading(false)
}

return{
  user,handleLogin,handleRegister,loading
}

}