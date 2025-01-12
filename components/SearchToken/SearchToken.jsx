"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const ethe = require("../../assests/Ethereum.png");

const SearchToken = ({ openToken, tokens, tokenData }) => {
  const [active, setActive] = useState(null);

  const coins = [
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "ETH",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "DAI",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "DOG",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "WEITH9",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "FUN",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "UNI",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "TIME",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "LOO",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "OOO",
    },
    {
      img: <Image src={ethe} width={20} height={20} alt="ETH" className="rounded-full" />,
      name: "HEY",
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold">Select a token</h4>
          <RxCross1 onClick={() => openToken(false)} className="cursor-pointer text-xl" />
        </div>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CiSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search name and paste the address"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2 max-h-60 overflow-auto">
          {coins.map((el, index) => (
            <span
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                active === index ? "" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setActive(index);
                tokens({ name: el.name, image: el.img });
              }}
            >
              {el.img}
              <span className="font-medium">{el.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
