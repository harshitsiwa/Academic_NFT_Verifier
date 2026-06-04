const hre = require("hardhat");

async function main() {
    const CertificateNFT = await hre.ethers.getContractFactory("CertificateNFT");
    const certificateNFT = await CertificateNFT.deploy();

    await certificateNFT.waitForDeployment();
    console.log(`CertificateNFT deployed to: ${await certificateNFT.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
