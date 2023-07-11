require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

// const INFURA_API_KEY =
//   "https://eth-sepolia.g.alchemy.com/v2/HH0AeWEZajDbSA1uwAm6_db0D-UKo_UC";
const PRIVATE_KEY =
  "c4f3ac9854fe79e5f4e151b59f9d23e9a04caf6fd8b4c0428ffdf0dcf37164b0";

// /** @type import('hardhat/config').HardhatUserConfig */

// module.exports = {
//   solidity: {
//     version: "0.8.10",
//     networks: {
//       sepolia: {
//         url: INFURA_API_KEY,
//         chainId: 11155111,
//         accounts: [
//           "c4f3ac9854fe79e5f4e151b59f9d23e9a04caf6fd8b4c0428ffdf0dcf37164b0",
//         ],
//       },
//     },

//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },

//   // allowUnlimitedContractSize: true,
// };




module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/HH0AeWEZajDbSA1uwAm6_db0D-UKo_UC",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  mocha: {
    timeout: 40000,
  },
  etherscan: {
    apiKey: "AYBZ53EN445WNPFP2IZ85RXRPB4FH5XBP7",
  },


  
};



