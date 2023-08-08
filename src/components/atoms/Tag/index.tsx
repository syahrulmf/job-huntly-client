import "./style.css";

type Props = {
  name: string;
  type?: "primary" | "success" | "warning";
};

export default function index({ name, type = "primary" }: Props) {
  return <span className={`${type} tag`}>{name}</span>;
}
