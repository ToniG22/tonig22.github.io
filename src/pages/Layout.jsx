import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/festivals">Festivals</Link>
          </li>
          <li>
            <Link to="/arraiais">Arraiais</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
