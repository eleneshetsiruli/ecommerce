import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Button, InputAdornment, TextField } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useState } from "react";
export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="subs">
        <div className="footer-newsletter">
          <h3>Subscribe on our newsletter</h3>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="email-layout">
            <TextField
              placeholder="Email"
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MarkEmailReadIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button onClick={() => setEmail("")} variant="outlined">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="brand">
          <div style={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagIcon />
            <h6>BRAND</h6>
          </div>
          <p>Best information about the company gives here but now</p>

          <div className="foot-icons">
            <FacebookIcon style={{ color: "gray" }} />
            <TwitterIcon style={{ color: "gray" }} />
            <InstagramIcon style={{ color: "gray" }} />
            <YouTubeIcon style={{ color: "gray" }} />
            <PinterestIcon style={{ color: "gray" }} />
          </div>
        </div>
        <div>
          <h5>about</h5>
          <p>About Us</p>
          <p>Find store</p>
          <p>Categories</p>
          <p>Blogs</p>
        </div>
        <div>
          <h5>PartnerShip</h5>
          <p>About Us</p>
          <p>Find store</p>
          <p>Categories</p>
          <p>Blogs</p>
        </div>
        <div>
          <h5>Information</h5>
          <p>Money Refund</p>
          <p>Find store</p>
          <p>Shipping</p>
          <p>Contact us</p>
        </div>
        <div>
          <h5>For users</h5>
          <p>login</p>
          <p>Register</p>
          <p>Settings</p>
          <p>My Orders</p>
        </div>
        <div className="about">
          <h5>get App</h5>
          <img src="https://logowik.com/content/uploads/images/app-store-and-google-play.jpg" />
        </div>
      </div>
      <div className="small-foot">
        <h6>2023 Ecommerce.</h6>
        <span>🇬🇪</span>
      </div>
    </div>
  );
};
