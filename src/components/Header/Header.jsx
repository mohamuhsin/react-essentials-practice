import headerImg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={headerImg} alt={headerImg} />
      <h1>React Essentials</h1>
      <p>
        Fundamnetal Concepts You Will Need When Building Any React Application
      </p>
    </header>
  );
}
