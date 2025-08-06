import "./styles/main.scss";

import { BrowserRouter } from "react-router-dom";

import Footer from "./components/navigation/Footer.jsx";
import Navbar from "./components/navigation/Navbar";
import Routing from "./components/navigation/Routing.jsx";

export default function App() {
  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
