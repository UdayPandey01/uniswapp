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

    const SingleSwapToken = await hre.ethers.deployContract("SingleSwapToken", []);
    const singleSwapToken = await SingleSwapToken.waitForDeployment();
    try {
        console.log(`Single_Swap deployed to ${singleSwapToken.target}`);
    } catch (error) {
        console.error("Error in deploying SingleSwap:", error);
        throw error;
    }

    const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
    const swapMultiHop = await SwapMultiHop.deploy();
    await swapMultiHop.waitForDeployment();
    console.log("SwapMultiHop deployed to:", swapMultiHop.target);

    const DaiToken = await hre.ethers.getContractFactory("DaiToken");
    const daiToken = await DaiToken.deploy();
    await daiToken.waitForDeployment();
    console.log("DaiToken deployed to:", daiToken.target);

    const WethToken = await hre.ethers.getContractFactory("WethToken");
    const wethToken = await WethToken.deploy();
    await wethToken.waitForDeployment();
    console.log("WethToken deployed to:", wethToken.target);
}

main().catch((error) =>{
    console.error(error);
    process.exit(1);
})