import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const { signup, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // 🔐 Professional Password Validation
    if (!/[A-Z]/.test(password)) {
      return setError("Requirement failed: Must have an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Requirement failed: Must have a lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Requirement failed: Minimum 6 characters.");
    }

    setError("");

    signup(email, password)
      .then(() => {
        // Since we removed the photo input, we pass a null or default value here
        updateUser(name, ""); 
        toast.success("Professional Profile Created!");
        navigate("/");
      })
      .catch(() => toast.error("Registration failed. Please check your network."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create Profile
          </h2>
          <p className="mt-2 text-sm text-slate-500 font-light">
            Join the WarmPaws professional network.
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 animate-pulse">
              <p className="text-red-700 text-xs font-medium">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
              <input 
                name="name" 
                placeholder="Dr. John Doe" 
                className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm transition-all" 
                required 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
              <input 
                name="email" 
                type="email" 
                placeholder="email@example.com"
                className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm transition-all" 
                required 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
              <input 
                name="password" 
                type="password" 
                placeholder="••••••••"
                className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 sm:text-sm transition-all" 
                required 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">
                *Min 6 chars, 1 uppercase, 1 lowercase.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg">
              Register Account
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-slate-600 font-light">
          Already a member?{" "}
          <Link to="/login" className="font-bold text-blue-600 hover:text-blue-500 underline underline-offset-4">
            Sign In Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;