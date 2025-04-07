import { Categories } from "../components/Categories";
import { Features } from "../components/Features";
import { FlashSales } from "../components/FlashSales";
import { Hero } from "../components/Hero";

export const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      {/* <Tranding /> */}
      <FlashSales />
      <Categories />
    </div>
  );
};
