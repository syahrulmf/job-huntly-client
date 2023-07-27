import Navbar from "../../organism/Navbar";

export default function HomeTemplate({ children }: any) {
  return (
    <div>
      <div className="bg-landingpage"></div>
      <Navbar />
      <div id="content">{children}</div>
    </div>
  );
}
