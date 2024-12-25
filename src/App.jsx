import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import Brands from "./components/home/Brands";
import About from "./components/home/About";
import Services from "./components/home/Services";
import ModernCarousel from "./components/home/ModernCarousel";
import Testimonial from "./components/home/Testimonial";
import Workflow from "./components/home/Workflow";
import Blogs from "./components/home/Blogs";
import Footer from "./components/Footer";
import Pricing from "./components/home/Pricing";

const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="carousel">
        <ModernCarousel />
      </div>
      <div id="team">
        <Testimonial />
      </div>
      <div id="workflow">
        <Workflow />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="blog">
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
