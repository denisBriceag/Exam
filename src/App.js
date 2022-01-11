import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from './components/About/About';
import Catalog from "./components/Catalog/Catalog";
import CarouselPhoto from "./components/carousel/Сarousel";
import './App.css';
import ContactUs from "./components/ContactsUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="carousel-contact">
        <CarouselPhoto />
        <ContactUs />
      </div>
      <NavBar />
      <About />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
