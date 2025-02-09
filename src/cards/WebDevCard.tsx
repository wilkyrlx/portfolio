import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const WebDevCard = () => {
    const tags = [skillsByName['React'], skillsByName['Node.js']]
    return (
        <PortfolioCard title="Web Development" imageSrc="/project/webDev/mash.png" portfolioType="project" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default WebDevCard;