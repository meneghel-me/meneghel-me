import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/terms">Termos e Serviços</Link></li>
        <li><Link to="/privacy">Política de Privacidade</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
