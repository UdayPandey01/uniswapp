import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
// import IWETH from "./IWETH.json";
import ERC20 from "./ERC20.json";
import WETH from "./WethToken.json";
import DAI from "./DaiToken.json";

export const BooTokenAddress = "0x1EFC0069D5BAbEF06a89d235D85485835dF2966C";
export const BooTokenAbi = booToken.abi;

export const LifeTokenAddress = "0x1ec26635096fd7E3B7f27Ff8D76E1518a134b478"
export const LifeTokenAbi = lifeToken.abi;

export const SingleSwapTokenAddress = "0xFF899d024791593802e39b05DDBAD7ea36ad9612"
export const SingleSwapTokenAbi = singleSwapToken.abi;

export const SwapMultiHopAddress = "0x54d3eDd746B34285a2A2ad48C174D855CbbA0b9B"
export const SwapMultiHopAbi = swapMultiHop.abi;

export const WETHAddress = "0xf4dB42018d7B439258c2529418Db8E08A11AE559"
export const WETHAbi = WETH.abi;

export const DAIAddress = "0xF49f5bc0C11a4c2b77E01767779307e3a683fFF9"
export const DAIAbi = DAI.abi;

export const ERC20ABI = ERC20.abi;