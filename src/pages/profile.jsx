import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [editedInfo, setEditedInfo] = useState({
    name: "Terry",
    lastName: "Medhurst",
    age: 50,
    password: "atyO9s",
    maidenName: "smitham",
    Phone: "+637916758914",
    university: "Capital University",
  });

  function loadUserInformation() {
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }
  useEffect(() => {
    loadUserInformation();
  }, []);
  return (
    <>
      <Link to={"/"}>
        <FaHome className="icon" />
      </Link>
      <div className="flex-cont">
        <div>
          <img src={userInfo.image} alt="" />
        </div>
        <div>
          <div>
            <div className="user-table">
              <span className="user-info"> Full name</span>
              <input
                className="input"
                onChange={(ev) =>
                  setEditedInfo({
                    ...editedInfo,
                    name: ev.target.value,
                  })
                }
                value={editedInfo.name}
                type="text"
              />
              <span className="star">✮</span>
            </div>
            <div className="user-table">
              <span className="user-info">Last Name</span>

              <input
                className="input"
                onChange={(ev) =>
                  setEditedInfo({
                    ...editedInfo,
                    lastName: ev.target.value,
                  })
                }
                value={editedInfo.lastName}
                type=" text"
              />

              <span className="star">✮</span>
            </div>
            <div className="user-table">
              <span className="user-info"> Email address</span>
              <div style={{ color: "gray", cursor: "all-scroll" }}>
                {userInfo.email}
              </div>
              <span style={{ color: "red" }}>✮</span>
            </div>
            <div className="user-table">
              <div className="user-info">Age</div>

              <input
                className="input"
                onChange={(ev) =>
                  setEditedInfo({
                    ...editedInfo,
                    age: ev.target.value,
                  })
                }
                value={editedInfo.age}
                type=" text"
              />
              <span className="star">✮</span>
            </div>
            <div className="user-table ">
              <div className="user-info">Password</div>

              <input
                className="input"
                onChange={(ev) =>
                  setEditedInfo({
                    ...editedInfo,
                    password: ev.target.value,
                  })
                }
                value={editedInfo.password}
                type=" text"
              />
              <span className="star">✮</span>
            </div>

            <div className="user-table">
              <span className="user-info"> Domain</span>

              <div className="input">{userInfo.domain}</div>
              <span style={{ color: "red" }}>✮</span>
            </div>
            <div className="user-table">
              <span className="user-info"> MaidenName</span>

              <input
                className="input"
                onChange={(ev) =>
                  setEditedInfo({
                    ...editedInfo,
                    maidenName: ev.target.value,
                  })
                }
                value={editedInfo.maidenName}
                type=" text"
              />
              <span className="star">✮</span>
            </div>

            <Link className="save-changes-link" to={"/"}>
              <Button
                style={{ marginTop: "80px", marginLeft: "100px" }}
                variant="contained"
                color="success"
              >
                save changes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
