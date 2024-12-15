"use client";

import Image from "next/image";

const SideImage = ({ image, name }) => {
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={400}
          height={700}
          className="rounded-lg object-cover w-full h-auto"
          objectFit="cover"
        ></Image>
        <div className="font-bold text-xl absolute left-0 bottom-2 p-2 bg-black text-white">
          {name}
        </div>
      </div>
    </>
  );
};

export default SideImage;
