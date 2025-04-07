import { AboutHero } from "../components/AboutHero";
import { AboutSection } from "../components/AboutSection";
import { Categories } from "../components/Categories";
import { ContactHero } from "../components/ContactHero";
import { ContactSection } from "../components/ContactSection";
import { Features } from "../components/Features";
import { FlashSales } from "../components/FlashSales";
// import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
// import { Navbar } from "../components/Navbar";
import Tranding from "../Components/Tranding";

export const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Tranding />
      <FlashSales />
      <Categories />
    </div>
  );
};
