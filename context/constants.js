import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
// import IWETH from "./IWETH.json";
import ERC20 from "./ERC20.json";
import wrappedEther from "./WrappedEther.json";
import DAI from "./DaiToken.json";

export const BooTokenAddress = "0xb8C35a52ADB02032D2A0Db736aeB639E7C30E79c";
export const BooTokenAbi = booToken.abi;

export const LifeTokenAddress = "0xEd90a1423C79A472b31E34D8aCf7c2109213ceDC";
export const LifeTokenAbi = lifeToken.abi;

export const SingleSwapTokenAddress =
  "0x9207b128Defd4B7a547EeB977973F0F159A1Ffd8";
export const SingleSwapTokenAbi = singleSwapToken.abi;

export const SwapMultiHopAddress = "0x0533674d0ce7d4552C6277ae10Cf2f058427F05e";
export const SwapMultiHopAbi = swapMultiHop.abi;

export const WETHAddress = "0xD15CF240Fcb625609230B558A25EddA254af288C";
export const WrappedEtherAbi = wrappedEther.abi;

export const DAIAddress = "0xD0D3d55f80fa1f4251bb92063bb873aD1d84292b";
export const DAIAbi = DAI.abi;

export const ERC20ABI = ERC20.abi;
