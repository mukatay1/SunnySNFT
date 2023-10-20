const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SUNSNFT", function () {
  let MyContract;
  let myContractDeployed;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;

  beforeEach(async function () {
    MyContract = await ethers.getContractFactory("SUNSNFT");
    myContractDeployed = await MyContract.deploy("0xeb42e006aB8D7f49fcdf670871573CF031fB31eD");
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
  });

  describe("Deployment", function () {
    it("should have correct name and symbol", async function () {
      const name = await myContractDeployed.name();
      const symbol = await myContractDeployed.symbol();

      expect(name).to.equal("SUNSNFT");
      expect(symbol).to.equal("SUNSNFT");
    });

    it("should have the correct owner address", async function () {
      const contractOwner = await myContractDeployed.owner();

      expect(contractOwner).to.equal("0xeb42e006aB8D7f49fcdf670871573CF031fB31eD");
    });
  });
});
