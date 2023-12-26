import { NavLink } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {

  const navigate = useNavigate();

  return (
    <div className="Header">
      <div onClick={() => navigate("/")} className="PageLogo" style={{cursor: "pointer"}}>
        SGM <FaMusic />
      </div>
      <div>
        <nav>
          <div className="NavBarLinks">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="festivais"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Festivais
            </NavLink>
            <NavLink
              to="arraiais"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Arraiais
            </NavLink>
            <NavLink
              to="mapa"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Mapa
            </NavLink>
            {/* <NavLink
              to="admin"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Admin
            </NavLink> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
