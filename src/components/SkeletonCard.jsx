import React from "react";

function SkeletonCard() {
  return (
    <div className="min-w-[210px] h-[308px] lg:min-w-[304px] lg:h-[462px] bg-gray-100 rounded-lg grid grid-cols-1 place-items-center p-6 drop-shadow-sm gap-3 snap-center animate-pulse">
      <div className="rounded-full aspect-square h-20 lg:h-36 bg-gray-300 animate-pulse self-start" />
      <div className="w-[160px] rounded-md h-8 bg-gray-300 animate-pulse self-start" />
      <div className="w-[80px] rounded-md h-8 bg-gray-300 animate-pulse self-end" />
      <div className="w-[100px] rounded-md h-8 bg-gray-300 animate-pulse self-end" />
      <div className="w-full rounded-md h-10 bg-gray-300 animate-pulse self-end" />
    </div>
  );
}

export default SkeletonCard;
