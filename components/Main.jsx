import React from "react";
import BiddingCard from "./BiddingCard";
import NFT from "./NFTrecord";
const main = () => {
  return (
    <div className="flex flex-col w-[80vw] gap-4 mx-auto md:flex-row mb-4">
      {NFT.map((val, key) => {
        console.log("val is", val);
        return <BiddingCard value={val} key={key} />;
      })}
    </div>
  );
};

export default main;
