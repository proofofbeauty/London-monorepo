/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Mintable,
  ERC721MintableInterface,
} from "../ERC721Mintable";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b506040516200302d3803806200302d83398181016040528101906200003c919062000254565b81816000620000506200012a60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35081600190805190602001906200010692919062000132565b5080600290805190602001906200011f92919062000132565b505050505062000437565b600033905090565b82805462000140906200035c565b90600052602060002090601f016020900481019282620001645760008555620001b0565b82601f106200017f57805160ff1916838001178555620001b0565b82800160010185558215620001b0579182015b82811115620001af57825182559160200191906001019062000192565b5b509050620001bf9190620001c3565b5090565b5b80821115620001de576000816000905550600101620001c4565b5090565b6000620001f9620001f384620002f0565b620002c7565b9050828152602081018484840111156200021257600080fd5b6200021f84828562000326565b509392505050565b600082601f8301126200023957600080fd5b81516200024b848260208601620001e2565b91505092915050565b600080604083850312156200026857600080fd5b600083015167ffffffffffffffff8111156200028357600080fd5b620002918582860162000227565b925050602083015167ffffffffffffffff811115620002af57600080fd5b620002bd8582860162000227565b9150509250929050565b6000620002d3620002e6565b9050620002e1828262000392565b919050565b6000604051905090565b600067ffffffffffffffff8211156200030e576200030d620003f7565b5b620003198262000426565b9050602081019050919050565b60005b838110156200034657808201518184015260208101905062000329565b8381111562000356576000848401525b50505050565b600060028204905060018216806200037557607f821691505b602082108114156200038c576200038b620003c8565b5b50919050565b6200039d8262000426565b810181811067ffffffffffffffff82111715620003bf57620003be620003f7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b612be680620004476000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102bb578063b88d4fde146102d7578063c87b56dd146102f3578063e985e9c514610323578063f2fde38b1461035357610116565b806370a0823114610245578063715018a6146102755780638da5cb5b1461027f57806395d89b411461029d57610116565b80631249c58b116100e95780631249c58b146101b557806323b872dd146101bf5780632ca869bf146101db57806342842e0e146101f95780636352211e1461021557610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611cea565b61036f565b60405161014291906120f0565b60405180910390f35b610153610451565b604051610160919061210b565b60405180910390f35b610183600480360381019061017e9190611d3c565b6104e3565b6040516101909190612089565b60405180910390f35b6101b360048036038101906101ae9190611cae565b610568565b005b6101bd610680565b005b6101d960048036038101906101d49190611ba8565b6106ad565b005b6101e361070d565b6040516101f0919061232d565b60405180910390f35b610213600480360381019061020e9190611ba8565b610713565b005b61022f600480360381019061022a9190611d3c565b610733565b60405161023c9190612089565b60405180910390f35b61025f600480360381019061025a9190611b43565b6107e5565b60405161026c919061232d565b60405180910390f35b61027d61089d565b005b6102876109f0565b6040516102949190612089565b60405180910390f35b6102a5610a19565b6040516102b2919061210b565b60405180910390f35b6102d560048036038101906102d09190611c72565b610aab565b005b6102f160048036038101906102ec9190611bf7565b610c2c565b005b61030d60048036038101906103089190611d3c565b610c8e565b60405161031a919061210b565b60405180910390f35b61033d60048036038101906103389190611b6c565b610d35565b60405161034a91906120f0565b60405180910390f35b61036d60048036038101906103689190611b43565b610dc9565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061044a575061044982610f8b565b5b9050919050565b60606001805461046090612552565b80601f016020809104026020016040519081016040528092919081815260200182805461048c90612552565b80156104d95780601f106104ae576101008083540402835291602001916104d9565b820191906000526020600020905b8154815290600101906020018083116104bc57829003601f168201915b5050505050905090565b60006104ee82610ff5565b61052d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105249061226d565b60405180910390fd5b6005600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061057382610733565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105db906122ed565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610603611061565b73ffffffffffffffffffffffffffffffffffffffff16148061063257506106318161062c611061565b610d35565b5b610671576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610668906121ed565b60405180910390fd5b61067b8383611069565b505050565b61069361068b611061565b600754611122565b600760008154809291906106a6906125b5565b9190505550565b6106be6106b8611061565b82611140565b6106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f49061230d565b60405180910390fd5b61070883838361121e565b505050565b60075481565b61072e83838360405180602001604052806000815250610c2c565b505050565b6000806003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d39061222d565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610856576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084d9061220d565b60405180910390fd5b600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108a5611061565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610932576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109299061228d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060028054610a2890612552565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5490612552565b8015610aa15780601f10610a7657610100808354040283529160200191610aa1565b820191906000526020600020905b815481529060010190602001808311610a8457829003601f168201915b5050505050905090565b610ab3611061565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b18906121ad565b60405180910390fd5b8060066000610b2e611061565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610bdb611061565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c2091906120f0565b60405180910390a35050565b610c3d610c37611061565b83611140565b610c7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c739061230d565b60405180910390fd5b610c888484848461147a565b50505050565b6060610c9982610ff5565b610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf906122cd565b60405180910390fd5b6000610ce26114d6565b90506000815111610d025760405180602001604052806000815250610d2d565b80610d0c846114ed565b604051602001610d1d929190612065565b6040516020818303038152906040525b915050919050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610dd1611061565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e559061228d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ece576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec59061214d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110dc83610733565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b61113c82826040518060200160405280600081525061169a565b5050565b600061114b82610ff5565b61118a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611181906121cd565b60405180910390fd5b600061119583610733565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061120457508373ffffffffffffffffffffffffffffffffffffffff166111ec846104e3565b73ffffffffffffffffffffffffffffffffffffffff16145b8061121557506112148185610d35565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661123e82610733565b73ffffffffffffffffffffffffffffffffffffffff1614611294576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128b906122ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112fb9061218d565b60405180910390fd5b61130f8383836116f5565b61131a600082611069565b6001600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461136a9190612468565b925050819055506001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113c191906123e1565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b61148584848461121e565b611491848484846116fa565b6114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c79061212d565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611535576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611695565b600082905060005b60008214611567578080611550906125b5565b915050600a826115609190612437565b915061153d565b60008167ffffffffffffffff8111156115a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156115db5781602001600182028036833780820191505090505b5090505b6000851461168e576001826115f49190612468565b9150600a8561160391906125fe565b603061160f91906123e1565b60f81b81838151811061164b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116879190612437565b94506115df565b8093505050505b919050565b6116a48383611891565b6116b160008484846116fa565b6116f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e79061212d565b60405180910390fd5b505050565b505050565b600061171b8473ffffffffffffffffffffffffffffffffffffffff16611a5f565b15611884578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611744611061565b8786866040518563ffffffff1660e01b815260040161176694939291906120a4565b602060405180830381600087803b15801561178057600080fd5b505af19250505080156117b157506040513d601f19601f820116820180604052508101906117ae9190611d13565b60015b611834573d80600081146117e1576040519150601f19603f3d011682016040523d82523d6000602084013e6117e6565b606091505b5060008151141561182c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118239061212d565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611889565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611901576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f89061224d565b60405180910390fd5b61190a81610ff5565b1561194a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119419061216d565b60405180910390fd5b611956600083836116f5565b6001600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119a691906123e1565b92505081905550816003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b6000611a85611a808461236d565b612348565b905082815260208101848484011115611a9d57600080fd5b611aa8848285612510565b509392505050565b600081359050611abf81612b54565b92915050565b600081359050611ad481612b6b565b92915050565b600081359050611ae981612b82565b92915050565b600081519050611afe81612b82565b92915050565b600082601f830112611b1557600080fd5b8135611b25848260208601611a72565b91505092915050565b600081359050611b3d81612b99565b92915050565b600060208284031215611b5557600080fd5b6000611b6384828501611ab0565b91505092915050565b60008060408385031215611b7f57600080fd5b6000611b8d85828601611ab0565b9250506020611b9e85828601611ab0565b9150509250929050565b600080600060608486031215611bbd57600080fd5b6000611bcb86828701611ab0565b9350506020611bdc86828701611ab0565b9250506040611bed86828701611b2e565b9150509250925092565b60008060008060808587031215611c0d57600080fd5b6000611c1b87828801611ab0565b9450506020611c2c87828801611ab0565b9350506040611c3d87828801611b2e565b925050606085013567ffffffffffffffff811115611c5a57600080fd5b611c6687828801611b04565b91505092959194509250565b60008060408385031215611c8557600080fd5b6000611c9385828601611ab0565b9250506020611ca485828601611ac5565b9150509250929050565b60008060408385031215611cc157600080fd5b6000611ccf85828601611ab0565b9250506020611ce085828601611b2e565b9150509250929050565b600060208284031215611cfc57600080fd5b6000611d0a84828501611ada565b91505092915050565b600060208284031215611d2557600080fd5b6000611d3384828501611aef565b91505092915050565b600060208284031215611d4e57600080fd5b6000611d5c84828501611b2e565b91505092915050565b611d6e8161249c565b82525050565b611d7d816124ae565b82525050565b6000611d8e8261239e565b611d9881856123b4565b9350611da881856020860161251f565b611db1816126eb565b840191505092915050565b6000611dc7826123a9565b611dd181856123c5565b9350611de181856020860161251f565b611dea816126eb565b840191505092915050565b6000611e00826123a9565b611e0a81856123d6565b9350611e1a81856020860161251f565b80840191505092915050565b6000611e336032836123c5565b9150611e3e826126fc565b604082019050919050565b6000611e566026836123c5565b9150611e618261274b565b604082019050919050565b6000611e79601c836123c5565b9150611e848261279a565b602082019050919050565b6000611e9c6024836123c5565b9150611ea7826127c3565b604082019050919050565b6000611ebf6019836123c5565b9150611eca82612812565b602082019050919050565b6000611ee2602c836123c5565b9150611eed8261283b565b604082019050919050565b6000611f056038836123c5565b9150611f108261288a565b604082019050919050565b6000611f28602a836123c5565b9150611f33826128d9565b604082019050919050565b6000611f4b6029836123c5565b9150611f5682612928565b604082019050919050565b6000611f6e6020836123c5565b9150611f7982612977565b602082019050919050565b6000611f91602c836123c5565b9150611f9c826129a0565b604082019050919050565b6000611fb46020836123c5565b9150611fbf826129ef565b602082019050919050565b6000611fd76029836123c5565b9150611fe282612a18565b604082019050919050565b6000611ffa602f836123c5565b915061200582612a67565b604082019050919050565b600061201d6021836123c5565b915061202882612ab6565b604082019050919050565b60006120406031836123c5565b915061204b82612b05565b604082019050919050565b61205f81612506565b82525050565b60006120718285611df5565b915061207d8284611df5565b91508190509392505050565b600060208201905061209e6000830184611d65565b92915050565b60006080820190506120b96000830187611d65565b6120c66020830186611d65565b6120d36040830185612056565b81810360608301526120e58184611d83565b905095945050505050565b60006020820190506121056000830184611d74565b92915050565b600060208201905081810360008301526121258184611dbc565b905092915050565b6000602082019050818103600083015261214681611e26565b9050919050565b6000602082019050818103600083015261216681611e49565b9050919050565b6000602082019050818103600083015261218681611e6c565b9050919050565b600060208201905081810360008301526121a681611e8f565b9050919050565b600060208201905081810360008301526121c681611eb2565b9050919050565b600060208201905081810360008301526121e681611ed5565b9050919050565b6000602082019050818103600083015261220681611ef8565b9050919050565b6000602082019050818103600083015261222681611f1b565b9050919050565b6000602082019050818103600083015261224681611f3e565b9050919050565b6000602082019050818103600083015261226681611f61565b9050919050565b6000602082019050818103600083015261228681611f84565b9050919050565b600060208201905081810360008301526122a681611fa7565b9050919050565b600060208201905081810360008301526122c681611fca565b9050919050565b600060208201905081810360008301526122e681611fed565b9050919050565b6000602082019050818103600083015261230681612010565b9050919050565b6000602082019050818103600083015261232681612033565b9050919050565b60006020820190506123426000830184612056565b92915050565b6000612352612363565b905061235e8282612584565b919050565b6000604051905090565b600067ffffffffffffffff821115612388576123876126bc565b5b612391826126eb565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006123ec82612506565b91506123f783612506565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561242c5761242b61262f565b5b828201905092915050565b600061244282612506565b915061244d83612506565b92508261245d5761245c61265e565b5b828204905092915050565b600061247382612506565b915061247e83612506565b9250828210156124915761249061262f565b5b828203905092915050565b60006124a7826124e6565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561253d578082015181840152602081019050612522565b8381111561254c576000848401525b50505050565b6000600282049050600182168061256a57607f821691505b6020821081141561257e5761257d61268d565b5b50919050565b61258d826126eb565b810181811067ffffffffffffffff821117156125ac576125ab6126bc565b5b80604052505050565b60006125c082612506565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156125f3576125f261262f565b5b600182019050919050565b600061260982612506565b915061261483612506565b9250826126245761262361265e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612b5d8161249c565b8114612b6857600080fd5b50565b612b74816124ae565b8114612b7f57600080fd5b50565b612b8b816124ba565b8114612b9657600080fd5b50565b612ba281612506565b8114612bad57600080fd5b5056fea2646970667358221220b5b4f11af0d02727f92bcfd3d52e17670f8a225a0b098fa62cdfc12622ce494164736f6c63430008040033";

type ERC721MintableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MintableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mintable__factory extends ContractFactory {
  constructor(...args: ERC721MintableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Mintable> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<ERC721Mintable>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721Mintable {
    return super.attach(address) as ERC721Mintable;
  }
  connect(signer: Signer): ERC721Mintable__factory {
    return super.connect(signer) as ERC721Mintable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MintableInterface {
    return new utils.Interface(_abi) as ERC721MintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mintable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mintable;
  }
}