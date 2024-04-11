// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {Spacebear} from "../src/Spacebear.sol";

contract SpacebearTest is Test {
    Spacebear spaceBear;

    function setUp() public {
        spaceBear = new Spacebear();
    }

    function testNameIsSpacebear() public view {
        assertEq("Spacebear", spaceBear.name());
    }

    function testMintNFT() public {
        spaceBear.safeMint(msg.sender, "spacebear_1.json");
        assertEq(spaceBear.ownerOf(0), msg.sender);
        assertEq(
            spaceBear.tokenURI(0),
            "https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/spacebear_1.json"
        );
    }

    function testCreationNFTWrongOwner() public {
        address purchaser = makeAddr("PURCHASER");
        vm.startPrank(purchaser);
        vm.expectRevert(
            abi.encodeWithSignature(
                "OwnableUnauthorizedAccount(address)",
                purchaser
            )
        );
        spaceBear.safeMint(purchaser, "spacebear_1.json");
        vm.stopPrank();
    }

    function testBuyNFT() public {
        address purchaser = makeAddr("PURCHASER");
        vm.startPrank(purchaser);
        spaceBear.buyToken();
        vm.stopPrank();

        assertEq(spaceBear.balanceOf(purchaser), 1);
        assertEq(spaceBear.ownerOf(0), purchaser);
    }
}
