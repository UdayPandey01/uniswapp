"use client";

import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "./Model.module.css";

const Model = ({ setOpenModel, connectWallet }) => {
  const walletMenu = ["Metamask", "Coinbase", "Wallet", "WalletConnect"];

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className={`${styles["modal-container"]} flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-lg w-96`}
      >
        <div className="flex justify-between items-center w-full mb-4">
          <p className="text-xl font-semibold text-gray-600">Connect a wallet</p>
          <div className="cursor-pointer">
            <RxCross1 onClick={() => setOpenModel(false)} size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {walletMenu.map((el, index) => (
            <button
              key={index}
              onClick={() => connectWallet(el)}
              className="py-4 px-4 rounded cursor-pointer flex hover:bg-gray-200"
            >
              {el}
            </button>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          By connecting a wallet, you agree to Uniswap Labs <br />
          Terms of Service and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Model;