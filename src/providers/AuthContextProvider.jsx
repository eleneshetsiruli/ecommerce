import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import { AuthContext } from "../contexts/AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useLocalStorage("loginData", {});
  const [loginUser, setLoginUser] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  async function loadLoginData() {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: loginUser.username,
          password: loginUser.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setLoginData(response.data);

      if (response.data.token) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const logOut = () => {
    setLoginData({ ...loginData, token: null });
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loadLoginData,
        setLoginUser,
        loginUser,
        logOut,
        loginData,
        searchValue,
        setSearchValue,
        open,
        setOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
