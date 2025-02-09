import PortfolioCard from "@/components/PortfolioCard";
import { skills, skillsByName } from "@/data/skills";
const DroneCard = () => {
    const tags = [skillsByName['Python'], skillsByName['ROS'], skillsByName['OpenCV']]
    return (
        <PortfolioCard title="Autonomous Drone" imageSrc="/project/drone/drone.jpg" portfolioType="project" tags={tags}>
            <p>This is the description for Portfolio Item 1</p>
        </PortfolioCard>
    )
}

export default DroneCard;