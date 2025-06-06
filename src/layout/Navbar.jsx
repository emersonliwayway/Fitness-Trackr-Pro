import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/activities">Activities</Link>
        <Link to="/routines">Routines</Link>

        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
