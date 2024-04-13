// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Script} from "forge-std/Script.sol";
import {Spacebear} from "../src/Spacebear.sol";

contract DeploySpacebear is Script {
    function run() public returns (Spacebear) {
        vm.startBroadcast();
        Spacebear spaceBear = new Spacebear();
        vm.stopBroadcast();
        return spaceBear;
    }
}
