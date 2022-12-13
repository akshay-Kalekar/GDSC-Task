import React from "react";

const BiddingCard = ({ value,index }) => {
  return (
    <div className={` bg-[url('/img1.jpg')] bg-no-repeat bg-center bg-cover text-white  rounded-[4rem]   h-[50vh] w-full flex items-end justify-center pb-4`}>
      <div className=" flex items-center   w-4/5 px-4 py-2 h-fit  rounded-[4rem] bg-slate-800/75  backdrop-blur-[4px]  justify-between   ">
        <div className="flex items-center gap-2 ">
          <div className="">
            <img src="/ethToken.svg" className="w-[50px] h-[50px]" alt="icon" />
          </div>
          <div className="">{value}</div>
        </div>
        <div className=" px-4 py-2 text-black font-bold   bg-yellow-200 rounded-[4rem] ">
          Place a bid
        </div>
      </div>
    </div>
  );
};

export default BiddingCard;
