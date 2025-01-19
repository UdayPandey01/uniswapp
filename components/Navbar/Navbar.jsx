"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { Model, TokenList } from "..";
import { SwapTokenContext } from "@/context/SwapContext";
const logo = require("@/assests/logo.png");

const Navbar = () => {
  const {ether, account, networkConnected, connectWallet, tokenData} = useContext(SwapTokenContext);
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  // const [accounts, setAccounts] = useState(false);

  // console.log(tokenData)

  const trimAccount = (account) => {
    return `${account.slice(0, 4)}...${account.slice(-4)}`;
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center gap-7">
          <div>
            <Image src={logo} alt="logo" width={70} height={70} />
          </div>
          <div className="flex flex-row items-center gap-12 text-xl font-semibold">
            {menuItems.map((el, index) => (
              <Link
                key={index + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className="flex flex-row items-center shadow-lg gap-2 space-x-1 border border-gray-300 p-2 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-lg">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-4 bg-gray-200 p-2 rounded-lg">
            <div>
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search Tokens"
              className="bg-gray-200 rounded-lg "
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-12 text-lg font-semibold">
          <div className="flex flex-row items-center gap-1 shadow-lg space-x-1 border border-gray-300 p-2 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-lg">
            <div>
              <FaEthereum />
            </div>
            <p>{networkConnected}</p>
          </div>
          {account ? (
            <button
              onClick={() => setOpenTokenBox(true)}
              className="flex flex-row items-center gap-2 space-x-1 shadow-lg border border-gray-300 p-2 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {trimAccount(account)}
            </button>
          ) : (
            <button
              onClick={() => setOpenModel(true)}
              className="flex flex-row items-center gap-2 space-x-1 shadow-lg border border-gray-300 p-2 rounded-3xl transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Connect
            </button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet={connectWallet} />
          )}
        </div>
      </div>
      {openTokenBox && (
        <TokenList setOpenTokenBox={setOpenTokenBox} tokenData={tokenData} />
      )}
    </div>
  );
};

export default Navbar;
