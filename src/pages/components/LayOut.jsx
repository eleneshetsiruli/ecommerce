import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export const LayOut = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
