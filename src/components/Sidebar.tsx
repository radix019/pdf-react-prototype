import { NavLink } from "react-router-dom";
import "./style.css";

export default function Sidebar() {
  const linkStyle = {
    display: "block",
    padding: "10px 20px",
    textDecoration: "none",
    color: "#333",
  };

  return (
    <aside className="sidebar_container">
      <NavLink
        to="/react-pdf"
        style={linkStyle}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        React Pdf
      </NavLink>
      <NavLink
        to="/two"
        style={linkStyle}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Two
      </NavLink>
      <NavLink
        to="/three"
        style={linkStyle}
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Three
      </NavLink>
    </aside>
  );
}
