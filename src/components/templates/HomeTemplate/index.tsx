import { useLocation } from "react-router-dom";

import Footer from "../../organism/Footer";
import Navbar from "../../organism/Navbar";

export default function HomeTemplate({ children }: any) {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" && <div className="bg-landingpage"></div>}
      <Navbar />
      <div id="content" style={{ padding: "0 124px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
