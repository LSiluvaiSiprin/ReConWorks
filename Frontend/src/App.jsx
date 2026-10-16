import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbars";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Pofile";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="*"
          element={
            <main className="not-found">
              <h1>404</h1>
              <p>Page not found.</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
