import misc from '../data/misc.json' assert { type: 'json' };
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import IconButton from './IconButton';



function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-blue-100 text-white pl-48 pr-48">
            <h1>test</h1>
            <div className="space-x-1.5 flex items-center">
                <IconButton icon={faGithub} link={misc.links.github} />
                <IconButton icon={faLinkedin} link={misc.links.linkedin} />
                <a href={misc.links.resume} className="text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
                    <FontAwesomeIcon icon={faFile} style={{ color: "black", width: 25 }} />
                </a>            
            </div>

        </header>
    );
}

export default Header;
