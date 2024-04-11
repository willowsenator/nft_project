const { expect } = require("chai");
const hre = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

let Spacebear;
let [owner, otherAccount, notNFTOwner] = [];

describe("Spacebear", function () {
    async function deploySpacebearAndMint() {
        Spacebear = await hre.ethers.getContractFactory("Spacebear");
        const spaceBearInstance = await Spacebear.deploy();
        [owner, otherAccount, notNFTOwner] = await ethers.getSigners();
        spaceBearInstance.safeMint(otherAccount.address, "spacebear_1.json");
        return { spaceBearInstance };
    }
    it("is posible to mint a token", async function () {
        const { spaceBearInstance } = await loadFixture(deploySpacebearAndMint);
        expect(await spaceBearInstance.ownerOf(0)).to.equal(otherAccount.address);
        expect(await spaceBearInstance.tokenURI(0)).to.equal("https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/nftdata/spacebear_1.json");
    })

    it("fails to transfer tokens from the wrong address", async function () {
        const { spaceBearInstance } = await loadFixture(deploySpacebearAndMint);
        expect(await spaceBearInstance.ownerOf(0)).to.equal(otherAccount.address);

        const connectedSpaceBearInstance = spaceBearInstance.connect(notNFTOwner);
        await expect(connectedSpaceBearInstance.transferFrom(otherAccount.address, notNFTOwner.address, 0))
            .to.be.revertedWithCustomError(Spacebear, "ERC721InsufficientApproval");
    })
})