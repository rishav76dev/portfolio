import { Project } from "@/types/project";
import ProjectCard from "@/app/projects/components/ProjectCard";

const AddOnProjects = () => {
  return (
    <div className="w-full h-fit px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-8 max-sm:mt-4 pb-8">
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-0 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default AddOnProjects;

const data: Project[] = [
  {
    title: "Automated Market Maker",
    description:
      "A decentralized liquidity pool program that enables token swaps, deposits, and withdrawals using a constant product AMM curve on Solana",
    techStack: [],
    source: "https://github.com/rishav76dev/anchor-amm",
  },
  {
    title: "Escrow",
    description:
      "A Solana-based escrow smart contract that securely locks and swaps tokens between two users without intermediaries, ensuring atomic and trustless exchanges.",
    techStack: [],
    source: "https://github.com/rishav76dev/escrow",
  },
  {
    title: "NFT Marketplace",
    description:
      "A decentralized on-chain NFT marketplace on Solana that securely handles NFT listings, purchases, and delistings through PDAs — ensuring transparent, trustless, and automated trading",
    techStack: [],
    source: "https://github.com/rishav76dev/marketplace",
  },
  {
    title: "NFT Staking",
    description:
      "A decentralized NFT staking protocol built on Solana using the Anchor framework . It allows users to stake NFTs from verified collections to earn reward tokens over time. The program ensures on-chain freezing, locking, and reward distribution in a secure, trustless manner.",
    techStack: [],
    source: "https://github.com/rishav76dev/nft-staking",
  },
  {
    title: "Lending Protocol",
    description:
      "This program implements a decentralized lending and borrowing system on Solana using the Anchor framework. It allows users to deposit, borrow, repay, withdraw, and liquidate assets in a trustless, on-chain environment — similar to Aave or Compound, but powered by SPL tokens and Pyth oracles for real-time pricing.",
    techStack: [],
    source: "https://github.com/rishav76dev/lending",
  },
];
