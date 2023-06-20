import IProject from "@/types/IProject";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";







/**
 * Opens the project overlay. This function is called when a project card is clicked.
 * Initially, the overlay is collapsed. When the overlay is expanded, the entire background is blurred.
 * 
 * The overlay only shows relevant links. These can include
 * - GitHub
 * - Demo (could be youtube, hosted URL, etc.)
 */
function ProjectOverlay({ project, setCurrentOverlay }: { project: IProject, setCurrentOverlay: Function }) {
    // TODO: should the title link be the github repo, or the demo?
    // TODO: title should change color on hover and be bigger
    return (
        <div className="overlay project-box" key={project.id} id={"project-overlay-" + project.id}>
            <div className="w-80% h-70% bg-gray-200 rounded-lg flex flex-col">
                <div className="relative flex justify-end">
                    <button onClick={() => setCurrentOverlay(-1)} className="absolute top-2 right-2 bg-white text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
                    items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: "black", width: 35 }} />
                    </button>
                </div>
                <div className="rounded-t-lg bg-gray-300">
                    <img src={"/images/" + project.img} className="w-full h-96 object-cover object-center rounded-t-lg" alt="" />              
                </div>
                <div className="p-4">
                    <div className="flex items-center space-x-2">
                        { /* conditionally render the links */}
                        {project.githubUrl && <IconButton icon={faGithub} link={project.githubUrl} />}
                        {project.demoUrl && <IconButton icon={faLink} link={project.demoUrl} />}
                    </div>
                    <p className="mt-4">Some text goes here...</p>
                </div>
            </div>
        </div>
    );
}


export default ProjectOverlay;