// --- Configuration Block ---
const CONTRACT_ADDRESS = "0xEF033d9f7BdF8fbE68b5D3B00cE314B3d707E837";
const CONTRACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"studentWallet","type":"address"},{"indexed":false,"internalType":"string","name":"studentName","type":"string"}],"name":"CertificateMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"CertificateRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"studentWallet","type":"address"},{"indexed":false,"internalType":"string","name":"aadhaarHash","type":"string"}],"name":"StudentRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"student","type":"address"}],"name":"getTokensByStudent","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"studentWallet","type":"address"},{"internalType":"string","name":"studentName","type":"string"},{"internalType":"string","name":"rollNumber","type":"string"},{"internalType":"string","name":"degree","type":"string"},{"internalType":"string","name":"year","type":"string"},{"internalType":"string","name":"metadataURI","type":"string"}],"name":"mintCertificate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_aadhaarHash","type":"string"}],"name":"registerStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"reason","type":"string"}],"name":"revokeCertificate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"verifiedStudents","outputs":[{"internalType":"string","name":"aadhaarHash","type":"string"},{"internalType":"bool","name":"isVerified","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"verifyCertificate","outputs":[{"internalType":"string","name":"studentName","type":"string"},{"internalType":"string","name":"rollNumber","type":"string"},{"internalType":"string","name":"degree","type":"string"},{"internalType":"string","name":"year","type":"string"},{"internalType":"uint256","name":"issuedAt","type":"uint256"},{"internalType":"address","name":"currentHolder","type":"address"},{"internalType":"bool","name":"isValid","type":"bool"}],"stateMutability":"view","type":"function"}]
;

let provider;
let signer;
let contract;

// --- DOM Selectors ---
const connectWalletBtn = document.getElementById("connectWalletBtn");
const walletAddressDisplay = document.getElementById("walletAddressDisplay");

const registerBtn = document.getElementById("registerBtn");
const mintCertBtn = document.getElementById("mintCertBtn");
const verifyBtn = document.getElementById("verifyBtn");
const revokeCertBtn = document.getElementById("revokeCertBtn");

// --- Initialization & Connection ---
async function connectWallet() {
    try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
            alert("Please install MetaMask to use this application. Redirecting to download page...");
            window.open("https://metamask.io/download/", "_blank"); // Opens in a new tab
            return;
        }

        // Initialize Ethers provider from MetaMask
        provider = new ethers.BrowserProvider(window.ethereum);
        
        // Request account access
        const accounts = await provider.send("eth_requestAccounts", []);
        
        // Get the signer for transactions
        signer = await provider.getSigner();
        
        // Update UI
        const account = accounts[0];
        walletAddressDisplay.textContent = `Connected: ${account.substring(0, 6)}...${account.slice(-4)}`;
        
        // Setup contract instance if address and ABI are provided
        if (CONTRACT_ADDRESS && CONTRACT_ABI.length > 0) {
            contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        }

        console.log("Wallet connected successfully!");

        // If on Student Portal, reveal Dashboard
        if (document.getElementById("dashboardSection")) {
            document.getElementById("dashboardSection").style.display = "block";
            renderStudentDashboard();
        }
    } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet checking console for details.");
    }
}

// --- Placeholder Functions ---

