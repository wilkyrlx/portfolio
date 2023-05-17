import IProject from '@/types/IProject';
import projects from '../data/projects.json' assert { type: 'json' };
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projects grid gap-5 mx-auto md:grid-cols-3 lg:max-w-none">
                {
                    projects.projects.map((projectData: IProject) => {
                        return (
                            <ProjectCard {...projectData} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;