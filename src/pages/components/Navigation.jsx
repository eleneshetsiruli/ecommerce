import { Fingerprint, AddShoppingCart, Home } from "@mui/icons-material";
import { Avatar, Badge, Button, IconButton, TextField } from "@mui/material";
import "./nav.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { SearchComponent } from "./SearchComponent";
import { CartContext } from "../../contexts/CartContextProvider";
import { CategoryContext } from "../../contexts/CategoryContext";

export const Navigation = () => {
  const { logOut, loginData, setSearchValue, searchValue } =
    useContext(AuthContext);
  const { setCategoryName } = useContext(CategoryContext);
  const { open, setOpen } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const { cartItems } = useContext(CartContext);

  function loadCategories() {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }
  useEffect(() => {
    loadCategories();
  }, []);

  function handleClick() {
    setOpen(!open);
  }
  function handleAddCategories(el) {
    setCategoryName(el);
    setOpen(!open);
  }
  return (
    <div className="header">
      <div className="nav-btns">
        <Button component={Link} to="/" variant="outlined">
          <Home color="primary" />
          Home
        </Button>
        <Button component={Link} to="about" variant="outlined">
          about
        </Button>
        <Button component={Link} to="products" variant="outlined">
          products
        </Button>
        <Button onClick={handleClick} variant="outlined">
          <div>categories</div>
        </Button>
        {open ? (
          <div className="hidden-categories-container">
            <div className="hidden-categories">
              <div className="arrow"></div>
              {categories.map((el) => (
                <Link
                  onClick={() => handleAddCategories(el)}
                  style={{ textDecoration: "none", color: "gray" }}
                  to={"categories"}
                  key={el.id}
                >
                  <li key={el.id}>{el}</li>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        style={{ width: 440 }}
        onChange={(ev) => setSearchValue(ev.target.value)}
        value={searchValue}
      />
      <SearchComponent />

      <div>
        <div className="cart">
          <IconButton
            color="primary"
            aria-label="add to shopping cart "
            component={Link}
            to="cart"
          >
            <AddShoppingCart to="cart" />
            <div>{cartItems.length}</div>
          </IconButton>
        </div>

        {!loginData.token ? (
          <IconButton
            aria-label="fingerprint"
            color="success"
            component={Link}
            to="login"
          >
            <Fingerprint />
            <span className="small-text">log In</span>
          </IconButton>
        ) : (
          <>
            <Link to={"profile"}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                />
              </Badge>
            </Link>
            <IconButton
              onClick={logOut}
              aria-label="fingerprint"
              color="primary"
            >
              <Fingerprint />
              <span className="small-text">log Out</span>
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};