async function registerAadhaar() {
    console.log("registerAadhaar() triggered");
    const statusEl = document.getElementById("studentStatus");
    const fileInput = document.getElementById("aadhaarZipInput");
    
    try {
        if (!fileInput.files.length) {
            throw new Error("Please upload an Aadhaar XML ZIP file.");
        }
        if (!contract) {
            throw new Error("Please connect your wallet first.");
        }

        if (statusEl) {
            statusEl.textContent = "Extracting ZIP using JSZip...";
            statusEl.className = "status";
        }

        // Read ZIP file using JSZip
        const file = fileInput.files[0];
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(file);

        // Locate the XML file inside the ZIP
        const xmlFile = Object.values(loadedZip.files).find(f => f.name.endsWith('.xml'));
        if (!xmlFile) {
            throw new Error("No XML file found inside the ZIP.");
        }

        // Parse the XML text
        const xmlText = await xmlFile.async("string");
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        // Extract reference number (Aadhaar Offline XML typically has a referenceId at the root node)
        let referenceId = null;
        const rootNode = xmlDoc.documentElement;
        
        if (rootNode && rootNode.getAttribute("referenceId")) {
            referenceId = rootNode.getAttribute("referenceId");
        } else {
            // Fallback search if structure slightly varies
            const refTag = xmlDoc.querySelector("referenceId") || xmlDoc.querySelector("ReferenceId");
            if (refTag) referenceId = refTag.textContent;
        }

        if (!referenceId) {
            throw new Error("Could not extract a referenceId from the XML.");
        }

        console.log("Extracted Reference ID:", referenceId);

        // Hash the referenceId using Ethers v6
        const bytes = ethers.toUtf8Bytes(referenceId);
        const hash = ethers.keccak256(bytes);
        console.log("Aadhaar Hash:", hash);

        if (statusEl) statusEl.textContent = "Prompting wallet to send transaction...";

        // Call the smart contract function 
        // Note: You called it 'registerStudentAccount' but in the Solidity it's 'registerStudent'
        const tx = await contract.registerStudent(hash);
        
        if (statusEl) statusEl.textContent = "Transaction sent! Waiting for confirmation...";
        
        await tx.wait();
        
        console.log("Student Account Registered Successfully!");
        if (statusEl) {
            statusEl.textContent = "Aadhaar Identity Verified and Wallet Registered!";
            statusEl.className = "status success";
        }

    } catch (error) {
        console.error("Registration Error:", error);
        if (statusEl) {
            statusEl.textContent = error.reason || error.message || "Failed to register student.";
            statusEl.className = "status error";
        }
    }
}

async function mintNFT() {
    console.log("mintNFT() triggered");
    const statusEl = document.getElementById("adminStatus");
    
    if (statusEl) {
        statusEl.textContent = "Processing... Please confirm the transaction in MetaMask.";
        statusEl.className = "status";
    }

    try {
        if (!contract || !signer) {
            throw new Error("Please connect your wallet first.");
        }

        const studentWallet = document.getElementById("adminStudentWallet").value.trim();
        const studentName = document.getElementById("adminStudentName").value.trim();
        const rollNumber = document.getElementById("adminRollNumber").value.trim();
        const degree = document.getElementById("adminDegree").value.trim();
        const year = document.getElementById("adminYear").value.trim();
        const metadataURI = document.getElementById("adminMetadataURI").value.trim();

        if (!studentWallet || !studentName || !rollNumber || !degree || !year || !metadataURI) {
            throw new Error("Please fill out all fields.");
        }

        console.log("Initiating Mint for:", studentWallet);
        const tx = await contract.mintCertificate(
            studentWallet,
            studentName,
            rollNumber,
            degree,
            year,
            metadataURI
        );

        console.log("Mint Transaction Hash:", tx.hash);
        if (statusEl) statusEl.textContent = "Transaction sent! Waiting for validation on blockchain...";

        const receipt = await tx.wait();
        console.log("Minting Receipt:", receipt);

        if (statusEl) {
            statusEl.textContent = " Soulbound Certificate Successfully Minted to Student Wallet!";
            statusEl.className = "status success";
        }

        // Clear fields on success
        document.getElementById("adminStudentWallet").value = "";
        document.getElementById("adminStudentName").value = "";
        document.getElementById("adminRollNumber").value = "";
        document.getElementById("adminDegree").value = "";
        document.getElementById("adminYear").value = "";
        document.getElementById("adminMetadataURI").value = "";

    } catch (error) {
        console.error("Minting Error:", error);
        if (statusEl) {
            let errMsg = "Failed to mint certificate.";
            
            // Decode Ethers v6 Custom Errors properly
            if (error.revert && error.revert.name) {
                errMsg = `Contract Error: ${error.revert.name}`;
                if (error.revert.name === "OwnableUnauthorizedAccount") {
                    errMsg = "Access Denied: Only the Contract Owner (Admin) can mint! Please check MetaMask and ensure you are connected exactly to the deployer wallet.";
                } else if (error.revert.name === "ERC721InvalidReceiver") {
                    errMsg = "Invalid Receiver: The student wallet is invalid or cannot receive NFTs.";
                }
            } else if (error.reason && typeof error.reason === 'string') {
                errMsg = error.reason;
            } else if (error.info && error.info.error && error.info.error.message) {
                errMsg = error.info.error.message;
            } else if (error.shortMessage) {
                errMsg = error.shortMessage;
            } else {
                errMsg = error.message || errMsg;
            }

            statusEl.textContent = errMsg;
            statusEl.className = "status error";
        }
    }
}

