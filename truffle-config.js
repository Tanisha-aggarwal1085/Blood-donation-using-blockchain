require('dotenv').config();

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,           // Ganache default port
      network_id: "5777",   // Ganache network ID
      gas: 6721975,         // Gas limit
      gasPrice: 20000000000 // 20 gwei
    },
  },

  mocha: {
    timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },

  db: {
    enabled: false
  }
};