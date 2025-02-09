import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const PovGlobeCard = () => {
    const tags = [skillsByName['C++']]
    return (
        <PortfolioCard title="POV Globe" imageSrc="/project/povGlobe/globe.jpg" portfolioType="project" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default PovGlobeCard;