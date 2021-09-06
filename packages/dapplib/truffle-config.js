require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note shift pupil hover deposit foster second'; 
let testAccounts = [
"0x3a2b488ed6465e6f9a67198ca528025b1ba9ee684524e747f6cdd264b6e48521",
"0xbb842e695c401646abedfb2d1fe8b2b0a1aa29c32ed0e2394b179d4879c309d0",
"0x79707326e91db8fa14f1b1c76b089e95d6084f226f13a450dc55c555e041938a",
"0xa635b78706523cf569f9d7ee877be8a7fd59f87d6a6fc48779b62fa24460e99b",
"0xc6e9aad1ccff0bafe1b3c55a91db54c30ecbbb4e3cd79da493ddb1fe401ffc22",
"0x46241baf614c6d22e40b49ff3ef8b7316988a4664ac5f0c418c64d57e2576905",
"0x7faeb0f2a25d8cc6496fcc43d0a8d59e5de4f01af1005a8180bf8531d2e96fe9",
"0xb00fff80f21195f2e07191033deece7d504ad0398559e990ee848d9e4b0483b1",
"0x0168ebe3c4b6cd6864421ce476beaa54d3808e5f0f95eb31b5466cf172953e9d",
"0x5b6ae6376615768e9d9c7c0539df1d00b6de09da26d693e7c4af6c2fa0478804"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


