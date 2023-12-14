import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SendIcon from "@mui/icons-material/Send";
import SecurityIcon from "@mui/icons-material/Security";
import { Footer } from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

export const Home = () => {
  const { setCategoryName } = useContext(CategoryContext);
  const navigate = useNavigate();
  function handleExport(categorie) {
    setCategoryName(categorie);
    navigate("categories");
  }
  return (
    <>
      <div className="home-body">
        <div className="block-items-group">
          <div className="group-picture">
            <h4>home decorations</h4>
            <button onClick={() => handleExport("home-decoration")}>
              sourse now
            </button>
          </div>
          <div className="mini-group">
            <div
              onClick={() => handleExport("skincare")}
              className="group-items"
            >
              <div className="paragraps">
                <p>skin-care</p>
              </div>
              <img src="https://img.freepik.com/premium-photo/liquid-gel-beauty-serum-texture-swatch-isolated-white_279659-776.jpg?size=626&ext=jpg&ga=GA1.1.946571068.1693428535&semt=sph" />
            </div>
            <div className="group-items">
              <div className="paragraps">
                <p>groceries</p>
              </div>
              <img
                onClick={() => handleExport("groceries")}
                src="https://img.freepik.com/premium-photo/fresh-oranges-shopping-cart_41466-591.jpg?size=626&ext=jpg&ga=GA1.1.946571068.1693428535&semt=sph"
              />
            </div>
          </div>

          <div className="mini-group">
            <div className="group-items">
              <div className="paragraps">
                <p>furniture</p>
              </div>
              <img
                onClick={() => handleExport("furniture")}
                src="https://atlas-content-cdn.pixelsquid.com/assets_v2/227/2278273627923158771/jpeg-600/G03.jpg?modifiedAt=1"
              />
            </div>
            <div className="group-items">
              <div className="paragraps">
                <p>tops</p>
              </div>
              <img
                onClick={() => handleExport("tops")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIGFixV5VMqhnWc6S-RBcxAGa_7qNeXuATzQ&usqp=CAU"
              />
            </div>
          </div>
          <div className="mini-group">
            <div className="group-items">
              <div className="paragraps">
                <p>dresses</p>
              </div>
              <img
                onClick={() => handleExport("womens-dresses")}
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="group-items">
              <div className="paragraps">
                <p>fragrances</p>
              </div>
              <img
                onClick={() => handleExport("fragrances")}
                src="https://img.freepik.com/free-vector/lavender-bouquet-realistic-illustration_1284-9237.jpg?size=626&ext=jpg&ga=GA1.1.946571068.1693428535&semt=sph"
              />
            </div>
          </div>
          <div className="mini-group">
            <div className="group-items">
              <div className="paragraps">
                <p>mens shoes</p>
              </div>
              <img
                onClick={() => handleExport("mens-shoes")}
                src="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.946571068.1693428535&semt=ais"
              />
            </div>
            <div className="group-items">
              <div className="paragraps">
                <p>sunglases</p>
              </div>
              <img
                onClick={() => handleExport("sunglasses")}
                src="https://img.freepik.com/premium-photo/sunglasses-isolated-white-background_743855-49552.jpg?size=626&ext=jpg&ga=GA1.1.946571068.1693428535&semt=sph"
              />
            </div>
          </div>
        </div>

        <div className="section-sale">
          <div className="coundown">
            <div>
              <div style={{ width: "280px" }}>
                <h4>Deals and offers</h4>
                <p style={{ color: "gray" }}>Hygiene equipmenst</p>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <div className="mini-box">04 Days</div>
                <div className="mini-box">13 hours</div>
                <div className="mini-box">34 min..</div>
                <div className="mini-box">56 sec..</div>
              </div>
            </div>
            <div className="sale-layout">
              <div className="sale-item">
                <img
                  onClick={() => handleExport("smartphones")}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkIFysKQIQyfRreLtwcq9DKfsr20FAvUOkNg&usqp=CAU"
                />
                <h4>SmartPhones</h4>
                <button>-25%</button>
              </div>
              <div className="sale-item">
                <img
                  onClick={() => handleExport("laptops")}
                  src="data:image/jpeg;base64,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"
                />
                <h4>Laptops</h4>
                <button>-15%</button>
              </div>
              <div className="sale-item">
                <img
                  onClick={() => handleExport("mens-watches")}
                  src="https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/nhUAAOSwFJNkJPcg/$_57.JPG?set_id=8800005007"
                />
                <h4>Mens watches</h4>
                <button>-40%</button>
              </div>
              <div className="sale-item">
                <img
                  onClick={() => handleExport("womens-jewellery")}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuom3ETFBbTrEJwFptU0N-7QnK-f1gqxbrOA&usqp=CAU"
                />
                <h4>Jewellery</h4>
                <button>-25%</button>
              </div>
              <div className="sale-item">
                <img
                  style={{ paddingTop: "30px" }}
                  onClick={() => handleExport("motorcycle")}
                  src="https://cars.usnews.com/images/new-features/widget-section/19_FLHX_R_V4.jpg"
                  alt=""
                />

                <h4>Motorcyle</h4>
                <button>-15%</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section-service">
          <div className="section-box ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kV1WL4GzKCs3jnQCxfiovgwL85rq422zdg&usqp=CAU"
              alt=""
            />
            <button>
              <SearchIcon />
            </button>
            <p>Source from industry Hubs</p>
          </div>
          <div className="section-box ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dP33EesXekW95FuxbDUqPRmLmErDC2hGsg&usqp=CAU"
              alt=""
            />
            <button>
              <StorefrontIcon />
            </button>
            <p>Customize Your Products</p>
          </div>
          <div className="section-box ">
            <img src="https://www.embraercommercialaviation.com/wp-content/uploads/2022/12/Porter_Carousel_Header-1800x757.jpg" />
            <button>
              <SendIcon />
            </button>
            <p>Fast, reliable shipping </p>
          </div>
          <div className="section-box ">
            <img src="data:image/jpeg;base64,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" />
            <button>
              <SecurityIcon />
            </button>
            <p>product monitoring </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
