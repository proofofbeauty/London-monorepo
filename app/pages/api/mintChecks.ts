import { deployments } from '@pob/protocol';
import { NextApiRequest, NextApiResponse } from 'next';
import { NFT_STORAGE_API_KEY, OPENSEA_API_KEY } from '../../constants';
import { ADDRESS_REGEX } from '../../utils/regex';
import { NFTStorage, Blob } from 'nft.storage';
import { Wallet } from '@ethersproject/wallet';
import { PROVIDER } from '../../constants/providers';
import {
  getEmberGene,
  getEmbersTokenMetadataFromGene,
  renderEmbers,
} from '@pob/sketches';
import { newArray } from '@pob/sketches/src/utils/array';
import { utils } from 'ethers';

const EMBERS_MINTING_AUTHORITY_PRIVATE_KEY =
  process.env.EMBERS_MINTING_AUTHORITY_PRIVATE_KEY || '';
const mintingSigner = new Wallet(
  EMBERS_MINTING_AUTHORITY_PRIVATE_KEY,
  PROVIDER,
);

const client = new NFTStorage({ token: NFT_STORAGE_API_KEY ?? '' });

const getTokenMetadataAndIPFS = async (
  seed: string,
): Promise<[any, string]> => {
  const gene = getEmberGene(seed);
  const image = renderEmbers(gene);
  const imageBlob = new Blob([image]);
  const imageIpfs = await client.storeBlob(imageBlob);
  const tokenMetadata = getEmbersTokenMetadataFromGene(
    `ipfs://${imageIpfs}`,
    gene,
  );
  const metadataBlob = new Blob([JSON.stringify(tokenMetadata)]);
  const tokenMetadataIpfs = await client.storeBlob(metadataBlob);
  return [tokenMetadata, `ipfs://${tokenMetadataIpfs}`];
};

const handleMintChecks = async (req: NextApiRequest, res: NextApiResponse) => {
  const { numChecks: numChecksStr, to } = req.query;

  if (typeof to !== 'string') {
    res
      .status(422)
      .json({ statusCode: 422, message: 'to is not a valid value' });
    return;
  }
  if (!ADDRESS_REGEX.test(to as string)) {
    res
      .status(422)
      .json({ statusCode: 422, message: 'to is not a valid value' });
    return;
  }
  if (typeof numChecksStr !== 'string') {
    res
      .status(422)
      .json({ statusCode: 422, message: 'numChecksStr is not a valid value' });
    return;
  }
  const numCheck = parseInt(numChecksStr);
  const nonce = await PROVIDER.getTransactionCount(to);

  const tokenMetadatas: any[] = [];
  const ipfsHashes: string[] = [];
  const tokenMetadatasAndIpfsHashes = await Promise.all(
    newArray(numCheck).map((_, i) =>
      getTokenMetadataAndIPFS(`${to}-${nonce + i}`),
    ),
  );
  for (let i = 0; i < numCheck; ++i) {
    tokenMetadatas.push(tokenMetadatasAndIpfsHashes[i][0]);
    ipfsHashes.push(tokenMetadatasAndIpfsHashes[i][1]);
  }

  const mintChecks: any[] = [];

  for (let i = 0; i < numCheck; ++i) {
    const messageHash = utils.solidityKeccak256(
      ['address', 'string'],
      [to, ipfsHashes[i]],
    );

    const bytesMessageHash = utils.arrayify(messageHash);
    const signature = await mintingSigner.signMessage(bytesMessageHash);

    mintChecks.push({
      to,
      URI: ipfsHashes[i],
      signature,
    });
  }

  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=65536, max-age=65536`,
  );
  res.status(200).json({
    statusCode: 200,
    tokenMetadatas,
    ipfsHashes,
    mintChecks,
  });
};

export default handleMintChecks;
