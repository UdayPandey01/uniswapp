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

  const [account, setAccount] = useState("");
  const [ether, setEther] = useState("");
  const [networkConnected, setNetworkConnected] = useState("");
  const [weth9, setWeth9] = useState("");
  const [dai, setDai] = useState("");

  const [tokenData, setTokenData] = useState([]);

  const addToken = [
    // "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0xb8C35a52ADB02032D2A0Db736aeB639E7C30E79c",
    "0xEd90a1423C79A472b31E34D8aCf7c2109213ceDC",
  ];

  const fetchingData = async () => {
    try {
      const userAccount = await checkIfWalletIsConnected();
      setAccount(userAccount);
    //   console.log("User Account: ", userAccount);

      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection);

      const balance = await provider.getBalance(userAccount);
      const balanceInEther = ethers.formatEther(balance);
    //   console.log("Balance: ", balanceInEther);
      setEther(balanceInEther);

      const network = await provider.getNetwork();
      setNetworkConnected(network.name);
    //   console.log("Network : ", network);

      addToken.map(async (el, i) => {
        const contract = new ethers.Contract(el, ERC20ABI, provider);

        const _userBalance = await contract.balanceOf(userAccount); //balanceOf method is a part of ERC20
        // console.log(`userBalance for contract ${el} : `, _userBalance);
        const userBalanace = ethers.formatEther(_userBalance);
        // console.log(`userBalance for contract ${el} : `, userBalanace);

        const symbol = await contract.symbol();
        const name = await contract.name();

        tokenData.push({
          name: name,
          symbol: symbol,
          userBalanace: userBalanace,
        });

        // console.log("Token Data: ", tokenData);
      });

      try {
        const daiContract = await connectingToDAIToken();
        // console.log(daiContract.target);
        if (!daiContract) {
          throw new Error("DAI contract instance is not available.");
        }
        if (!ethers.isAddress(userAccount)) {
          throw new Error("Invalid address provided.");
        }
        const daiBal = await daiContract.balanceOf(userAccount);
        const daiBalance = ethers.formatEther(daiBal);
        // console.log(`DAI Balance : ${daiBalance}`);
        setDai(daiBalance);

        // //WETH BALANCE
        // const wethContract = await connectingToIWETHToken();
        // console.log("Weth contract",wethContract.target);
        // if (!wethContract) {
        //   throw new Error("WETH contract instance is not available.");
        // }
        // if (!ethers.isAddress(userAccount)) {
        //   throw new Error("Invalid address provided.");
        // }
        // console.log("1111")
        // const wethBal = await wethContract.balanceOf(userAccount);
        // const wethBalance = ethers.formatEther(wethBal);
        // console.log(`WETH Balance : ${wethBalance}`);
        // setWeth9(wethBalance);
      } catch (error) {
        console.error(error);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const singleSwapToken = async () => {
    try {
        let singleSwapToken
        let weth
        let dai

        singleSwapToken = await connectingToSingleSwapToken()
        console.log("SingleSwapToken",singleSwapToken)
        weth = await connectingToIWETHToken()
        console.log("WETH",weth)
        dai = await connectingToDAIToken()
        console.log("DAI",dai)

        const amountIn = 10n ** 13n

        await weth.deposit({value: amountIn, gasLimit: 300000})
        await weth.approve(singleSwapToken.target, amountIn)
        console.log("2222")
        console.log("AmountIn: ",amountIn)
        console.log(singleSwapToken)
        await singleSwapToken.swapExactInputSingle(amountIn,{
            gasLimit: 300000,
        })
        console.log("3333")
        const balance = await dai.balanceOf(account)
        const transferAmount = BigInt(balance).toString()
        const ethValue = ethers.formatEther(transferAmount)
        setDai(ethValue)

        console.log("DAI Balance: ",ethValue)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <SwapTokenContext.Provider value={{singleSwapToken,connectWalelt,tokenData, account, ether, networkConnected, weth9, dai }}>
      {children}
    </SwapTokenContext.Provider>
  );
};
