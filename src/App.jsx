import { BrowserRouter } from "react-router-dom";

import Home from './components/Home'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div 
        className="relative z-0 bg-white">
          <div className="relative z-0">
            <Home />
          </div>
          <div>
            <Navbar />
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
