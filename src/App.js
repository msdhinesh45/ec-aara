import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./components/TopCarousel";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Top />
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
