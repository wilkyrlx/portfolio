import IProject from "../types/IProject";
import Image from 'next/image';


function ProjectCard({ ...project }: IProject) {
    return (
        <div className="card" key={project.id}>
            <div className="tab-header">
                <Image src="/images/sports.jpg" alt="" width={100} height={100} />
            </div>
                <h2 className="ml-10 text-xl font-bold text-gray-800">{project.name}</h2>
                <p className="ml-10 text-gray-500">{project.description}</p>           
        </div>
    );
}

export default ProjectCard;
