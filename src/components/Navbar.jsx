import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h2>WarmPaws</h2>

      <Link to="/">Home</Link>
      <Link to="/profile">My Profile</Link>

      {user ? (
        <>
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt=""
            width="40"
            title={user?.displayName}
          />

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
