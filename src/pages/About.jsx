import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Footer } from "./components/Footer";

export const About = () => {
  const position = [42.33, 43.308];

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "60px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div className="map-container ">
          <h2>Our Company</h2>
          <p>
            We connect people and build communities to create economic
            opportunity for all. we create pathways to connect millions of
            sellers and buyers in more than 190 markets around the world. Our
            technology empowers our customers, providing everyone the
            opportunity to grow and thrive — no matter who they are or where
            they are in the world. And the ripple effect of our work creates
            waves of change for our custo
          </p>
        </div>
        <MapContainer
          center={position}
          zoom={5}
          style={{ height: "400px", width: "800px", marginBottom: "100px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A sample marker at {position[0]}, {position[1]}.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Footer />
    </>
  );
};
