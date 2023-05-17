import IProject from "../types/IProject";

function ProjectTab({...project}: IProject) {
    return (
        <div className="project-tab" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.githubUrl}</p>
            <p>{project.demoUrl}</p>
        </div>
    );
}

export default ProjectTab;
