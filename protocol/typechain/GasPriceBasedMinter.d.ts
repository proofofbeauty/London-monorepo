/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GasPriceBasedMinterInterface extends ethers.utils.Interface {
  functions: {
    "a()": FunctionFragment;
    "b()": FunctionFragment;
    "blockNumberUpTo()": FunctionFragment;
    "c()": FunctionFragment;
    "d()": FunctionFragment;
    "erc20()": FunctionFragment;
    "mintableTokenAtGasPrice(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setErc20(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "a", values?: undefined): string;
  encodeFunctionData(functionFragment: "b", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "blockNumberUpTo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "c", values?: undefined): string;
  encodeFunctionData(functionFragment: "d", values?: undefined): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintableTokenAtGasPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setErc20", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "a", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "b", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "blockNumberUpTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "c", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "d", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintableTokenAtGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setErc20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class GasPriceBasedMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GasPriceBasedMinterInterface;

  functions: {
    a(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "a()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    b(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "b()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    blockNumberUpTo(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "blockNumberUpTo()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    c(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "c()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    d(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "d()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    erc20(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "erc20()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    mintableTokenAtGasPrice(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      0: BigNumber;
    }>;

    "mintableTokenAtGasPrice(uint256)"(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount: BigNumber;
      0: BigNumber;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setErc20(
      _erc20: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setErc20(address)"(
      _erc20: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  a(overrides?: CallOverrides): Promise<BigNumber>;

  "a()"(overrides?: CallOverrides): Promise<BigNumber>;

  b(overrides?: CallOverrides): Promise<BigNumber>;

  "b()"(overrides?: CallOverrides): Promise<BigNumber>;

  blockNumberUpTo(overrides?: CallOverrides): Promise<BigNumber>;

  "blockNumberUpTo()"(overrides?: CallOverrides): Promise<BigNumber>;

  c(overrides?: CallOverrides): Promise<BigNumber>;

  "c()"(overrides?: CallOverrides): Promise<BigNumber>;

  d(overrides?: CallOverrides): Promise<BigNumber>;

  "d()"(overrides?: CallOverrides): Promise<BigNumber>;

  erc20(overrides?: CallOverrides): Promise<string>;

  "erc20()"(overrides?: CallOverrides): Promise<string>;

  mintableTokenAtGasPrice(
    gasPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "mintableTokenAtGasPrice(uint256)"(
    gasPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setErc20(_erc20: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setErc20(address)"(
    _erc20: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    "a()"(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    "b()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberUpTo(overrides?: CallOverrides): Promise<BigNumber>;

    "blockNumberUpTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    "c()"(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;

    "d()"(overrides?: CallOverrides): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<string>;

    "erc20()"(overrides?: CallOverrides): Promise<string>;

    mintableTokenAtGasPrice(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mintableTokenAtGasPrice(uint256)"(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setErc20(_erc20: string, overrides?: CallOverrides): Promise<void>;

    "setErc20(address)"(
      _erc20: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    a(overrides?: CallOverrides): Promise<BigNumber>;

    "a()"(overrides?: CallOverrides): Promise<BigNumber>;

    b(overrides?: CallOverrides): Promise<BigNumber>;

    "b()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockNumberUpTo(overrides?: CallOverrides): Promise<BigNumber>;

    "blockNumberUpTo()"(overrides?: CallOverrides): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;

    "c()"(overrides?: CallOverrides): Promise<BigNumber>;

    d(overrides?: CallOverrides): Promise<BigNumber>;

    "d()"(overrides?: CallOverrides): Promise<BigNumber>;

    erc20(overrides?: CallOverrides): Promise<BigNumber>;

    "erc20()"(overrides?: CallOverrides): Promise<BigNumber>;

    mintableTokenAtGasPrice(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mintableTokenAtGasPrice(uint256)"(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setErc20(_erc20: string, overrides?: Overrides): Promise<BigNumber>;

    "setErc20(address)"(
      _erc20: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    a(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "a()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    b(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "b()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockNumberUpTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockNumberUpTo()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "c()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    d(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "d()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    erc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "erc20()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintableTokenAtGasPrice(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "mintableTokenAtGasPrice(uint256)"(
      gasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setErc20(
      _erc20: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setErc20(address)"(
      _erc20: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
