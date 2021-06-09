/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { MetadataRegistry } from '../MetadataRegistry';

export class MetadataRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _mintableErc1155: string,
    overrides?: Overrides,
  ): Promise<MetadataRegistry> {
    return super.deploy(
      _mintableErc1155,
      overrides || {},
    ) as Promise<MetadataRegistry>;
  }
  getDeployTransaction(
    _mintableErc1155: string,
    overrides?: Overrides,
  ): TransactionRequest {
    return super.getDeployTransaction(_mintableErc1155, overrides || {});
  }
  attach(address: string): MetadataRegistry {
    return super.attach(address) as MetadataRegistry;
  }
  connect(signer: Signer): MetadataRegistry__factory {
    return super.connect(signer) as MetadataRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MetadataRegistry {
    return new Contract(address, _abi, signerOrProvider) as MetadataRegistry;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_mintableErc1155',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'writer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'key',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'text',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'salt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'UpdatedDocument',
    type: 'event',
  },
  {
    inputs: [],
    name: 'mintableErc1155',
    outputs: [
      {
        internalType: 'contract ERC1155Mintable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'permissedWriters',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'tokenIdToDocumentMap',
    outputs: [
      {
        internalType: 'address',
        name: 'writer',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'text',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'creationTime',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_writer',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    name: 'updatePermissedWriterStatus',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string[]',
        name: 'keys',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: 'texts',
        type: 'string[]',
      },
    ],
    name: 'writeDocuments',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b506040516200140e3803806200140e8339818101604052810190620000379190620001a6565b6000620000496200018760201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505062000220565b600033905090565b600081519050620001a08162000206565b92915050565b600060208284031215620001b957600080fd5b6000620001c9848285016200018f565b91505092915050565b6000620001df82620001e6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200021181620001d2565b81146200021d57600080fd5b50565b6111de80620002306000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063715018a61161005b578063715018a61461011357806373f85a531461011d5780638da5cb5b1461014f578063f2fde38b1461016d57610088565b80632269f9fb1461008d5780633ea66880146100ab57806348f2a93a146100c75780636401dc8f146100f7575b600080fd5b610095610189565b6040516100a29190610eed565b60405180910390f35b6100c560048036038101906100c09190610b38565b6101af565b005b6100e160048036038101906100dc9190610b0f565b61029f565b6040516100ee9190610ed2565b60405180910390f35b610111600480360381019061010c9190610b74565b6102bf565b005b61011b610520565b005b61013760048036038101906101329190610bf3565b610673565b60405161014693929190610e94565b60405180910390f35b610157610778565b6040516101649190610e79565b60405180910390f35b61018760048036038101906101829190610b0f565b6107a1565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6101b7610963565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610244576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023b90610fab565b60405180910390fd5b80600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60036020528060005260406000206000915054906101000a900460ff1681565b3360011515600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034a90610f8b565b60405180910390fd5b8151835114610397576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038e90610f6b565b60405180910390fd5b60005b83518110156105195760608482815181106103b157fe5b6020026020010151905060608483815181106103c957fe5b6020026020010151905060405180606001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020014281525060026000898152602001908152602001600020836040516104259190610e62565b908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061049692919061096b565b5060408201518160020155905050816040516104b29190610e62565b60405180910390203373ffffffffffffffffffffffffffffffffffffffff16887fb99ce2c4b3a66c59d690c0fed553de8e0abc1505445aa0432754b05313c3e4b5846000604051610504929190610f08565b60405180910390a4505080600101905061039a565b5050505050565b610528610963565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90610fab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600260205281600052604060002081805160208101820180518482526020830160208501208183528095505050505050600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107685780601f1061073d57610100808354040283529160200191610768565b820191906000526020600020905b81548152906001019060200180831161074b57829003601f168201915b5050505050908060020154905083565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6107a9610963565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610836576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082d90610fab565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089d90610f4b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109ac57805160ff19168380011785556109da565b828001600101855582156109da579182015b828111156109d95782518255916020019190600101906109be565b5b5090506109e791906109eb565b5090565b5b80821115610a045760008160009055506001016109ec565b5090565b600081359050610a1781611163565b92915050565b600082601f830112610a2e57600080fd5b8135610a41610a3c82610ffc565b610fcb565b9150818183526020840193506020810190508360005b83811015610a875781358601610a6d8882610aa6565b845260208401935060208301925050600181019050610a57565b5050505092915050565b600081359050610aa08161117a565b92915050565b600082601f830112610ab757600080fd5b8135610aca610ac582611028565b610fcb565b91508082526020830160208301858383011115610ae657600080fd5b610af183828461110e565b50505092915050565b600081359050610b0981611191565b92915050565b600060208284031215610b2157600080fd5b6000610b2f84828501610a08565b91505092915050565b60008060408385031215610b4b57600080fd5b6000610b5985828601610a08565b9250506020610b6a85828601610a91565b9150509250929050565b600080600060608486031215610b8957600080fd5b6000610b9786828701610afa565b935050602084013567ffffffffffffffff811115610bb457600080fd5b610bc086828701610a1d565b925050604084013567ffffffffffffffff811115610bdd57600080fd5b610be986828701610a1d565b9150509250925092565b60008060408385031215610c0657600080fd5b6000610c1485828601610afa565b925050602083013567ffffffffffffffff811115610c3157600080fd5b610c3d85828601610aa6565b9150509250929050565b610c5081611090565b82525050565b610c5f816110a2565b82525050565b610c6e816110d8565b82525050565b610c7d816110fc565b82525050565b6000610c8e82611058565b610c988185611074565b9350610ca881856020860161111d565b610cb181611152565b840191505092915050565b6000610cc782611058565b610cd18185611085565b9350610ce181856020860161111d565b80840191505092915050565b6000610cfa602683611074565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d60602383611074565b91507f746f6b656e49647320616e642074784861736865732073697a65206d69736d6160008301527f74636800000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610dc6601e83611074565b91507f7772697465722063616e277420777269746520746f20726567697374727900006000830152602082019050919050565b6000610e06602083611074565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000610e46600083611063565b9150600082019050919050565b610e5c816110ce565b82525050565b6000610e6e8284610cbc565b915081905092915050565b6000602082019050610e8e6000830184610c47565b92915050565b6000606082019050610ea96000830186610c47565b8181036020830152610ebb8185610c83565b9050610eca6040830184610e53565b949350505050565b6000602082019050610ee76000830184610c56565b92915050565b6000602082019050610f026000830184610c65565b92915050565b60006060820190508181036000830152610f228185610c83565b9050610f316020830184610c74565b8181036040830152610f4281610e39565b90509392505050565b60006020820190508181036000830152610f6481610ced565b9050919050565b60006020820190508181036000830152610f8481610d53565b9050919050565b60006020820190508181036000830152610fa481610db9565b9050919050565b60006020820190508181036000830152610fc481610df9565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715610ff257610ff1611150565b5b8060405250919050565b600067ffffffffffffffff82111561101757611016611150565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561104357611042611150565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061109b826110ae565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006110e3826110ea565b9050919050565b60006110f5826110ae565b9050919050565b6000611107826110ce565b9050919050565b82818337600083830152505050565b60005b8381101561113b578082015181840152602081019050611120565b8381111561114a576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b61116c81611090565b811461117757600080fd5b50565b611183816110a2565b811461118e57600080fd5b50565b61119a816110ce565b81146111a557600080fd5b5056fea2646970667358221220e4898791dc9069465c0c7809f6657ae3acdec8677951abac6687ee30422553ec64736f6c63430007030033';