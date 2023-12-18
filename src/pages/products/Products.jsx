import { useContext, useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/RestartAlt";
import "./products.css";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { AuthContext } from "../../contexts/AuthContext";

export const Products = () => {
  const [activePage, setActivePage] = useState(1);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(1);
  const [brands, setBrands] = useState("");
  const [stock, setStock] = useState({
    direction: "",
  });
  const [hight, setHight] = useState({
    direction: "",
  });
  const [Range, setRange] = useState({
    Pricefrom: 0,
    Priceto: 2000,
  });

  const [params, setParams] = useState({
    skip: 0,
    limit: 20,
  });
  const pageCount = Math.ceil(total / params.limit);

  function loadAllProducts() {
    const queryParams = new URLSearchParams(params);
    fetch("https://dummyjson.com/products?" + queryParams)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      });
  }

  useEffect(() => {
    loadAllProducts();
  }, [params]);

  function handleRestart() {
    setBrands("");
    setRange({ ...Range, Pricefrom: 0, Priceto: 2000 });

    setStock({ ...stock, direction: "" });

    loadAllProducts();
  }

  function handlePageChange(event, newPage) {
    setActivePage(newPage);

    setParams({
      ...params,
      skip: (newPage - 1) * params.limit,
    });

    loadAllProducts();
  }

  const filteredProducts =
    Range.Pricefrom !== 0 || Range.Priceto !== 2000 || brands
      ? products.filter((el) => {
          if (el.price < Range.Pricefrom || el.price > Range.Priceto) {
            return false;
          }

          if (el.brand !== brands && brands) {
            return false;
          }

          return true;
        })
      : products;

  const sortedData = [...filteredProducts].sort((a, b) => {
    if (hight.direction === "low") {
      if (stock.direction === "stockUp") {
        return a.price - b.price || b.stock - a.stock;
      } else if (stock.direction === "stockDown") {
        return a.price - b.price || a.stock - b.stock;
      } else {
        return a.price - b.price;
      }
    } else if (hight.direction === "hight") {
      if (stock.direction === "stockUp") {
        return b.price - a.price || b.stock - a.stock;
      } else if (stock.direction === "stockDown") {
        return b.price - a.price || a.stock - b.stock;
      } else {
        return b.price - a.price;
      }
    } else if (stock.direction === "stockUp") {
      return b.stock - a.stock || a.price - b.price;
    } else if (stock.direction === "stockDown") {
      return a.stock - b.stock || a.price - b.price;
    } else {
      return 0;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="panel">
        <Button
          onClick={handleRestart}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Clear
        </Button>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Brands</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={brands}
            onChange={(ev) => setBrands(ev.target.value)}
            label="Brands"
          >
            <MenuItem value="Apple">Apple</MenuItem>
            <MenuItem value="Samsung">Samsung</MenuItem>
            <MenuItem value="Huawei">Huaweiy</MenuItem>
            <MenuItem value="OPPO">OPPO</MenuItem>
            <MenuItem value="Dermive">Dermive</MenuItem>
          </Select>
        </FormControl>

        <ButtonGroup variant="text" aria-label="text button group">
          <Button onClick={() => setHight({ ...hight, direction: "low" })}>
            Price Low
          </Button>
          <Button onClick={() => setHight({ ...hight, direction: "hight" })}>
            Price Hight
          </Button>
        </ButtonGroup>
        <div style={{ display: "flex", gap: "30px" }}>
          <TextField
            style={{ width: "80px" }}
            id="outlined-controlled"
            label="from $"
            value={Range.Pricefrom}
            onChange={(ev) =>
              setRange({ ...Range, Pricefrom: ev.target.value })
            }
          />
          <TextField
            style={{ width: "80px" }}
            id="outlined-controlled"
            label="to $"
            value={Range.Priceto}
            onChange={(ev) => setRange({ ...Range, Priceto: ev.target.value })}
          />
        </div>

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={stock.direction}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab
              onClick={() => setStock({ ...stock, direction: "stockDown" })}
              label="Stock ⬇"
            />
            <Tab
              onClick={() => setStock({ ...stock, direction: "stockUp" })}
              label="Stock ⬆"
            />
          </Tabs>
        </Box>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="product-body">
          {sortedData?.map((el) => (
            <ProductCard key={el.id} data={el} />
          ))}
        </div>
        <Pagination
          count={pageCount}
          color="primary"
          page={activePage}
          onChange={handlePageChange}
          style={{ marginTop: "50px" }}
        />
      </div>
    </div>
  );
};
export function ProductCard({ data }) {
  const { setSearchValue } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  function handleHidden() {
    setSearchValue("");
  }
  return (
    <div className="simple-product">
      <Link onClick={handleHidden} to={`/products/${data.id}`}>
        <img src={data.images[0]} />
      </Link>

      <h4>{data.brand}</h4>
      <div className="data-add">
        <span>{data.price}$</span>
        <Button onClick={() => addToCart(data)} variant="outlined">
          add
        </Button>
      </div>
    </div>
  );
}
