import { ethers } from "hardhat";

// NFT Contract Address: 0xf033474E9d0c4C01a330b1cD8605FAf25fEA99e4
const main = async () => {
  const ToxNFTFactory = await ethers.getContractFactory("ToxNFT");
  const toxnft = await ToxNFTFactory.deploy();

  await toxnft.deployed();

  console.log("ToxToken Contract deployed to:", toxnft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
