import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import Brands from "./components/home/Brands";
import About from "./components/home/About";
import Services from "./components/home/Services";
import ModernCarousel from "./components/home/ModernCarousel";
import Testimonial from "./components/home/Testimonial";
import Workflow from "./components/home/Workflow";
import Pricing from "./components/home/Pricing";
import Blogs from "./components/home/Blogs";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brands />
      <About />
      <Services />
      <ModernCarousel />
      <Testimonial />
      <Workflow />
      <Pricing />
      <Blogs />
    </div>
  );
};

export default App;
