import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function NavbarLayout() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default NavbarLayout;
