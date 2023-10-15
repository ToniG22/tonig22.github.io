import { NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <nav>
          <div className="FooterLinks">
            <NavLink to="/">Home</NavLink>
            <NavLink to="festivais">Festivais</NavLink>
            <NavLink to="arraiais">Arraiais</NavLink>
            <NavLink to="map">Map</NavLink>
            <NavLink to="admin">Admin</NavLink>
          </div>
        </nav>
      </div>
      <p>
        2023 All rights reserved
      </p>
    </div>
  );
}
