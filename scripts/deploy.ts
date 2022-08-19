import { ethers } from "hardhat";

// NFT Contract Address: 0xa4B4776E716dC7C84DCEaeD3267976B0aa98494C
// NFT LINK: https://testnets.opensea.io/assets/rinkeby/0xa4b4776e716dc7c84dceaed3267976b0aa98494c/0

const main = async () => {
  const ToxNFTFactory = await ethers.getContractFactory("ToxNFT");
  const toxnft = await ToxNFTFactory.deploy();

  await toxnft.deployed();

  const address = "0x4e9776985f2780c3c99Ff2D69C9AebD583F00ECE"
  const ipfsCID = "ipfs://QmNt3DCHtm2y3JtcXop6Y6q4CiM2WPvzci2vLTtPk8ZXAW"

  await toxnft.safeMint(address, ipfsCID);
  const balance = await toxnft.balanceOf(address);
  
  console.log("ToxToken Contract deployed to:", toxnft.address);
  console.log("Minted Address Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
