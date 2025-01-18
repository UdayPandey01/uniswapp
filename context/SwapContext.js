"use client";

import React, { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

import {
  checkIfWalletIsConnected,
  connectWalelt,
  connectingToBooToken,
  connectingToSingleSwapToken,
  connectingToLifeToken,
  connectingToDAIToken,
  connectingToIWETHToken,
} from "@/Utils/appFeatures";

import { IWETHAbi } from "./constants";
import { ERC20ABI } from "./constants";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
  const swap = "Welcome to swap my token ";

  const [accounts, setAccounts] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnected, setNetworkConnected] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x905Ad472d7eeB94ed1Fc29D8ff4B53FD4D5a5Eb4",
    "0xe3EF345391654121f385679613Cea79A692C2Dd8",
  ];

  const fetchingData = async () => {
    try {
      const userAccount = await checkIfWalletIsConnected();
      setAccounts(userAccount);
      console.log("User Account: ", userAccount);

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);

      const balance = await provider.getBalance(userAccount);
      const balanceInEther = ethers.formatEther(balance);
      console.log("Balance: ", balanceInEther);
      setEther(balanceInEther);

      addToken.map(async (el, i) => {
        const contract = new ethers.Contract(el, ERC20ABI, provider);

        const _userBalance = await contract.balanceOf(userAccount); //balanceOf method is a part of ERC20
        console.log(`userBalance for contract ${el} : `, _userBalance);
        const userBalanace = ethers.formatEther(_userBalance);
        console.log(`userBalance for contract ${el} : `, userBalanace);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <SwapTokenContext.Provider value={{ swap }}>
      {children}
    </SwapTokenContext.Provider>
  );
};
