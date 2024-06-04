import { Button } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home"
import FooterComponent from "./components/FooterComponent";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  );
}
