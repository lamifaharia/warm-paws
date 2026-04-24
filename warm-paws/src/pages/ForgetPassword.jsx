import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {
        toast.success("Check your Gmail!");
        window.location.href = "https://mail.google.com";
      })
      .catch(() => toast.error("Failed"));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleReset} className="bg-white p-6 shadow rounded">
        <h2 className="text-xl mb-3">Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 mb-3 w-full"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;