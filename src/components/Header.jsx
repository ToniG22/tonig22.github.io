import { NavLink} from "react-router-dom";
import { FaMusic } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="Header">
      <div className="PageLogo">
        SGM <FaMusic/>  
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
              to="map"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Map
            </NavLink>
            <NavLink
              to="admin"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Admin
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
