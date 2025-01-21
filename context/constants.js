import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
// import IWETH from "./IWETH.json";
import ERC20 from "./ERC20.json";
import wrappedEther from "./WrappedEther.json";
import DAI from "./DaiToken.json";

export const BooTokenAddress = "0x011053718683C5968AC4B0Ce04589a46A6E244F3";
export const BooTokenAbi = booToken.abi;

export const LifeTokenAddress = "0x5eB61c100793dA9805993f67c78613bA1548829d";
export const LifeTokenAbi = lifeToken.abi;

export const SingleSwapTokenAddress =
  "0xA4C0B0B9E6205aA999f57C9bD3935d29eB0e5bED";
export const SingleSwapTokenAbi = singleSwapToken.abi;

export const SwapMultiHopAddress = "0xF698Be49Fc2eA075246bBe89f167e8657511b5CE";
export const SwapMultiHopAbi = swapMultiHop.abi;

export const WETHAddress = "0xFb254E660dbeda9a9d790A35734DF119A9cF0c33";
export const WrappedEtherAbi = wrappedEther.abi;

export const DAIAddress = "0x13405Dc7D9F3d253f31B6a32315FFBe08909ae8c";
export const DAIAbi = DAI.abi;

export const ERC20ABI = ERC20.abi;
