require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million prosper hunt cash flock sugar'; 
let testAccounts = [
"0x5b0f8ebf7ecf549294b3af7b0b2540a9d55be22df8bfdf4d5eca67bd10f0fb61",
"0xdd9dde8e9478d3d141c920c2333edd12ba1a77a15853ce89b666e5a162a9ce77",
"0x2ee79b51fc32df8dd363473aad443e2abb26aa26f01ca069d18e40b07c04a002",
"0x8e2bb28e530e9d6586d6a11256364a4ae650746813a1f7d9608100b1a2f33d84",
"0xd44093c328bbb045b60b89a8db6744effdfd595f072202e0819749e637394685",
"0xa851c0294c52073301a3321f50b4a6309c8679b3ddcc70e0b203bd19ff5d7977",
"0x41f59f9e17db0d1e70f39fe256b3ddd5a84621004cdfed83a9700f709fc26423",
"0x5e32f5914283ebd01ac14637474f851f4c292d8187ff948a453837e36552ad1d",
"0x84473cb7d300be340f68d5969b099cc6b6cc7e441a28ccf2d8b69e5eb6165601",
"0x793d9554172ae7428f40a24f21ae2eae47d6649481e47b485222474e4a69964d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

