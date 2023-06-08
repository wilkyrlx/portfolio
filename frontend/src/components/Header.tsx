import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
            <h1>test</h1>
            <div className="flex space-x-2">
                <a href="#" className="text-lg w-9 h-9 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center border ring-blue-500 focus:ring-2 focus:outline-none">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </header>
    );
}

export default Header;
