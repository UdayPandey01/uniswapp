import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  BooTokenAddress,
  BooTokenAbi,
  LifeTokenAddress,
  LifeTokenAbi,
  SingleSwapTokenAddress,
  SingleSwapTokenAbi,
  WETHAbi,
  DAIAbi,
  WrappedEtherAbi,
  ERC20ABI,
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
    const signer = await provider.getSigner();
    const contract = await fetchBooContract(signer);
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
    const signer = await provider.getSigner();
    const contract = await fetchSingleSwapContract(signer);
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
    const signer = await provider.getSigner();
    const contract =await fetchLifeContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const WETHAddress = "0xD15CF240Fcb625609230B558A25EddA254af288C"
export const fetchIWETHContract = async (signerOrProvider) =>
  new ethers.Contract(WETHAddress, WrappedEtherAbi, signerOrProvider);

export const connectingToIWETHToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    const signer = await provider.getSigner();
    const contract = await fetchIWETHContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

const DAIAddress = "0xD0D3d55f80fa1f4251bb92063bb873aD1d84292b";
export const fetchDAIContract = async (signerOrProvider) =>
  new ethers.Contract(DAIAddress, DAIAbi, signerOrProvider);

export const connectingToDAIToken = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.BrowserProvider(connection);
    // console.log("Provider: ", provider);
    const signer = await provider.getSigner();
    const contract = await fetchDAIContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
