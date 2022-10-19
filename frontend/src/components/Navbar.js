import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuth();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <nav>
        <Link to="/">
          <h1>mern authentication app</h1>
        </Link>
        {user && (
          <div className="user">
            <h2>
              Welcome <span className="user-email">{user.email}</span>
            </h2>
            <button className="logout" onClick={handleClick}>
              Log out <span className="logout-arrow">&#8658;</span>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
