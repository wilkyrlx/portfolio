import IProject from "../types/IProject";
import Image from 'next/image';


function ProjectTab({ ...project }: IProject) {
    return (
        <div className="card" key={project.id}>
            <div className="tab-header">
                <Image src="/images/sports.jpg" alt="" width={100} height={100} />
            </div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>{project.githubUrl}</p>
                <p>{project.demoUrl}</p>
            
        </div>
    );
}

export default ProjectTab;
