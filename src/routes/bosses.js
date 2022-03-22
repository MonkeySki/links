import { NavLink, Outlet } from "react-router-dom";
import { getBosses } from "../data";

export default function Bosses() {
  let bosses = getBosses();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {bosses.map((invoice) => (
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/bosses/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}