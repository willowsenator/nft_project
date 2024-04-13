-include .env
forge_build:
	forge build

forge_test:
	forge test

forge_coverage:
	forge coverage

forge_clean:
	forge clean

forge_sepolia_deploy:
	forge script script/DeploySpacebear.s.sol:DeploySpacebear --broadcast --rpc-url $(SEPOLIA_RPC_URL) --account sepoliakey --sender 0x78961cDf31009Dd8E53aaEde7225Dc79475c6B83 --verify --etherscan-api-key $(ETHERSCAN_API_KEY) -vvvv