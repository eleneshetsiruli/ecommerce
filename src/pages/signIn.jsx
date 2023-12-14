import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "Muhammad",
    lastName: "Ovi",
    age: 250,
  });
  const navigate = useNavigate();
  const [registartionForm, setRegistrationForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  function handleRegisterUser() {
    axios
      .post(
        "https://dummyjson.com/users/add",
        {
          registerUser,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
    alert("User successfully add");
    navigate("/login");
  }

  function handleRegister() {
    if (
      registartionForm.FirstName &&
      registartionForm.LastName &&
      registartionForm.Email &&
      registartionForm.Password
    ) {
      setRegistrationForm({
        ...registartionForm,
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
      });
      handleRegisterUser();
      navigate("/");
    }
  }
  return (
    <div className="registration">
      <div className="left-box">
        <div style={{ position: "absolute", left: "200px", bottom: "100px" }}>
          <h2>Welcome to aboard my friend</h2>
          <p style={{ color: "gray" }}>jusr a couple of clicks and we start</p>
        </div>
      </div>
      <div className="right-box">
        <h1>Welcome</h1>
        <div className="register-inputs">
          <input
            style={{
              borderColor: `${
                registartionForm.FirstName !== "" ? "gray" : "red"
              }`,
            }}
            type="text"
            value={registartionForm.FirstName}
            placeholder="FirstName"
            onChange={(ev) =>
              setRegistrationForm({
                ...registartionForm,
                FirstName: ev.target.value,
              })
            }
          />
          <input
            style={{
              borderColor: `${
                registartionForm.LastName !== "" ? "gray" : "red"
              }`,
            }}
            value={registartionForm.LastName}
            onChange={(ev) =>
              setRegistrationForm({
                ...registartionForm,
                LastName: ev.target.value,
              })
            }
            type="text"
            placeholder="LastName"
          />

          <input
            style={{
              borderColor: `${registartionForm.Email !== "" ? "gray" : "red"}`,
            }}
            value={registartionForm.Email}
            onChange={(ev) =>
              setRegistrationForm({
                ...registartionForm,
                Email: ev.target.value,
              })
            }
            type="text"
            placeholder="Email"
          />
          <input
            style={{
              borderColor: `${
                registartionForm.Password !== "" ? "gray" : "red"
              }`,
            }}
            value={registartionForm.Password}
            onChange={(ev) =>
              setRegistrationForm({
                ...registartionForm,
                Password: ev.target.value,
              })
            }
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="hr">
          <hr style={{ width: "90px" }} />
          <span>or</span>
          <hr style={{ width: "90px" }} />
        </div>
        <div className="registration-or">
          <button>
            <img
              style={{ width: "20px" }}
              src="data:image/png;base64,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"
            />
            google
          </button>
          <button>
            <img
              style={{ width: "15px" }}
              src="data:image/png;base64,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"
            />
            GitLab
          </button>
        </div>
        <button onClick={handleRegister} className="register-btn">
          Registration
        </button>
      </div>
    </div>
  );
};
