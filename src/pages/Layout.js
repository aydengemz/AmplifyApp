
import { Outlet, Link } from "react-router-dom";
import '../App.css';


const Layout = () => {
  return (
    <>
      <nav>
        <ul id = "navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/player">Player</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;