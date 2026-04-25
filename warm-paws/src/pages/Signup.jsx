import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const { signup, updateUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[A-Z]/.test(password)) {
      return setError("Must include an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Must include a lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Minimum 6 characters required.");
    }

    setError("");

    signup(email, password)
      .then(() => {
        updateUser(name, "");
        toast.success("Account Created!");
        navigate("/");
      })
      .catch(() => toast.error("Signup failed."));
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Create Account
          </h2>
          <p className="text-sm text-slate-500">
            Join WarmPaws today
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">

          {error && (
            <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded border border-red-100">
              {error}
            </p>
          )}

          {/* ---------------------------Name ---------------------------*/}
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-3 border border-slate-300 rounded-lg"
          />

          {/* ---------------------------Email--------------------------- */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-slate-300 rounded-lg"
          />

          {/* ---------------------------Password ---------------------------*/}
          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full p-3 border border-slate-300 rounded-lg pr-10"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 text-xl text-gray-400 hover:text-blue-500 transition"
            >
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Must include uppercase, lowercase, and 6+ characters
          </p>

          {/* ---------------------------Submit ---------------------------*/}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow">
            Signup
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;