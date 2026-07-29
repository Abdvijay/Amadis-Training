import { Link } from "@tanstack/react-router";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>Dashboard</Link>

      <Link to="/use-state" activeProps={{ className: "active" }}>useState</Link>

      <Link to="/use-effect" activeProps={{ className: "active" }}>useEffect</Link>

      <Link to="/use-ref" activeProps={{ className: "active"}}>useRef</Link>
    </nav>
  );
}

export default Navigation;