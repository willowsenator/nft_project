const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpacebearModule", (m) => {
    const spaceBear = m.contract("Spacebear");
    return { spaceBear };
});