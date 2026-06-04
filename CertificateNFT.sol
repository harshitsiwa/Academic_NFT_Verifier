// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CertificateNFT is ERC721, ERC721URIStorage, Ownable {
    // --- Identity Tracking ---
    struct StudentIdentity {
        string aadhaarHash;
        bool isVerified;
    }
    
    mapping(address => StudentIdentity) public verifiedStudents;

    // --- State Variables ---
    mapping(uint256 => bool) private _revoked;

    struct Certificate {
        string studentName;
        string rollNumber;
        string degree;
        string year;
        uint256 issuedAt;
    }

    mapping(uint256 => Certificate) private _certificates;

    // --- NEW: Token Tracking ---
    mapping(address => uint256[]) private _studentTokens;

    // --- Events ---
    event StudentRegistered(address indexed studentWallet, string aadhaarHash);
    event CertificateMinted(uint256 indexed tokenId, address indexed studentWallet, string studentName);
    event CertificateRevoked(uint256 indexed tokenId, string reason);

    constructor() ERC721("AcademicCertificate", "ACERT") Ownable(msg.sender) {}

    // --- Student Registration ---
    function registerStudent(string memory _aadhaarHash) public {
        require(!verifiedStudents[msg.sender].isVerified, "Wallet already registered!");
        
        verifiedStudents[msg.sender] = StudentIdentity({
            aadhaarHash: _aadhaarHash,
            isVerified: true
        });

        emit StudentRegistered(msg.sender, _aadhaarHash);
    }

    // --- UPGRADED: SECURE RANDOM MINTING ---
    function mintCertificate(
        address studentWallet,
        string memory studentName,
        string memory rollNumber,
        string memory degree,
        string memory year,
        string memory metadataURI
    ) public onlyOwner returns (uint256) {
        
        // Security check
        require(verifiedStudents[studentWallet].isVerified, "ERROR: Student must complete Aadhaar KYC first!");

        // NEW: Generate a secure, pseudo-random 10-digit Token ID based on unique identifiers and timestamp
        uint256 tokenId = uint256(keccak256(abi.encodePacked(block.timestamp, studentWallet, rollNumber, msg.sender))) % 10000000000;
        
        // Ensure no astronomical freak collision (virtually impossible)
        require(_certificates[tokenId].issuedAt == 0, "Token ID Collision");

        _safeMint(studentWallet, tokenId);
        _setTokenURI(tokenId, metadataURI);

        _certificates[tokenId] = Certificate({
            studentName: studentName,
            rollNumber:  rollNumber,
            degree:      degree,
            year:        year,
            issuedAt:    block.timestamp
        });

        // NEW: Remember that this specific student owns this massive Token ID
        _studentTokens[studentWallet].push(tokenId);

        emit CertificateMinted(tokenId, studentWallet, studentName);
        return tokenId;
    }

    // --- NEW: Helper for Student Dashboard ---
    /**
     * @dev Frontends can call this to retrieve the array of randomized Token IDs assigned to a student
     */
    function getTokensByStudent(address student) public view returns (uint256[] memory) {
        return _studentTokens[student];
    }

    // --- Soulbound Lock ---
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721) returns (address) {
        address from = _ownerOf(tokenId);
        if (from != address(0) && to != address(0)) {
            revert("ERROR: Certificates are Soulbound and cannot be transferred.");
        }
        return super._update(to, tokenId, auth);
    }

    // --- Revocation & Verification ---
    function revokeCertificate(uint256 tokenId, string memory reason) public onlyOwner {
        require(ownerOf(tokenId) != address(0), "Token does not exist");
        require(!_revoked[tokenId], "Already revoked");

        _revoked[tokenId] = true;
        emit CertificateRevoked(tokenId, reason);
    }

    function verifyCertificate(uint256 tokenId) public view returns (
        string memory studentName, string memory rollNumber, string memory degree, 
        string memory year, uint256 issuedAt, address currentHolder, bool isValid
    ) {
        require(ownerOf(tokenId) != address(0), "Certificate does not exist");
        Certificate memory cert = _certificates[tokenId];

        return (
            cert.studentName, cert.rollNumber, cert.degree, cert.year, 
            cert.issuedAt, ownerOf(tokenId), !_revoked[tokenId]
        );
    }

    // Required Overrides
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
