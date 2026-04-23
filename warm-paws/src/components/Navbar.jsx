import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 mb-6 rounded-b-lg">
      {/* Brand / Logo Section */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-pink-600 gap-2">
          WarmPaws 🐾
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 font-medium italic">
          <li><Link to="/">Home</Link></li>
          {user && (
            <li><Link to="/profile">Profile</Link></li>
          )}
        </ul>

        {/* Auth Logic Section */}
        <div className="flex items-center gap-3">
          {!user ? (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link to="/signup" className="btn btn-primary btn-sm text-white">Signup</Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end flex items-center gap-3">
              {/* User Photo with DaisyUI Avatar style */}
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-2">
                  <img 
                    src={user?.photoURL || "https://via.placeholder.com/150"} 
                    alt="User" 
                    title={user?.displayName}
                  />
                </div>
              </div>

              <button
                onClick={logout}
                className="btn btn-error btn-sm text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;