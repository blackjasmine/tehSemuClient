import { createContext, useEffect, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) return setUser(null);
    try {
      const res = await axios.get(`${API}/api/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      setUser(null);
      console.error(err);
      localStorage.removeItem("token");
    }
  };
  
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  }
  
  useEffect(() => {
    checkAuth();
  }, []);
  
  return(
    <AuthContext.Provider value={{user, setUser, login, logout, checkAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
