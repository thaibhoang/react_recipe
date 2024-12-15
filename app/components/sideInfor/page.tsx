"use client";

import Image from "next/image";
import Ingredients from "./Ingredients/page";
import Instructions from "./Instructions/page";
import Rating from "./Rating/page";

const SideInfor = ({ recipe }) => {
  return (
    <>
      <div className="relative mt-44">
        <div className="absolute pl-8 p-2 left-0 top-0 translate-x-[-40%] translate-y-[-100%] bg-white w-4/5">
          <div className="flex gap-4">
            <Rating rating={recipe.rating} />
            <div className="py-4">
              {recipe.rating.toFixed(1)} ({recipe.total_rates})
            </div>
          </div>
          <div className="text-black font-bold text-3xl">{recipe.name}</div>
        </div>
        <div className="flex gap-8 py-4">
          <div className="flex gap-2 items-center">
          <Image src="clock.svg" alt="clock" width={38} height={38} />
            <div>
              <div className="font-bold">TOTAL TIME</div>
              <div>{recipe.total_time}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="quality.svg" alt="quality" width={38} height={38} />
            <div>
              <div className="font-bold">LEVEL</div>
              <div>{recipe.level}</div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src="/wallet.svg" alt="wallet" width={38} height={38} />
            <div>
              <div className="font-bold">BUDGET</div>
              <div>{recipe.badget}</div>
            </div>
          </div>
        </div>
        <div className="italic">{recipe.description}</div>
        <Ingredients ingredients={recipe.ingredients}></Ingredients>
        <Instructions instructions={recipe.instructions} />
      </div>
    </>
  );
};

export default SideInfor;
