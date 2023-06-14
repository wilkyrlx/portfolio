import IProject from "@/types/IProject";
import projects from '../data/projects.json' assert { type: 'json' };
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import IconButton from "./IconButton";




// unblur the entire background, hide the overlay
// TODO: use react state for this to remove bugs
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
    return (
        <div className="overlay project-box collapse" key={project.id} id={"project-overlay-" + project.id}>
            <div className="w-80% h-70% bg-gray-200 rounded-lg flex flex-col">
                <div className="relative flex justify-end">
                    <button onClick={() => closeOverlay(project.id)} className="absolute top-2 right-2 w-10 h-10 bg-white rounded-full"></button>
                </div>
                <div className="rounded-t-lg bg-gray-300">
                    <img src={"/images/" + project.img} className="w-full h-96 object-cover object-center rounded-t-lg" alt="" />
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-2">
                        { /* conditionally render the links */ }
                        { project.githubUrl && <IconButton icon={faGithub} link={project.githubUrl} /> }
                        { project.demoUrl && <IconButton icon={faLink} link={project.demoUrl} /> }
                    </div>
                    <p className="mt-4">Some text goes here...</p>
                </div>
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