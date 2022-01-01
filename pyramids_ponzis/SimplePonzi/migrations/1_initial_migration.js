var fs = require('fs');
var SimplePonzi = artifacts.require("SimplePonzi");

module.exports = function(deployer, network) {
    // unlock account for geth
    if (network == "rinkeby" || network == "mainnet") {
        var password = fs.readFileSync("password", "utf8")
                         .split('\n')  [0];
        web3.personal.unlockAccount(
            web3.eth.accounts[0], password);
    }

    deployer.deploy(SimplePonzi);
};

// truffle develop
// migrate -f 6
// change 6 if reqd

// 