async function revokeCertificateFunction() {
    console.log("revokeCertificate() triggered");
    const statusEl = document.getElementById("revokeStatus");
    
    if (statusEl) {
        statusEl.textContent = "Processing... Please confirm the transaction in MetaMask.";
        statusEl.className = "status";
    }

    try {
        if (!contract || !signer) {
            throw new Error("Please connect your wallet first.");
        }

        const tokenId = document.getElementById("revokeTokenId").value.trim();
        const reason = document.getElementById("revokeReason").value.trim();

        if (!tokenId || !reason) {
            throw new Error("Please fill out all fields.");
        }

        console.log("Initiating Revocation for token:", tokenId);
        const tx = await contract.revokeCertificate(tokenId, reason);

        if (statusEl) statusEl.textContent = "Transaction sent! Waiting for validation on blockchain...";

        await tx.wait();

        if (statusEl) {
            statusEl.textContent = "❌ Certificate Successfully Revoked!";
            statusEl.className = "status success";
        }

        // Clear fields on success
        document.getElementById("revokeTokenId").value = "";
        document.getElementById("revokeReason").value = "";

    } catch (error) {
        console.error("Revocation Error:", error);
        if (statusEl) {
            let errMsg = "Failed to revoke certificate.";
            if (error.reason && typeof error.reason === 'string') {
                errMsg = error.reason;
            } else if (error.shortMessage) {
                errMsg = error.shortMessage;
            } else if (error.message) {
                errMsg = error.message;
            }
            statusEl.textContent = errMsg;
            statusEl.className = "status error";
        }
    }
}

