import IProject from "../types/IProject";
import projects from '../data/projects.json' assert { type: 'json' };

function ProjectCard({ project, setCurrentOverlay }: { project: IProject, setCurrentOverlay: Function }) {
    return (
        <div className="card project-box rounded-lg" key={project.id} onClick={() => setCurrentOverlay(project.id)}>
            <div className="rounded-t-lg bg-gray-300">
                <img src={"/images/" + project.img} className="w-full h-36 object-cover object-center rounded-t-lg" alt="" />
            </div>
            <h2 className="mx-10 text-xl font-bold text-gray-800">{project.name}</h2>
            <p className="mx-10 text-gray-500">{project.description}</p>
        </div>
    );
}

function Projects({ setCurrentOverlay }: { setCurrentOverlay: Function }) {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects grid gap-5 mx-auto md:grid-cols-3 lg:max-w-none">
                {
                    projects.projects.map((projectData: IProject) => {
                        return (
                            <div>
                                <ProjectCard project={projectData} setCurrentOverlay={setCurrentOverlay} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Projects;