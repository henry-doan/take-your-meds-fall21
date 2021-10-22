import React, { useState } from 'react';
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        setUser(res.data.data);
        history.push("/");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  const handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        setUser(res.data.data);
        history.push("/today");
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  const handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        setUser(null);
        history.push('/');
      })
      .catch( res => {
        console.log(res);
      })
  }
  
  const updateUser = (id, user) => {
    axios.put(`/api/users/${id}`, { user })
      .then(res => {
        setUser(res.data)
        window.location.href = `/profile`
        //history.push(`/users/`)
      })
      .catch( err => console.log(err))
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      authenticated: user !== null,
      handleRegister: handleRegister,
      handleLogin: handleLogin,
      handleLogout: handleLogout,
      setUser: (user) => setUser({ user }),
      updateUser: updateUser
    }}>
      { children }
    </AuthContext.Provider>
  ) 
};

export default AuthProvider;