async function verifyCertificate() {
    console.log("verifyCertificate() triggered");
    const resultEl = document.getElementById("verifyResult");
    const qrcodeEl = document.getElementById("qrcode");
    const tokenIdInput = document.getElementById("verifyTokenId").value.trim();

    if (!tokenIdInput) {
        if (resultEl) {
            resultEl.textContent = "Please enter a Token ID.";
            resultEl.className = "result error";
        }
        return;
    }

    if (resultEl) {
        resultEl.textContent = "Querying blockchain...";
        resultEl.className = "result";
    }
    if (qrcodeEl) {
        qrcodeEl.innerHTML = ""; // Clear old QR code
        qrcodeEl.style.display = "none";
    }

    try {
        if (!contract) {
            throw new Error("Please connect your wallet first to query the network.");
        }

        // Call the read-only contract function
        const certData = await contract.verifyCertificate(tokenIdInput);
        
        // Ethers v6 returns an array/Result object for multiple return values
        const studentName = certData[0];
        const rollNumber = certData[1];
        const degree = certData[2];
        const year = certData[3];
        const issuedAtStamp = certData[4];
        const currentHolder = certData[5];
        const isValid = certData[6];

        if (!isValid) {
            throw new Error("This Certificate has been marked as INVALID or REVOKED by the administrator.");
        }

        // Format the blockchain timestamp into a readable date
        const issueDate = new Date(Number(issuedAtStamp) * 1000).toLocaleString();

        // Try to fetch NFT metadata to show the visual certificate
        let metadataHtml = "";
        try {
            const tokenUri = await contract.tokenURI(tokenIdInput);
            if (tokenUri) {
                let fetchUri = tokenUri;
                if (tokenUri.startsWith("ipfs://")) fetchUri = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
                
                // Fast check if it's directly an image link
                if (fetchUri.endsWith('.png') || fetchUri.endsWith('.jpg') || fetchUri.endsWith('.jpeg')) {
                    metadataHtml = `<div style="text-align: center; margin-top: 1.5rem;">
                                      <img src="${fetchUri}" alt="Certificate NFT" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                                    </div>`;
                } else {
                    // Try to fetch as JSON metadata
                    const response = await fetch(fetchUri);
                    const contentType = response.headers.get("content-type");
                    
                    if (contentType && contentType.includes("json")) {
                        const metadata = await response.json();
                        if (metadata.image) {
                            let imageUrl = metadata.image;
                            if (imageUrl.startsWith("ipfs://")) imageUrl = imageUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
                            metadataHtml = `<div style="text-align: center; margin-top: 1.5rem;">
                                              <img src="${imageUrl}" alt="Certificate NFT Image" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                                            </div>`;
                        }
                    } else if (contentType && contentType.includes("image")) {
                        // Raw image fallback
                        metadataHtml = `<div style="text-align: center; margin-top: 1.5rem;">
                                          <img src="${fetchUri}" alt="Certificate NFT" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                                        </div>`;
                    }
                }
            }
        } catch (e) {
            console.warn("Could not fetch or parse token URI metadata for the image:", e);
        }

        // Render success details cleanly including the fetched image
        if (resultEl) {
            resultEl.innerHTML = `
                <div style="text-align: left; background: rgba(0,0,0,0.3); padding: 1.5rem; border-radius: 8px; margin-top: 1rem; border-left: 4px solid #4ade80;">
                    <h3 style="color: #4ade80; margin-top: 0; margin-bottom: 1rem;">â Valid Soulbound Certificate</h3>
                    <p style="margin: 0.5rem 0;"><strong>Student Name:</strong> ${studentName}</p>
                    <p style="margin: 0.5rem 0;"><strong>Roll Number:</strong> ${rollNumber}</p>
                    <p style="margin: 0.5rem 0;"><strong>Degree:</strong> ${degree}</p>
                    <p style="margin: 0.5rem 0;"><strong>Class of:</strong> ${year}</p>
                    <p style="margin: 0.5rem 0;"><strong>Issued On:</strong> ${issueDate}</p>
                    <p style="margin: 0.5rem 0;"><strong>Current Wallet:</strong> <span style="font-size: 0.85em; word-break: break-all; color: var(--accent);">${currentHolder}</span></p>
                    <p style="margin: 0.5rem 0;"><strong>Token ID:</strong> ${tokenIdInput}</p>
                    ${metadataHtml}
                </div>
            `;
            resultEl.className = "result success";
        }

        // Generate QR Code containing the verification data
        if (qrcodeEl) {
            const verificationData = JSON.stringify({
                contract: CONTRACT_ADDRESS,
                tokenId: tokenIdInput,
                student: studentName,
                degree: degree
            });

            qrcodeEl.style.display = "flex";
            new QRCode(qrcodeEl, {
                text: verificationData,
                width: 150,
                height: 150,
                colorDark : "#0f2027",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        }

    } catch (error) {
        console.error("Verification Error:", error);
        if (resultEl) {
            // Check for common revert errors like Token doesn't exist
            let errMsg = error.reason || error.shortMessage || error.message;
            if (errMsg.includes("NonexistentToken") || errMsg.includes("revert")) {
                errMsg = "Certificate does not exist for this Token ID.";
            }
            resultEl.textContent = errMsg;
            resultEl.className = "result error";
        }
        if (qrcodeEl) qrcodeEl.style.display = "none";
    }
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {

    if (connectWalletBtn) connectWalletBtn.addEventListener("click", connectWallet);
    
    if (registerBtn) registerBtn.addEventListener("click", registerAadhaar);
    
    if (mintCertBtn) mintCertBtn.addEventListener("click", mintNFT);
    
    if (revokeCertBtn) revokeCertBtn.addEventListener("click", revokeCertificateFunction);
    
    if (verifyBtn) verifyBtn.addEventListener("click", verifyCertificate);
    
    // NEW: Dashboard event listener
    const loadCertificatesBtn = document.getElementById("loadCertificatesBtn");
    if (loadCertificatesBtn) loadCertificatesBtn.addEventListener("click", renderStudentDashboard);
});

// --- NEW OVERHAULED DASHBOARD LOGIC ---
async function renderStudentDashboard() {
    console.log("Loading dashboard...");
    const gridEl = document.getElementById("certificatesGrid");
    const statusEl = document.getElementById("dashboardStatus");
    if (!gridEl || !contract) return;

    statusEl.className = "status";
    statusEl.textContent = "Scanning blockchain for your secure tokens...";
    gridEl.innerHTML = ""; 

    try {
        const userAddress = await signer.getAddress();
        
        // 1. Fetch exactly WHICH massive IDs the student owns directly from mapping!
        const ownedTokens = await contract.getTokensByStudent(userAddress);
        
        if (!ownedTokens || ownedTokens.length === 0) {
            statusEl.textContent = "No certificates found for this wallet yet.";
            return;
        }

        statusEl.textContent = `Found ${ownedTokens.length} secure token(s)! Retrieving data...`;

        // 2. Loop through the massive IDs to fetch their visual data
        for (let i = 0; i < ownedTokens.length; i++) {
            const tokenIdNum = ownedTokens[i];
            try {
                // Fetch full data using verify function
                const certData = await contract.verifyCertificate(tokenIdNum);
                const studentName = certData[0];
                const degree = certData[2];
                const issueDate = new Date(Number(certData[4]) * 1000).toLocaleDateString();
                const isValid = certData[6];

                // Build simple card
                const card = document.createElement("div");
                card.style.background = "rgba(0, 0, 0, 0.4)";
                card.style.padding = "1.5rem";
                card.style.borderRadius = "8px";
                card.style.borderLeft = isValid ? "4px solid #4ade80" : "4px solid #f87171";
                card.style.textAlign = "left";

                card.innerHTML = `
                    <h3 style="margin-top: 0; color: ${isValid ? '#4ade80' : '#f87171'}">${isValid ? 'â Valid' : 'â Revoked'}</h3>
                    <h2 style="margin: 0.5rem 0;">${studentName}</h2>
                    <p style="margin: 0.2rem 0; color: var(--text-light);">${degree}</p>
                    <p style="margin: 0.2rem 0; font-size: 0.85em;">Issued: ${issueDate}</p>
                    <div style="margin-top: 1rem; background: rgba(0,0,0,0.5); padding: 0.8rem; border-radius: 6px;">
                        <span style="font-size: 0.8rem; color: #a1a1aa; display: block; margin-bottom: 0.3rem;">SECURE TOKEN ID:</span>
                        <strong style="color: var(--accent); letter-spacing: 1px; font-size: 1.1em; user-select: all; display: block; word-break: break-all;">${tokenIdNum.toString()}</strong>
                    </div>
                `;
                gridEl.appendChild(card);

            } catch (e) {
                console.warn(`Failed to fetch details for Token ${tokenIdNum}`, e);
            }
        }
        
        statusEl.textContent = "";

    } catch (e) {
        console.error("Dashboard error:", e);
        statusEl.textContent = "Failed to load dashboard from blockchain.";
        statusEl.className = "status error";
    }
}


