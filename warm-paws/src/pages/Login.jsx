import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => navigate("/"))
      .catch((err) => setError("Invalid email or password."));
  };

  return (
    <div className="min-h-[calc(100-80px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-light">
            Please enter your professional credentials to log in.
          </p>
        </div>

        {/* Social Login */}
        <div className="mt-6">
          <button
            onClick={() => googleLogin().then(() => navigate("/"))}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/0/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-400 uppercase tracking-widest text-[10px] font-bold">Or continue with email</span></div>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded border border-red-100">{error}</p>}
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm transition-all"
                placeholder="doctor@warmpaws.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
              <input
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-400 text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent sm:text-sm transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
              <label className="ml-2 block text-sm text-slate-600 font-light">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all shadow-lg"
            >
              Sign In to Dashboard
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-slate-500 font-light">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold text-blue-600 hover:text-blue-500">
            Create Professional Profile
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;