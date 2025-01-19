require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const BASE_SEPOLIA_RPC_URL = process.env.BASE_SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.28",
  networks : {
    base_sepolia: {
      url: BASE_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 84532,
      blockConfirmations : 6
    },
    hardhat : {
      forking : {
        url : "https://eth-mainnet.g.alchemy.com/v2/lDKVERTRp5nBVVuFoE6jKjTIYGBGV05S"
      }
    }
  }
};
