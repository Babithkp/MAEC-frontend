import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-footer/Navbar";
import Home from "./components/App/home/Home";
import Footer from "./components/nav-footer/Footer";
import CreateAccount from "./components/App/logging/CreateAccount";
import Login from "./components/App/logging/Login";
import Dashboard from "./components/App/Dashboard";
import Aboutus from "./components/App/aboutus/Aboutus";
import DocumentionReq from "./components/App/DocumentionReq";
import Guidelines from "./components/App/Guidelines";
import Pricing from "./components/App/Pricing";

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
        <Route path="/document-requirement" element={<DocumentionReq />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
