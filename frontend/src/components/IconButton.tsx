import { IconDefinition, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

function IconButton({icon, link}: {icon: IconDefinition, link: any}) {
    return (
        <a href={link} className="text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
            <FontAwesomeIcon icon={icon} style={{ color: "black", width: 35 }} />
        </a>
    )
}

export default IconButton;