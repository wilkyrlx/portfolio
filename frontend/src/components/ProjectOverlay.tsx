import IProject from "@/types/IProject";
import projects from '../data/projects.json' assert { type: 'json' };
import Image from 'next/image';

/**
 * Opens the project overlay. This function is called when a project card is clicked.
 * Initially, the overlay is collapsed. When the overlay is expanded, the entire background is blurred.
 */
function ProjectOverlay({ ...project }: IProject) {
    return (
        <div className="overlay collapse" key={project.id} id={"project-overlay-" + project.id}>
            <div className="tab-header">
                <Image src="/images/sports.jpg" alt="" width={100} height={100} />
            </div>
            <h2 className="ml-10 text-xl font-bold text-gray-800">{project.name}</h2>
            <p className="ml-10 text-gray-500">{project.description}</p>
            <p>test</p>
        </div>
    );
}

function Overlays() {
    return (
        <div>
            {
                projects.projects.map((projectData: IProject) => {
                    return (
                        <div>
                            <ProjectOverlay {...projectData} />
                        </div>
                    )
                })
            }
        </div>
    );
}


export default Overlays;