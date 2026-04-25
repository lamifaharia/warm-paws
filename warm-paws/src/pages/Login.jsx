import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        setError("");
        navigate(from);
      })
      .catch(() => {
        setError("Invalid email or password.");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => navigate(from))
      .catch(() => setError("Google login failed."));
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        
        {/* ---------------------------Header--------------------------- */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Login to your WarmPaws account
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-slate-300 rounded-lg bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/0/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="relative mt-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200"></span>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-white text-slate-400 uppercase">
              Or continue with email
            </span>
          </div>
        </div>

        {/* ---------------------------Form ---------------------------*/}
        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded border border-red-100">
              {error}
            </p>
          )}

          {/* ---------------------------Email--------------------------- */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="email@example.com"
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* ---------------------------Password ---------------------------*/}
          <div className="relative">
            <label className="text-xs font-bold text-slate-700 uppercase block mb-1">
              Password
            </label>

            <input
              name="password"
              type={show ? "text" : "password"}
              required
              placeholder="••••••••"
              className="w-full p-3 border border-slate-300 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-9 text-xl text-gray-400 hover:text-blue-500 transition"
            >
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          {/* ---------------------------Forgot Password--------------------------- */}
          <div className="text-right text-sm">
            <Link to="/forget-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition shadow">
            Login
          </button>
        </form>

        {/* ---------------------------Signup ---------------------------*/}
        <p className="text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;