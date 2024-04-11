require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { SEPOLIA_RPC_URL, TEST_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC_URL}`,
      accounts: [`${TEST_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  }
};
