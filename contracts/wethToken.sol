// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedEther is ERC20 {
    constructor() ERC20("Wrapped Ether", "WETH") {}

    // Function to wrap ETH and mint WETH
    function deposit() public payable {
        _mint(msg.sender, msg.value);
    }

    // Function to unwrap WETH and withdraw ETH
    function withdraw(uint256 amount) external {
        require(balanceOf(msg.sender) >= amount, "Insufficient WETH balance");
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(amount);
    }

    // Allow the contract to receive ETH
    receive() external payable {
        deposit();
    }
}
