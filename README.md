# NFT-Based Academic Certificate Verifier Using Blockchain
A decentralized academic certificate verification system that leverages **Ethereum Blockchain**, **Non-Fungible Tokens (NFTs)**, **IPFS**, and **MetaMask** to securely issue, store, and verify academic credentials.

Instead of relying on manual verification by educational institutions, this platform enables students to own their academic records as NFTs and allows employers or other organizations to instantly verify certificate authenticity using a unique Token ID.

---

## Overview

Academic certificate forgery has become a major challenge for educational institutions and employers. Traditional verification methods are often slow, centralized, and vulnerable to manipulation.

This project addresses these issues by storing certificate data on the **InterPlanetary File System (IPFS)** while recording its cryptographic reference on the **Ethereum blockchain** through NFT minting. Each issued certificate becomes a unique digital asset owned by the student.

---

## Features

* Student authentication using **Offline Aadhaar e-KYC XML ZIP verification**
* MetaMask wallet integration
* Institution-only certificate issuance
* Certificate storage on IPFS
* ERC-721 NFT minting for academic certificates
* Blockchain-backed immutable records
* Unique Token ID for every certificate
* Instant employer verification through Token ID
* Protection against certificate forgery and tampering

---

## System Workflow

### 1. Student Registration

* Student creates/connects a MetaMask wallet.
* Student uploads Offline Aadhaar e-KYC XML ZIP file.
* Identity is verified using the associated Share Code.

### 2. Institution Verification

* Only authorized educational institutions can access the certificate issuance portal.
* Institutions are authenticated through an administrator-controlled approval mechanism.

### 3. Certificate Upload

* Institution uploads the student's academic certificate.
* Certificate is stored on IPFS.
* IPFS generates a unique Content Identifier (CID).

### 4. NFT Minting

* Smart contract creates an ERC-721 NFT.
* NFT metadata contains:

  * Student wallet address
  * Institution details
  * Certificate information
  * IPFS CID

### 5. NFT Transfer

* Minted NFT is transferred to the student's MetaMask wallet.
* Student becomes the owner of the digital certificate.

### 6. Certificate Verification

* Student shares the NFT Token ID.
* Employer enters the Token ID on the verification portal.
* Platform retrieves certificate metadata from the blockchain and displays the certificate stored on IPFS.

---

## Technology Stack

| Component             | Technology                |
| --------------------- | ------------------------- |
| Blockchain            | Ethereum                  |
| Smart Contracts       | Solidity                  |
| NFT Standard          | ERC-721                   |
| Wallet Integration    | MetaMask                  |
| Decentralized Storage | IPFS                      |
| Development Framework | Hardhat                   |
| Frontend              | HTML, CSS, JavaScript     |
| Backend Scripts       | Node.js                   |
| Identity Verification | Offline Aadhaar e-KYC XML |

---

## Project Structure

```text
FINALISING/
├── contracts/
│   └── CertificateNFT.sol        # ERC-721 smart contract
├── scripts/
│   ├── deploy.js                 # Smart contract deployment script
│   └── generate_ppt.js           # Utility script
├── .env                          # Environment variables
├── admin.html                    # Institution/Admin dashboard
├── app.js                        # Main application logic
├── hardhat.config.js             # Hardhat configuration
├── index.html                    # Landing page
├── package.json                  # Node dependencies
├── package-lock.json
├── student.html                  # Student portal
├── style.css                     # Styling
└── verify.html                   # Certificate verification page
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/nft-academic-certificate-verifier.git

cd nft-academic-certificate-verifier
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file and add the required values:

```env
PRIVATE_KEY=your_wallet_private_key
RPC_URL=your_ethereum_rpc_url
```

### Compile the smart contract

```bash
npx hardhat compile
```

### Deploy the contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

---

## Running the Frontend

Open the main page:

```
index.html
```

or serve the project using a local server extension such as **Live Server** in Visual Studio Code.

---

## Security Features

* Blockchain immutability
* NFT ownership verification
* IPFS decentralized storage
* MetaMask wallet authentication
* Institution-controlled certificate issuance
* Offline Aadhaar identity verification
* Cryptographic hashing of certificate records

---

## Future Enhancements

* Integration with official UIDAI APIs
* Multi-university onboarding portal
* QR-code based certificate verification
* Multi-chain support
* Mobile application
* Revocable and updatable certificates
* Digital signature support for institutions

---

## Use Cases

* University degree verification
* Employer background checks
* Scholarship validation
* Higher education admissions
* International credential verification


## Author

Harshit Siwach

**Project Title:**
**NFT-Based Academic Certificate Verifier Using Blockchain**


## License

This project is intended for educational and research purposes.

MIT License.
