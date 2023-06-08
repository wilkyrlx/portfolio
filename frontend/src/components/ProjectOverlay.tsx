import IProject from "@/types/IProject";
import projects from '../data/projects.json' assert { type: 'json' };
import Image from 'next/image';

// unblur the entire background, hide the overlay
function closeOverlay(projectId: number) {
    const mainContent: HTMLElement = document.querySelector('#main-content') as HTMLElement;
    const overlay: HTMLElement | null = document.querySelector('#project-overlay-' + projectId.toString());
    if (!overlay) {
        console.error("Overlay not found on close");
        return;
    }
    mainContent.classList.remove('blur-sm');
    overlay.classList.add('collapse');
}

/**
 * Opens the project overlay. This function is called when a project card is clicked.
 * Initially, the overlay is collapsed. When the overlay is expanded, the entire background is blurred.
 * 
 * The overlay only shows relevant links. These can include
 * - GitHub
 * - Demo (could be youtube, hosted URL, etc.)
 */
function ProjectOverlay({ ...project }: IProject) {
    // TODO: should the title link be the github repo, or the demo?
    // TODO: title should change color on hover and be bigger
    // TODO: do buttons like this? 
    /*
    text-lg w-9 h-9 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex items-center justify-center border dark:bg-transparent dark:border-gray-300 dark:text-white ring-blue-500 focus:ring-2 focus:outline-none
     */
    return (
        <div className="overlay project-box collapse" key={project.id} id={"project-overlay-" + project.id}>
            <div className="tab-header">
                <Image src={"/images/" + project.img} alt="" width={100} height={100} />
                <div className="close-button w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer" onClick={event => closeOverlay(project.id)}>
                    <Image src="/icons/close.svg" alt="Close" width={20} height={20} className="w-14 h-14" />
                </div>
            </div>
            <a href={project.githubUrl}>
                <h2 className="ml-10 text-xl font-bold text-gray-800">{project.name}</h2>
            </a>
            <p className="ml-10 text-gray-500">{project.description}</p>
            <div className="project-links">
                {
                    project.hasOwnProperty("githubUrl") && 
                    <a href={project.githubUrl} target="_blank">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                            <Image src="/icons/github-logo.png" alt="GitHub" width={20} height={20} className="w-14 h-14" />
                        </div>
                    </a>
                }
                {
                    project.hasOwnProperty("demoUrl") && 
                    <a href={project.githubUrl} target="_blank">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                            <Image src="/icons/link.svg" alt="Demo" width={20} height={20} className="w-14 h-14" />
                        </div>
                    </a>                    
                }
            </div>
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