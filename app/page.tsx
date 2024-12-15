"use client";
import { useEffect, useState } from "react";
import SideImage from "./components/sideImage/page";
import SideInfor from "./components/sideInfor/page";

export default function Home() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("http://localhost:3001/recipe");
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log("Some thing went wrong with getting the recipe:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, []);

  if (loading) return <div className="m-auto">Loading...</div>;
  if (!recipe) return <div>No data available</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-6 p-6 font-[family-name:var(--font-geist-sans)] text-slate-700 md:w-[80vw] lg:w-[70vw]">
        <div className="flex-shrink-0 md:w-2/5">
          <SideImage image={recipe.image} name={recipe.name}></SideImage>
        </div>
        <div className="md:w-3/5">
          <SideInfor recipe={recipe}></SideInfor>
        </div>
      </div>
    </div>
  );
}
