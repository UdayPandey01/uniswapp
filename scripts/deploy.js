const hre = require('hardhat');

async function main() {
    const BooToken = await hre.ethers.getContractFactory("BooToken");
    const booToken = await BooToken.deploy();
    await booToken.waitForDeployment();
    console.log("BooToken deployed to:", booToken.target);

    const LifeToken = await hre.ethers.getContractFactory("LifeToken");
    const lifeToken = await LifeToken.deploy();
    await lifeToken.waitForDeployment();
    console.log("LifeToken deployed to:", lifeToken.target);

    const SingleSwapToken = await hre.ethers.getContractFactory("SingleSwapToken");
    const singleSwapToken = await SingleSwapToken.deploy();
    await singleSwapToken.waitForDeployment();
    console.log("SingleSwapToken deployed to:", singleSwapToken.target);

    const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
    const swapMultiHop = await SwapMultiHop.deploy();
    await swapMultiHop.waitForDeployment();
    console.log("SwapMultiHop deployed to:", swapMultiHop.target);
}

main().catch((error) =>{
    console.error(error);
    process.exit(1);
})