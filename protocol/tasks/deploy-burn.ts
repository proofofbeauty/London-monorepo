// import { BigNumber } from '@ethersproject/bignumber';
// import { utils } from 'ethers';
// import { task } from 'hardhat/config';
// import { deployments } from '../deployments';
// import { LondonGift } from '../typechain/LondonGift';
// import { LondonBurn } from '../typechain/LondonBurn';
// import { NETWORK_NAME_CHAIN_ID } from '../utils';
// import { ERC20Mintable } from '../typechain/ERC20Mintable';
// import { ERC721Mintable } from '../typechain/ERC721Mintable';

// const ONE_TOKEN_IN_BASE_UNITS = utils.parseEther('1');

// const BLOCKS_PER_24_HRS = 6300;

// task('deploy-burn', 'Deploys LONDON EMBERS', async (args, hre) => {
//   const owner = (await hre.ethers.getSigners())[0];
//   const rando = (await hre.ethers.getSigners())[1];

//   await hre.run('compile');

//   console.log(`deploying with ${await owner.getAddress()}`);

//   const name = 'LONDON Embers';
//   const symbol = 'EMBERS';
//   const revealBlockNumber = 0;

//   const Erc20Mintable = await hre.ethers.getContractFactory('ERC20Mintable');

//   const erc20 = (await Erc20Mintable.deploy(
//     await owner.getAddress(),
//     'LONDON',
//     'LONDON',
//   )) as ERC20Mintable;

//   await erc20.deployed();
//   console.log('London deployed to:', erc20.address);
//   // deploy LondonGift
//   const ERC721Mintable = await hre.ethers.getContractFactory('ERC721Mintable');
//   const londonGift = (await ERC721Mintable.deploy(
//     'LONDON GIFT',
//     'GIFT',
//   )) as ERC721Mintable;

//   await londonGift.deployed();
//   console.log('LondonGift deployed to:', londonGift.address);

//   const LondonBurn = await hre.ethers.getContractFactory('LondonBurn');
//   const londonBurn = (await LondonBurn.deploy(
//     name,
//     symbol,
//     erc20.address,
//     londonGift.address,
//   )) as LondonBurn;
//   await londonBurn.deployed();
//   console.log('LondonBurn deployed to:', londonBurn.address);

//   console.log('wiring metadata');
//   await londonBurn.setTreasury(
//     deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
//   );
//   await londonBurn.setMintingAuthority(
//     deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].embersMintingAuthority,
//   );
//   await londonBurn.setContractURI(
//     `ipfs://${
//       deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].embersContractURI
//     }/`,
//   );
//   // set block numbers
//   await londonBurn.setRevealBlockNumber(revealBlockNumber);

//   // transfer ownership
//   // await londonBurn.transferOwnership(
//   //   deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
//   // );

//   console.log('testnet mints');
//   // mint test london
//   await erc20.mint(
//     await owner.getAddress(),
//     ONE_TOKEN_IN_BASE_UNITS.mul(100_000_000),
//   );
//   await erc20.mint(await rando.getAddress(), ONE_TOKEN_IN_BASE_UNITS.mul(2000));
//   console.log('testnet nft mints');
//   for (let i = 0; i < 20; ++i) {
//     await londonGift.connect(owner).mint();
//   }
//   console.log(await rando.getAddress());
//   for (let i = 0; i < 20; ++i) {
//     await londonGift.connect(rando).mint();
//   }
// });
