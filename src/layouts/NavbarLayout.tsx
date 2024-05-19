import { Outlet } from "react-router-dom";
import Navbar from "../component/ResponsiveAppBar/Navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default NavbarLayout;
