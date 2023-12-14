import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signIn";
import { Profile } from "./pages/profile";
import { Cart } from "./pages/cart";
import { LogIn } from "./pages/login/logIn";
import { ProtectedRoute } from "./pages/components/ProtectedRoute";
import { Products } from "./pages/products/Products";

import { SimpleProductPage } from "./pages/products/SimpleProductPage";
import { LayOut } from "./pages/components/LayOut";
import { Categories } from "./pages/Categories";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="login/signin" element={<SignIn />} />
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SimpleProductPage />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          x
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
