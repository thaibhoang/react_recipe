"use client";

const SingleIngredient = ({ ingredient }) => {
  return (
    <>
      <div className="pl-2 leading-8">
        <input
          type="checkbox"
          name={ingredient.name}
          id={`ingredient${ingredient.id}`}
        />
        <label
          htmlFor={`ingredient${ingredient.id}`}
          className="cursor-pointer"
        >
          <span> {ingredient.count} </span>
          <span>{ingredient.unit} </span>
          <span>{ingredient.name} </span>
        </label>
      </div>
    </>
  );
};

export default SingleIngredient;
