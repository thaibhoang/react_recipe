"use client";

import SingleIngredient from "./SingleIngredient/page";

const Ingredients = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <>
      <h1 className="text-black font-bold text-xl py-4">Ingredients</h1>
      {ingredients.map((ingredient) => (
        <SingleIngredient key={ingredient.id} ingredient={ingredient} />
      ))}
    </>
  );
};

export default Ingredients;
