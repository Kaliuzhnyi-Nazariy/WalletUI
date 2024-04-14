// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract LearnToken is ERC20, Ownable, ERC20Permit {
    uint256 amountOfTokens;

    constructor(
        address initialOwner,
        uint256 _amountOfTokens
    )
        ERC20("LearnToken", "LTK")
        Ownable(initialOwner)
        ERC20Permit("LearnToken")
    {
        amountOfTokens = _amountOfTokens;
        mint(initialOwner, amountOfTokens * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
