import misc from '../data/misc.json' assert { type: 'json' };
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-blue-100 text-white">
            <h1>test</h1>
            <div className="space-x-1.5 flex items-center">
                <a href={misc.links.github} className="text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
                    <FontAwesomeIcon icon={faGithub} style={{ color: "black" }} />
                </a>
                <a href={misc.links.linkedin} className="text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "black" }} />
                </a>
            </div>
        </header>
    );
}

export default Header;
