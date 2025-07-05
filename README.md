# 🐾 Fundraising DApp Exercise

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/web3exercise/fundraising-dapp-exercise)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Stacks](https://img.shields.io/badge/Stacks-Blockchain-orange)](https://stacks.co/)

**Project Name:** Fundraising DApp Exercise
**Project Description:** A decentralized fundraising platform built on Stacks blockchain for animal shelter construction projects, featuring transparent donation tracking and community engagement tools
**Repository URL:** https://github.com/web3exercise/fundraising-dapp-exercise

**Technologies Used:**
- Stacks Blockchain
- Clarity Smart Contracts
- Next.js/React
- Tailwind CSS
- Stacks.js
- Lucide React Icons

**Key Features:**
- Transparent Fundraising: All donations tracked on Stacks blockchain with full transparency
- Animal Adoption Gallery: Showcase animals awaiting new homes with detailed profiles
- Shelter Capacity Meter: Real-time tracking of current vs target shelter capacity
- Volunteer Schedule: Community volunteer coordination and time slot management
- Construction Progress Tracker: Visual updates on building milestones and progress
- Success Stories: Celebrate adoption achievements and community impact

**Smart Contracts:**
- fundraising-campaign.clar: Core fundraising logic and donation management
- milestone-tracker.clar: Construction progress and fund release milestones
- volunteer-coordinator.clar: Volunteer scheduling and community management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Stacks wallet (Hiro Wallet recommended)
- Clarinet CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/web3exercise/fundraising-dapp-exercise.git
cd fundraising-dapp-exercise
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
```

## 📖 Usage

### Making Donations
1. Connect your Stacks wallet
2. Browse the campaign details and animal gallery
3. Select donation amount
4. Confirm transaction through wallet

### Tracking Progress
- View construction milestones and completion percentage
- Monitor shelter capacity improvements
- Follow adoption success stories

## 🔧 Smart Contract Functions

### fundraising-campaign.clar
- `donate(amount)`: Make a donation to the shelter construction fund
- `get-campaign-info()`: Retrieve campaign target, current amount, and deadline
- `withdraw-funds(recipient)`: Withdraw funds for construction (admin only)

### milestone-tracker.clar
- `update-progress(milestone-id, completion-percentage)`: Update construction progress
- `release-milestone-funds(milestone-id)`: Release funds for completed milestones
- `get-milestone-status(milestone-id)`: Check milestone completion status

## 🏗️ Deployment

### Testnet
```bash
clarinet deploy --testnet
npm run build
```

### Mainnet
```bash
clarinet deploy --mainnet
npm run build
npm run start
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Smart contract tests
clarinet test

# Frontend tests
npm run test:frontend
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Stacks Foundation for blockchain infrastructure
- Hiro Systems for developer tools
- Animal shelter community for inspiration

---

<div align="center">
  <p>🐾 Building Hope for Our Furry Friends 🐾</p>
  <p>Made with ❤️ for animal welfare</p>
</div>
