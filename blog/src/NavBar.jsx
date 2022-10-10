import React from "react";
import useUser from "./hooks/useUser";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
function NavBar() {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/articles">
          <li>Articles</li>
        </Link>
      </ul>
      <div className="nav-right">
        {user ? (
          <button onClick={() => signOut(getAuth())}>Log Out</button>
        ) : (
          <button onClick={() => navigate("/log-in")}>Log In</button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
