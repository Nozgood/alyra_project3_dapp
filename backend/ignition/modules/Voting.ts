import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { LOCAL_NODE_ADDRESS } from "../../constants/addresses.js";

export default buildModule("Voting", (m) => {
    const newVotingContract = m.contract("Voting"); 

    return { newVotingContract }
})