/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BellCurveParametersStorage } from "../BellCurveParametersStorage";

export class BellCurveParametersStorage__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _a: BigNumberish,
    _b: BigNumberish,
    _c: BigNumberish,
    _d: BigNumberish,
    overrides?: Overrides
  ): Promise<BellCurveParametersStorage> {
    return super.deploy(
      _a,
      _b,
      _c,
      _d,
      overrides || {}
    ) as Promise<BellCurveParametersStorage>;
  }
  getDeployTransaction(
    _a: BigNumberish,
    _b: BigNumberish,
    _c: BigNumberish,
    _d: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_a, _b, _c, _d, overrides || {});
  }
  attach(address: string): BellCurveParametersStorage {
    return super.attach(address) as BellCurveParametersStorage;
  }
  connect(signer: Signer): BellCurveParametersStorage__factory {
    return super.connect(signer) as BellCurveParametersStorage__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BellCurveParametersStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BellCurveParametersStorage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_c",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_d",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "a",
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
    name: "b",
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
    name: "c",
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
    name: "d",
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
];

const _bytecode =
  "0x61010060405234801561001157600080fd5b506040516102ef3803806102ef83398181016040528101906100339190610071565b83608081815250508260a081815250508160c081815250508060e08181525050505050506100f5565b60008151905061006b816100de565b92915050565b6000806000806080858703121561008757600080fd5b60006100958782880161005c565b94505060206100a68782880161005c565b93505060406100b78782880161005c565b92505060606100c88782880161005c565b91505092959194509250565b6000819050919050565b6100e7816100d4565b81146100f257600080fd5b50565b60805160a05160c05160e0516101c361012c6000396000610113015260006101370152600060ef0152600060cb01526101c36000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630dbe671f146100515780634df7e3d01461006f5780638a054ac21461008d578063c3da42b8146100ab575b600080fd5b6100596100c9565b6040516100669190610168565b60405180910390f35b6100776100ed565b6040516100849190610168565b60405180910390f35b610095610111565b6040516100a29190610168565b60405180910390f35b6100b3610135565b6040516100c09190610168565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b61016281610183565b82525050565b600060208201905061017d6000830184610159565b92915050565b600081905091905056fea2646970667358221220cba7021e5ca805fcd622087256ada9202e784fa1834515bd933c0dd4ec5f0aff64736f6c63430008040033";
