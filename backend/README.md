## Hardhat project

The smart contract Voting come from Alyra course (project 2)
The project has been init with Mocha/ethers.js

### Instructions


### Compile and deploy

To compile the smart contract, run:
```sh
npx hardhat compile
```

To launch the local blockchain provides by hardhat:

```sh
npx hardhat node
```

To deploy the smart contract (assuming you are running the local node):
```sh
npx hardhat ignition deploy ignition/modules/Voting.ts --network localhost
```

#### Testing

To run tests present in test/ directory (wrote in TS):
```sh
npx hardhat test mocha
```