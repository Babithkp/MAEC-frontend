import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav-footer/Navbar";
import Home from "./components/App/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
