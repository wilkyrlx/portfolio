import IProject from '@/types/IProject';
import projects from '../data/projects.json' assert { type: 'json' };
import ProjectTab from './ProjectTab';

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            {
                projects.projects.map((projectData: IProject) => {
                    return (
                        <ProjectTab {...projectData} />
                    )
                })
            }
        </div>
    )
}

export default Projects;