import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ServiceDetails from "./pages/ServiceDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar />



     

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;