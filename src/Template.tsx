import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Template() {
  return (
    <div className="text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Template;
