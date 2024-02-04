import "./App.css";
import FooterBar from "./components/FooterBar.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          {/* <GoogleMapComponent /> */}
          <Route path="/" element={<RestRoomApi />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}


export default App;
