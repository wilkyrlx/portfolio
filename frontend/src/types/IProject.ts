
interface IProject {
    id: number;
    name: string;          
    img: string;            
    description: string;    
    githubUrl?: string;
    demoUrl?: string;       // Optional demo url/alternate url
    tags: string[];
}

export default IProject;