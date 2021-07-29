import { BigNumber } from '@ethersproject/bignumber';
import { utils } from 'ethers';
import { task } from 'hardhat/config';
import { deployments } from '../deployments';
import { LondonGift } from '../typechain/LondonGift';
import { ERC20Mintable } from '../typechain/ERC20Mintable';
import { GasPriceBasedMinter } from '../typechain/GasPriceBasedMinter';
import { NETWORK_NAME_CHAIN_ID } from '../utils';

const ONE_TOKEN_IN_BASE_UNITS = utils.parseEther('1');

const BLOCKS_PER_24_HRS = 6300;

task('deploy-nft', 'Deploys $LONDON ', async (args, hre) => {
  const owner = (await hre.ethers.getSigners())[0];

  await hre.run('compile');

  console.log(`deploying with ${await owner.getAddress()}`);

  const tokenSymbol = 'LONDON';
  const tokenName = 'LONDON';

  const name = '$LONDON Gift';
  const symbol = 'GIFT';
  const blockNumberUpTo = 12965000;
  const mintPrice = ONE_TOKEN_IN_BASE_UNITS.mul(1559);
  const maxSupply = 8888;
  const provenance =
    '0xd46179dd40ee3254e5dff531d0cea44ddf279de734635a2fa75ee4a86ebfcc43';

  // deploy erc1155
  const ERC20Mintable = await hre.ethers.getContractFactory('ERC20Mintable');

  const erc20 = await ERC20Mintable.attach(
    deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].erc20,
  );
  await erc20.deployed();

  // deploy LondonGift
  const LondonGift = await hre.ethers.getContractFactory('LondonGift');
  // const londonGift = await LondonGift.attach(
  //   deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].gift,
  // );
  const londonGift = (await LondonGift.deploy(
    name,
    symbol,
    erc20.address,
    mintPrice,
    maxSupply,
    provenance,
  )) as LondonGift;
  await londonGift.deployed();
  console.log('LondonGift deployed to:', londonGift.address);

  console.log('wiring metadata');
  await londonGift.setTreasury(
    deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
  );
  await londonGift.setContractURI(
    `ipfs://${
      deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].contractURI
    }/`,
  );
  // await londonGift.setBaseMetadataURI(
  //   `ipfs://${
  //     deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].baseTokenURI
  //   }/`,
  // );
  await londonGift.setMintStartAtBlockNum(blockNumberUpTo);
  await londonGift.setRevealStartAtBlockNum(
    blockNumberUpTo + BLOCKS_PER_24_HRS * 1.5,
  );
  // await londonGift.transferOwnership(
  //   deployments[NETWORK_NAME_CHAIN_ID[hre.network.name]].multisig,
  // );
});