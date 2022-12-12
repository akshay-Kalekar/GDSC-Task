import React from "react";

const Hero = () => {
  return (
    <div className="text-white flex flex-col gap-8 items-center text-center py-10">
      <div className="gradient-01" />
      <div className="gradient-02" />
      <div className="gradient-03" />
      <div className="bg-ball" />
      <div className="text-6xl font-bold md:w-[50vw]">
        Collect and sell your supper rate
        <span className="text-yellow-300">&nbsp;NFTs</span>
      </div>
      <div className="md:w-[30vw] text-xl">
        The World's first and largest digital marketplace for crypto
        collectibles and non-fungible tokens(NFTs).
      </div>

      <div className=" flex justify-between items-center px-4 py-2 text-black font-bold bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 rounded-[4rem] w-[40vw]">
        <div>Explore Marketplace</div>
        <div>
          <img
            src="./swap.svg"
            alt="swap-icon"
            className="h-[50px] w-[50px] rotate-90"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
