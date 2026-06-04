const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();

pptx.layout = 'LAYOUT_WIDE';

// Theme colors
const colorBg = '0F172A'; // Slate 900
const colorText = 'F8FAFC'; // Slate 50
const colorAccent = '3B82F6'; // Blue 500
const colorSecondary = '94A3B8'; // Slate 400

pptx.defineSlideMaster({
    title: 'MASTER_SLIDE',
    background: { color: colorBg },
    objects: [
        { rect: { x: 0, y: 0, w: '100%', h: 0.1, fill: { color: colorAccent } } },
        { rect: { x: 0, y: '95%', w: '100%', h: 1, fill: { color: colorAccent } } },
        { text: { text: "Academic Certificate NFT Platform", options: { x: '5%', y: '96%', w: '40%', h: '3%', fontSize: 10, color: 'FFFFFF', align: 'left' } } }
    ]
});

// Slide 1: Title
let slide1 = pptx.addSlide();
slide1.background = { color: colorBg };
slide1.addText('Academic Certificate NFT', { x: 1, y: 2.2, w: 8.66, h: 1, fontSize: 48, color: colorAccent, bold: true, align: 'center' });
slide1.addText('A Soulbound Web3 Solution for Credential Verification', { x: 1, y: 3.3, w: 8.66, h: 0.8, fontSize: 24, color: colorText, align: 'center' });
slide1.addText('Built with Solidity, Hardhat, and ethers.js', { x: 1, y: 6.5, w: 8.66, h: 0.5, fontSize: 14, color: colorSecondary, align: 'center' });

// Slide 2: Problem Statement
let slide2 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide2.addText('The Problem', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide2.addText('Current Challenges in Academic Credentials', { x: 0.5, y: 1.3, w: 9, h: 0.5, fontSize: 18, color: colorSecondary, italic: true });
slide2.addText([
    { text: 'Traditional certificates are prone to forgery and fraud.' },
    { text: 'Verifying credentials is time-consuming and manual for employers.' },
    { text: 'Physical copies can be easily lost, damaged, or destroyed.' },
    { text: 'Digital PDFs are easily altered and lack true verifiability.' }
], { x: 0.8, y: 2.2, w: 8.5, h: 3.5, fontSize: 24, color: colorText, bullet: true, lineSpacing: 40 });

// Slide 3: The Solution
let slide3 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide3.addText('The Soulbound Solution', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide3.addText('Bringing Credentials On-Chain', { x: 0.5, y: 1.3, w: 9, h: 0.5, fontSize: 18, color: colorSecondary, italic: true });
slide3.addText([
    { text: 'Issue academic certificates as Soulbound NFTs on Blockchain.' },
    { text: 'Immutable and permanently linked to the student\'s wallet.' },
    { text: 'Non-transferable (Soulbound lock prevents selling or trading).' },
    { text: 'Instant, transparent, and trustless public verification.' }
], { x: 0.8, y: 2.2, w: 8.5, h: 3.5, fontSize: 24, color: colorText, bullet: true, lineSpacing: 40 });

// Slide 4: Key Platform Features
let slide4 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide4.addText('Platform Features', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide4.addText([
    { text: 'KYC Integration', options: { bold: true, fontSize: 24, color: colorAccent } },
    { text: 'Uses Aadhaar Hash to anonymously link wallets to verified identities.', options: { lineSpacing: 25, fontSize: 20 } },
    { text: ' ', options:{ fontSize: 10 } },
    { text: 'Secure Randomized Token IDs', options: { bold: true, fontSize: 24, color: colorAccent } },
    { text: 'Pseudo-random 10-digit IDs prevent enumeration of students & certificates.', options: { lineSpacing: 25, fontSize: 20 } },
    { text: ' ', options:{ fontSize: 10 } },
    { text: 'Admin Revocation', options: { bold: true, fontSize: 24, color: colorAccent } },
    { text: 'Universities retain the ability to revoke certificates if issued by mistake.', options: { lineSpacing: 25, fontSize: 20 } }
], { x: 0.8, y: 1.8, w: 8.5, h: 5, color: colorText });

// Slide 5: Tech Stack
let slide5 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide5.addText('Technology Stack', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide5.addText([
    { text: 'Smart Contracts: Solidity 0.8+ (ERC721, Ownable, URIStorage)' },
    { text: 'Development Environment: Hardhat framework' },
    { text: 'Frontend: HTML, CSS Vanilla Web Stack' },
    { text: 'Blockchain Interaction: ethers.js v6' },
    { text: 'Wallet Authentication: MetaMask Provider' }
], { x: 0.8, y: 2.2, w: 8.5, h: 3.5, fontSize: 24, color: colorText, bullet: { type: 'square' }, lineSpacing: 35 });

// Slide 6: DApp Ecosystem
let slide6 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide6.addText('DApp Ecosystem', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide6.addText([
    { text: 'Administrator Portal (admin.html)', options: { bold: true, fontSize: 24, color: 'E2E8F0' } },
    { text: 'Secure minting interface for owners. Features certificate revocation.', options: { lineSpacing: 25, fontSize: 20 } },
    { text: ' ', options:{ fontSize: 10 } },
    { text: 'Student Dashboard (student.html)', options: { bold: true, fontSize: 24, color: 'E2E8F0' } },
    { text: 'Aadhaar registration, real-time view of owned soulbound degrees.', options: { lineSpacing: 25, fontSize: 20 } },
    { text: ' ', options:{ fontSize: 10 } },
    { text: 'Verification Portal (verify.html)', options: { bold: true, fontSize: 24, color: 'E2E8F0' } },
    { text: 'Public-facing verifier for employers using the 10-digit specific ID.', options: { lineSpacing: 25, fontSize: 20 } }
], { x: 0.8, y: 1.8, w: 8.5, h: 5, color: colorText });

// Slide 7: Conclusion
let slide7 = pptx.addSlide({ masterName: 'MASTER_SLIDE' });
slide7.addText('Conclusion', { x: 0.5, y: 0.5, w: 9, h: 1, fontSize: 36, color: colorAccent, bold: true });
slide7.addText([
    { text: 'Provides a cryptographically secure verification method.' },
    { text: 'Restores trust in global academic qualifications.' },
    { text: 'Streamlines the hiring and background check process.' },
    { text: 'Empowers students with immutable, permanent proof of achievement.' }
], { x: 0.8, y: 2.2, w: 8.5, h: 3.5, fontSize: 24, color: colorText, bullet: { code: '2713' }, lineSpacing: 35 });

pptx.writeFile({ fileName: 'Academic_Certificate_NFT_Presentation.pptx' })
    .then(fileName => {
        console.log(`Successfully created presentation: ${fileName}`);
    })
    .catch(err => {
        console.error('Error generating PPT:', err);
    });
