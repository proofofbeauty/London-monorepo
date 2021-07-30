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
} from 'ethers';
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface Erc165Interface extends ethers.utils.Interface {
  functions: {
    'supportsInterface(bytes4)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;

  events: {};
}

export class Erc165 extends Contract {
  'connect'(signerOrProvider: Signer | Provider | string): this;
  'attach'(addressOrName: string): this;
  'deployed'(): Promise<this>;

  'on'(event: EventFilter | string, listener: Listener): this;
  'once'(event: EventFilter | string, listener: Listener): this;
  'addListener'(eventName: EventFilter | string, listener: Listener): this;
  'removeAllListeners'(eventName: EventFilter | string): this;
  'removeListener'(eventName: any, listener: Listener): this;

  'interface': Erc165Interface;

  'functions': {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<{
      0: boolean;
    }>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<{
      0: boolean;
    }>;
  };

  'supportsInterface'(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'supportsInterface(bytes4)'(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'callStatic': {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  'filters': {};

  'estimateGas': {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  'populateTransaction': {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
