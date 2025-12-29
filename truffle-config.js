const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
 networks: {
  development: {
    host: "127.0.0.1",
    port: 8545, // change from 7545 to 8545
    network_id: "*",
  },
},

  compilers: {
    solc: {
      version: "0.6.12", // Match your contracts (0.4.21 < version < 0.7.0)
    },
  },
};
