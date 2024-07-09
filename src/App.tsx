import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-footer/Navbar";
import Home from "./components/App/home/Home";
import Footer from "./components/nav-footer/Footer";
import CreateAccount from "./components/App/get-started/CreateAccount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<CreateAccount />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
