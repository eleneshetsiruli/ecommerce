import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { IconButton, Rating, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { CartContext } from "../../contexts/CartContextProvider";

export const SimpleProductPage = () => {
  const params = useParams();
  const [simpleProduct, setSimpleProduct] = useState({});
  const [starValue, setStarValue] = useState(0);
  const { addToCart } = useContext(CartContext);

  function loadSimpleProduct() {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSimpleProduct(data));
  }

  useEffect(() => {
    loadSimpleProduct();
  }, []);

  return (
    <div className="product-container">
      <div className="swiper-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ width: "300px" }}
        >
          {simpleProduct.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="swiper-image"
                src={image}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-body">
        <div>
          <h1>{simpleProduct.title}</h1>
          <p>{simpleProduct.description}</p>
          <span className="price">{simpleProduct.price} $</span>
          <br />
          <Typography component="legend">Raiting</Typography>
          <Rating
            name="simple-controlled"
            value={starValue}
            onChange={(event, newValue) => {
              setStarValue(newValue);
            }}
          />
          <div>{simpleProduct.rating}</div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            on stack
            <span style={{ color: "green" }}>{simpleProduct.stock}</span>
            <IconButton
              onClick={() => addToCart(simpleProduct)}
              color="primary"
              aria-label="add to shopping cart"
            >
              <AddShoppingCart style={{ color: "green" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
