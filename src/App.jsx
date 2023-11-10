import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LogIn } from "./pages/logIn";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signIn";
import { Profile } from "./pages/profile";
import { Cart } from "./pages/cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<div>protected route</div>}>
          <Route path="/profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<div>products page</div>} />
          <Route path="products/:id" element={<div>single product</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
