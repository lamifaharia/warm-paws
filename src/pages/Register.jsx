import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Registered"))
      .catch((err) => alert(err.message));
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="email" />
      <input name="password" type="password" />
      <button>Register</button>
    </form>
  );
};

export default Register;