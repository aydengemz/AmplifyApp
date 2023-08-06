
import { Outlet, Link } from "react-router-dom";
import '../App.css';


const Layout = () => {
  return (
    <>
    <div>
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
          <li>
            <Link to="/api1">api1</Link>
          </li>
          <li>
            <Link to="/api2">api2</Link>
          </li>
          <li>
            <Link to="/storage">storage</Link>
          </li>
          <li>
            <Link to="/maps">maps</Link>
            </li>
        </ul>
    </div>



      <Outlet />
    </>
  )
};

export default Layout;