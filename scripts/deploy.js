const hre = require("hardhat");

async function main() {
  const Sun = await hre.ethers.getContractFactory("SUNSNFT");
  const sun = await Sun.deploy("0xeb42e006aB8D7f49fcdf670871573CF031fB31eD");
  await sun.deployed();
  console.log("SUNSNFT Contract Address: ", await sun.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
