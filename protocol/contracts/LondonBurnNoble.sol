// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20Mintable.sol";
import "./ERC721.sol";
import "./LondonBurnBase.sol";
import "./utils/Signature.sol";

abstract contract LondonBurnNoble is LondonBurnBase, Signature {
  uint256 constant PRICE_PER_AIRDROP_MINT =    1559; // TODO put in proper values

  address public airdropSigner;

  enum Nobility {
    Common,
    Baron, 
    Earl, 
    Duke
  }
  
  mapping(Nobility => uint256) airdropAmount;


  constructor(
  ) {
    airdropAmount[Nobility.Baron] = 2;
    airdropAmount[Nobility.Earl] = 5;
    airdropAmount[Nobility.Duke] = 16;
  }

  mapping(address => bool) hasReceivedAirdrop; // TODO: should we change this to use airdrop hash?

  function setAirdropSigner(address _airdropSigner) public onlyOwner {
    airdropSigner = _airdropSigner;
  }

  function getAirdropHash(address to, Nobility nobility) public pure returns (bytes32) {
    return keccak256(abi.encodePacked(to, nobility));
  }

  function verifyAirdrop(
    address to, Nobility nobility, bytes calldata signature
  ) public view returns (bool) {
    bytes32 signedHash = getAirdropHash(to, nobility);
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);
    return isSigned(airdropSigner, signedHash, v, r, s);
  }

  function mintNobleType(
    address to, Nobility nobility, bytes calldata signature
  ) public {
    require(block.number < ultraSonicForkBlockNumber, "ULTRASONIC MODE ENGAGED");
    _payLondon(to, PRICE_PER_AIRDROP_MINT);
    require(verifyAirdrop(to, nobility, signature), "Noble mint is not valid");
    _mintTokenType(to, NOBLE_TYPE, airdropAmount[nobility]);
  }

}