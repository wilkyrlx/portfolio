import IProject from "@/types/IProject";
import projects from '../data/projects.json' assert { type: 'json' };
import Image from 'next/image';


function closeOverlay(projectId: number) {
    console.log("Closing project");

    // unblur the entire background
    const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
    const overlay: HTMLElement = document.querySelector('#project-overlay-' + projectId.toString()) as HTMLElement;
    mainContent.classList.remove('blur');
    overlay.classList.add('collapse');
}

/**
 * Opens the project overlay. This function is called when a project card is clicked.
 * Initially, the overlay is collapsed. When the overlay is expanded, the entire background is blurred.
 */
function ProjectOverlay({ ...project }: IProject) {
    return (
        <div className="overlay project-box collapse" key={project.id} id={"project-overlay-" + project.id}>
            <div className="tab-header">
                <Image src={"/images/" + project.img} alt="" width={100} height={100} />
                <div className="button" onClick={event => closeOverlay(project.id)}>
                    <Image src="/icons/close.svg" alt="Close" width={20} height={20} className="button-img" />
                </div>
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