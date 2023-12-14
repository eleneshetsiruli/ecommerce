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
  Rating,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContextProvider";
import { AuthContext } from "../../contexts/AuthContext";

export const Products = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [starValue, setStarValue] = useState("");
  const [products, SetProducts] = useState([]);
  const [brands, setBrands] = useState("");
  const [stock, setStock] = useState({
    direction: "",
  });
  const [Range, setRange] = useState({
    Pricefrom: 0,
    Priceto: 0,
  });

  const [params, setParams] = useState({
    skip: 0,
    limit: 20,
  });
  const renderProducts = products.length > 0 ? products : originalProducts;

  function handleRaiting() {
    const filteredRaiting = renderProducts.filter(
      (el) => el.rating >= starValue
    );

    SetProducts(filteredRaiting);
  }
  useEffect(() => {
    handleRaiting();
  }, [starValue]);

  // function handleStock() {

  // }

  function loadAllProducts() {
    const queryParams = new URLSearchParams(params);
    fetch("https://dummyjson.com/products?" + queryParams)
      .then((res) => res.json())
      .then((data) => {
        setOriginalProducts(data.products);
        SetProducts(data.products);
      });
  }

  useEffect(() => {
    loadAllProducts();
  }, [params]);

  function addQueryParams() {
    setParams({ ...params, skip: activePage - 1 * limit });
  }
  function handlePriceLow() {
    const filteredProducts = products.slice().sort((a, b) => a.price - b.price);

    SetProducts(filteredProducts);
  }

  function handlePriceHight() {
    const filteredProducts = products.slice().sort((a, b) => b.price - a.price);

    SetProducts(filteredProducts);
  }

  function handleStockup() {
    const filteredProducts = products.slice().sort((a, b) => b.stock - a.stock);

    SetProducts(filteredProducts);
  }

  function handleStockDown() {
    const filteredProducts = products.slice().sort((a, b) => a.stock - b.stock);

    SetProducts(filteredProducts);
  }

  useEffect(() => {
    handlePriceLow();
  }, []);
  function handelBrandChange(event) {
    const selectedBrand = event.target.value;
    setBrands(selectedBrand);
    sortByBrand(selectedBrand);
  }
  function sortByBrand(brand) {
    if (brand === "") {
      SetProducts(originalProducts);
    } else {
      const filteredBrand = originalProducts.filter(
        (elem) => elem.brand === brand
      );
      SetProducts(filteredBrand);
    }
  }
  function handleRestart() {
    SetProducts(originalProducts);
    setBrands("");
    setRange({ ...Range, Pricefrom: 0, Priceto: 0 });
    setStarValue("");
  }

  function priceRange() {
    const range = renderProducts.filter(
      (el) =>
        el.price > parseFloat(Range.Pricefrom) &&
        el.price < parseFloat(Range.Priceto)
    );

    SetProducts(range);
    setRange({ ...Range, Prcefrom: 0, Priceto: 0 });
  }

  useEffect(() => {
    priceRange();
  }, [params]);

  function handlePageChange(event, newPage) {
    setActivePage(newPage);

    setParams({
      ...params,
      skip: (newPage - 1) * params.limit,
    });
  }

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
            onChange={handelBrandChange}
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
          <Button onClick={handlePriceLow}>Price Low</Button>
          <Button onClick={handlePriceHight}>Price Hight</Button>
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
        <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
          <InputLabel
            style={{ color: "#42a5f5" }}
            id="demo-select-medium-label"
          >
            Raiting
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="raiting"
            onChange={(ev) => setStarValue(ev.target.value)}
            value={starValue}
          >
            <MenuItem value={5}>
              <Rating name="read-only" value={5} readOnly />
            </MenuItem>
            <MenuItem value={4}>
              <Rating name="read-only" value={4} readOnly />
            </MenuItem>
            <MenuItem value={3}>
              <Rating name="read-only" value={3} readOnly />
            </MenuItem>
            <MenuItem value={2}>
              <Rating name="read-only" value={2} readOnly />
            </MenuItem>
            <MenuItem value={1}>
              <Rating name="read-only" value={1} readOnly />
            </MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={stock.direction}
            onChange={(ev, newValue) => setStock({ direction: newValue })}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
          >
            <Tab onClick={handleStockDown} value="down" label="Stock ⬇" />
            <Tab onClick={handleStockup} value="up" label="Stock ⬆" />
          </Tabs>
        </Box>
        <button
          style={{
            width: "76px",
            height: "40px",
            border: "1px solid rgba(222,226,231,1)",
            color: "#62a9e4",
            backgroundColor: "white",
            marginLeft: "50px",
          }}
          onClick={priceRange}
        >
          Apply
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="product-body">
          {products.map((el) => (
            <ProductCard key={el.id} data={el} />
          ))}
        </div>
        <Pagination
          onClick={addQueryParams}
          count={5}
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
