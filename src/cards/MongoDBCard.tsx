import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";

const MongoDBCard = () => {
    const tags = [skillsByName['C++'], skillsByName['MongoDB']]
    return (
        <PortfolioCard title="Cryptography Research Group" imageSrc="/project/mongoDB/mdb.png" portfolioType="internship" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default MongoDBCard;