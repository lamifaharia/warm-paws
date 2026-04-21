import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ServiceDetails from "./pages/ServiceDetails";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
          <>
      <Navbar />

      <Routes>
        {/* routes */}
      </Routes>
    </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;