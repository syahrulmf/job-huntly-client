import "./style.css";

const listOfTestimoni = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

export default function Testimoni() {
  return (
    <div className="testimoni-wrapper">
      <div className="text-info">Companies we helped grow</div>
      <div className="list-testimoni">
        {listOfTestimoni.map((item, i) => (
          <img src={item} alt={item} key={i} />
        ))}
      </div>
    </div>
  );
}
