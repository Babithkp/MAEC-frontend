import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-footer/Navbar";
import Home from "./components/App/home/Home";
import Footer from "./components/nav-footer/Footer";
import CreateAccount from "./components/App/logging/CreateAccount";
import Login from "./components/App/logging/Login";
import Dashboard from "./components/App/Dashboard";
import Aboutus from "./components/App/aboutus/Aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<CreateAccount />} />
        <Route path="/loggingIn" element={<Login />} />
        <Route path="/customer-dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
