import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const LocalDexCard = () => {
    const tags = [skillsByName['TypeScript'], skillsByName['MongoDB']]
    return (
        <PortfolioCard title="LocalDex" imageSrc="/project/localDex/LocalDex.png" portfolioType="project" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default LocalDexCard;