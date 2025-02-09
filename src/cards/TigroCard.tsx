import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const TigroCard = () => {
    const tags = [skillsByName['Kotlin'], skillsByName['Android Studio']]
    return (
        <PortfolioCard title="tigro" imageSrc="/project/tigro/tigro.png" portfolioType="research" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default TigroCard;