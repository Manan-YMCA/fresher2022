import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import Events from "./components/Events";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
