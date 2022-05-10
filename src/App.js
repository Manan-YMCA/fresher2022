import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration/Registration";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Home from "./components/Home/Home";
import Backtotop from "./components/BackToTop/BackToTop";
import Details from "./components/Details/Details";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage/NoPage";
import Login from "./components/Login/Login";

function App() {
  const isMobile = useMediaQuery("(max-width: 1060px)");
  return (
    <div className="App">
      {/* <div className="navbar">
        <Navbar />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="home">
        <Home/>
      </div> */}
    </div>
  );
}

export default App;
