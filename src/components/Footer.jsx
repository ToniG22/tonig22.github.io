import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <nav>
          <div className="FooterLinks">
          <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "footer-link active" : "footer-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="festivais"
              className={(navData) =>
                navData.isActive ? "footer-link active" : "footer-link"
              }
            >
              Festivais
            </NavLink>
            <NavLink
              to="arraiais"
              className={(navData) =>
                navData.isActive ? "footer-link active" : "footer-link"
              }
            >
              Arraiais
            </NavLink>
            <NavLink
              to="mapa"
              className={(navData) =>
                navData.isActive ? "footer-link active" : "footer-link"
              }
            >
              Mapa
            </NavLink>
            <NavLink
              to="admin"
              className={(navData) =>
                navData.isActive ? "footer-link active" : "footer-link"
              }
            >
              Admin
            </NavLink>
          </div>
        </nav>
      </div>
      <p>2023 All rights reserved</p>
    </div>
  );
}
