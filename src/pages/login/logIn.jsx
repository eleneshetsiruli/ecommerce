import { Button, TextField } from "@mui/material";
import "./login.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const { setLoginUser, loadLoginData, loginUser } = useContext(AuthContext);
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-inp">
          <TextField
            onChange={(ev) =>
              setLoginUser({ ...loginUser, username: ev.target.value })
            }
            id="outlined-basic"
            label="username"
            variant="outlined"
          />
          <TextField
            onChange={(ev) =>
              setLoginUser({ ...loginUser, password: ev.target.value })
            }
            id="outlined-basic"
            label="password"
            variant="outlined"
          />
        </div>
        <Button onClick={loadLoginData} variant="contained" color="success">
          Success
        </Button>
        <Link to={"signin"} style={{ fontStyle: "italic" }}>
          Registration
        </Link>
      </div>
    </div>
  );
};
