import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './components/Home';
import BottomNavBar from "./components/BottomNavbar";

import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Create from "./components/Create";

import Plazas from "./components/Plazas";
import Restaurants from "./components/Restaurants";
import Menus from "./components/Menus";

import Order from "./components/Order";

const App = () => {
  return (
    <Router>
      <RoutesWithBottomNavBar />
    </Router>
  );
};

const RoutesWithBottomNavBar = () => {
  const location = useLocation();
  const [showBottomNavBar, setShowBottomNavBar] = useState(true);

  // Update the state whenever the location changes
  useEffect(() => {
    setShowBottomNavBar(location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/create');
  }, [location]);

  return (
    <>
      <Routes className="relative z-0 bg-white">
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/plazas" element={<Plazas />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      {showBottomNavBar && <BottomNavBar className="bottom-navbar"/>}
    </>
  );
};

export default App;
