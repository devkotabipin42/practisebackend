import { useContext } from "react";
import { AuthContext } from "../auth/auth.context.jsx";


export function useAuth(){
  const context = useContext(AuthContext)
  return context
}