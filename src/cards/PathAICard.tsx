import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const PathAICard = () => {
    const tags = [skillsByName['Python'], skillsByName['NumPy'], skillsByName['Pandas']]
    return (
        <PortfolioCard title="PathAI Intern" imageSrc="/project/pathAI/pathAI.png" portfolioType="internship" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default PathAICard;