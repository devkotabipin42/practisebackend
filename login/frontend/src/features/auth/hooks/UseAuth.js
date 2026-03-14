import { useContext } from "react";
import { login, register, getMe, logout } from "../services/auth.api";
import { AuthContext } from "../Auth.contexts";

export const useAuth = () => {
  const context = useContext(AuthContext)

  const { user, setUser, loading, setLoading } = context

  const handleLogin = async (username, email, password) => {
    setLoading(true)
    const response = await login(username, email, password)
    setUser(response.user)
    setLoading(false)
  }


  const handleRegister = async (email, username, password) => {
    setLoading(true)
    const response = await register(email, username, password)
    setUser(response.user)
    setLoading(false)
  }

  const handleLogout = async () => {
    setLoading(true)
    const response = await logout()
    setUser(null)
    setLoading(false)
  }

  
  return {
    user, handleLogin, handleRegister, loading,handleLogout
  }

}