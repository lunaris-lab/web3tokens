export const flashFee = {
    "inputs": [
       {
          "internalType": "address",
          "name": "token",
          "type": "address"
       },
       {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
       }
    ],
    "name": "flashFee",
    "outputs": [
       {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
       }
    ],
    "stateMutability": "view",
    "type": "function"
 };
 
 export const flashLoan = {
    "inputs": [
       {
          "internalType": "contract IERC3156FlashBorrower",
          "name": "receiver",
          "type": "address"
       },
       {
          "internalType": "address",
          "name": "token",
          "type": "address"
       },
       {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
       },
       {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
       }
    ],
    "name": "flashLoan",
    "outputs": [
       {
          "internalType": "bool",
          "name": "",
          "type": "bool"
       }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
 };
 
 export const maxFlashLoan = {
    "inputs": [
       {
          "internalType": "address",
          "name": "token",
          "type": "address"
       }
    ],
    "name": "maxFlashLoan",
    "outputs": [
       {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
       }
    ],
    "stateMutability": "view",
    "type": "function"
 }; 