"use client";

import React, { useContext, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Token, SearchToken } from "@/components/index";
import { SwapTokenContext } from "@/context/SwapContext";

const HeroSection = ({ tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const {singleSwapToken, connectWallet, account, weth9, dai, ether} = useContext(SwapTokenContext);

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <div className="flex justify-center items-center overflow-hidden mt-32">
      <div className="w-full max-w-md p-6 space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-2xl text-gray-600 font-semibold">Swap</p>
          <div>
            <IoSettingsSharp onClick={() => setOpenSetting(true)} className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded border border-gray-300 hover:bg-blue-200/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="0"
                className="w-full p-4 rounded focus:outline-none bg-transparent placeholder:text-2xl placeholder:font-bold placeholder:text-gray-500 "
              />
              <button onClick={() => setOpenToken(true)} className="flex items-center space-x-1 border border-gray-300 p-2 rounded-3xl hover:bg-gray-200/80">
                <FaEthereum />
                <span className="font-medium ">{tokenOne.name || "ETH"}</span>
                <small>{ether.slice(0,6)}</small>
              </button>
            </div>
          </div>

          <div className="p-4 rounded border hover:bg-blue-200/10">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="0"
                className="w-full p-4 rounded focus:outline-none bg-transparent placeholder:text-2xl placeholder:font-bold placeholder:text-gray-500 "
              />
              <button onClick={() => setOpenTokenTwo(true)} className="flex items-center space-x-1 border border-gray-300 p-2 rounded-3xl hover:bg-gray-200/80">
                <FaEthereum />
                <span className="font-medium" >{tokenTwo.name || "ETH"}</span>
                <small>{dai.slice(0,6)}</small>
              </button>
            </div>
          </div>
        </div>

        {account ? (
          <button onClick={() => singleSwapToken()} className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Swap</button>
        ) : (
          <button onClick={() => connectWallet()} className="w-full py-2 bg-blue-500/15 text-gray-500 font-semibold rounded hover:bg-blue-600/20">Connect Wallet</button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}

      {openTokenTwo && (
        <SearchToken
          openToken={setOpenTokenTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
