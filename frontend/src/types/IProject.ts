
interface IProject {
    id: number;
    name: string;           // Project name
    img: string;            // Image path
    description: string;    
    githubUrl: string;
    demoUrl?: string;       // Optional demo url/alternate url
    tags: string[];
}

export default IProject;