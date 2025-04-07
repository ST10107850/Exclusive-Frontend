import { Categories } from "../components/Categories";
import { Features } from "../components/Features";
import { FlashSales } from "../components/FlashSales";
import { Hero } from "../components/Hero";
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
