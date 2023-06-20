import misc from '../data/misc.json' assert { type: 'json' };
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IconButton from './IconButton';



function Header() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-blue-100 text-white pl-8 pr-8 md:pl-48 md:pr-48">
            <div></div>
            <div className="space-x-1.5 flex items-center">
                <IconButton icon={faGithub} link={misc.links.github} />
                <IconButton icon={faLinkedin} link={misc.links.linkedin} />
                <IconButton icon={faFile} link={misc.links.resume} width={25} />   
                <IconButton icon={faEnvelope} link={misc.links.email} />     
            </div>
        </header>
    );
}

export default Header;
