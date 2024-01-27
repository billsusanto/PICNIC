import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";
import BottomNavBar from "./components/BottomNavbar";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> Navbar is placed outside of Routes so it's rendered on every page */}
      <Routes className="relative z-0 bg-white">
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
      <BottomNavBar />
    </Router>
  );
};

export default App;