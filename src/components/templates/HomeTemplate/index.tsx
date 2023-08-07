import Footer from "../../organism/Footer";
import Navbar from "../../organism/Navbar";

export default function HomeTemplate({ children }: any) {
  return (
    <div>
      <div className="bg-landingpage"></div>
      <Navbar />
      <div id="content" style={{ padding: "0 124px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
