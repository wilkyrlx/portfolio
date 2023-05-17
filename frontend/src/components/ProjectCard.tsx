import IProject from "../types/IProject";
import Image from 'next/image';
import projects from '../data/projects.json' assert { type: 'json' };

function openProject(projectId: number) {
    console.log("Opening project");

    // blur the entire background
    const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
    const overlay: HTMLElement = document.querySelector('#project-overlay-' + projectId.toString()) as HTMLElement;
    mainContent.classList.add('blur');
    overlay.classList.remove('collapse');
}

function ProjectCard({ ...project }: IProject) {
    return (
        <div className="card" key={project.id} onClick={event => openProject(project.id)}>
            <div className="tab-header">
                <Image src="/images/sports.jpg" alt="" width={100} height={100} />
            </div>
                <h2 className="ml-10 text-xl font-bold text-gray-800">{project.name}</h2>
                <p className="ml-10 text-gray-500">{project.description}</p>           
        </div>
    );
}

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects grid gap-5 mx-auto md:grid-cols-3 lg:max-w-none">
                {
                    projects.projects.map((projectData: IProject) => {
                        return (
                            <div>
                                <ProjectCard {...projectData} />
                            </div>
                        )
                    })
                }
                   
            </div>
        </div>
    )
}

export default Projects;