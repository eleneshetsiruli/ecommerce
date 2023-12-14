import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

export const ProtectedRoute = () => {
  const { loginData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginData.token) {
      navigate("/login");
    }
  }, [loginData.token, navigate]);

  return (
    <div>
      {loginData.token && (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};
