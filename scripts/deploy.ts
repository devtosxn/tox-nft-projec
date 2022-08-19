import { ethers } from "hardhat";

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
