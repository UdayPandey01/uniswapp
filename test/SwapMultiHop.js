const {expect} = require('chai');
const {ethers} = require('hardhat');

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"

describe("SwapMultiHop", async() => {
    let swapMultiHop;
    let accounts;   
    let weth;
    let dai;
    let usdc;

    before(async() => {
        accounts = await ethers.getSigners(1);

        const SwapMultiHop = await ethers.deployContract("SwapMultiHop");
        swapMultiHop = await SwapMultiHop.waitForDeployment();

        weth = await ethers.getContractAt("IWETH", WETH9);
        dai = await ethers.getContractAt("IERC20", DAI);
        usdc = await ethers.getContractAt("IERC20", USDC); 

    })

    it("swapExactInputSingle", async () => {
        const amountIn = BigInt(10**18);
        
        await weth.deposit({value: amountIn});
        await weth.approve(swapMultiHop.target, amountIn);

        await swapMultiHop.swapExactInputSingle(amountIn)
        console.log("DAI balance", await dai.balanceOf(accounts[0].address));
    })

    it("swapExactOutputSingle", async () => {
        const wethAmountInMAx = BigInt(10**18);
        const daiAmountOut = BigInt(100 * 10 ** 18);

        await weth.connect(accounts[1]).deposit({value: wethAmountInMAx});           
        await weth.connect(accounts[1]).approve(swapMultiHop.target, wethAmountInMAx);
        console.log(`Previous WETH balance : ${await weth.balanceOf(accounts[1].address)}`);

        //SWAP
        await swapMultiHop.connect(accounts[1]).swapExactOutputSingle(daiAmountOut, wethAmountInMAx);
        console.log(`DAI BALANCE : ${await dai.balanceOf(accounts[1].address)}`);
        console.log(`Remaining WETH balance : ${await weth.balanceOf(accounts[1].address)}`);
    })
})