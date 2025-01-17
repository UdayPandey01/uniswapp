import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenAbi,
  LifeTokenAddress,
  LifeTokenAbi,
  SingleSwapTokenAddress,
  SingleSwapTokenAbi,
  IWETHAddress,
  IWETHAbi,
} from "@/context/constants";

export const checkIfWalletIsConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWalelt = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    }); //Prompts User to connect to Metmask - open the Dialog Box for connecting Wallet
    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBooContract = async (signerOrProvider) =>
  new ethers.Contract(BooTokenAddress, BooTokenAbi, signerOrProvider);

export const connectingToBooToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchBooContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleSwapContract = async (signerOrProvider) =>
  new ethers.Contract(
    SingleSwapTokenAddress,
    SingleSwapTokenAbi,
    signerOrProvider
  );

export const connectingToSingleSwapToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchSingleSwapContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchSwapMultiHopContract = async(signerOrProvider) =>
//     new ethers.Contract(SwapMultiHopAddress, SwapMultiHopAbi, signerOrProvider)

// export const connectingToSwapMultiHopToken = async () => {
//     try {
//         const web3Modal = new Web3Modal()
//         const connection =await web3Modal.connect()
//         const provider = new ethers.BrowserProvider(connection)
//         const signer = provider.getSigner()
//         const contract = fetchSwapMultiHopContract(signer)
//         return contract
//     } catch (error) {
//         console.log(error)
//     }
// }

export const fetchLifeContract = async (signerOrProvider) =>
  new ethers.Contract(LifeTokenAddress, LifeTokenAbi, signerOrProvider);

export const connectingToLifeToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchLifeContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const fetchIWETHContract = async (signerOrProvider) =>
  new ethers.Contract(IWETHAddress, IWETHAbi, signerOrProvider);

export const connectingToIWETHToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchIWETHContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const fetchDAIContract = async (signerOrProvider) =>
  new ethers.Contract(DAIAddress, IWETHAbi, signerOrProvider);

export const connectingToDAIToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = provider.getSigner();
    const contract = fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
