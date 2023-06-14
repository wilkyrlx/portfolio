import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function IconButton({icon, link, width}: {icon: IconDefinition, link: any, width?: number}) {
    const widthActual = width ? width : 35;
    return (
        <a href={link} className="text-lg w-14 h-14 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center ring-blue-500 focus:ring-2 focus:outline-none">
            <FontAwesomeIcon icon={icon} style={{ color: "black", width: widthActual }} />
        </a>
    )
}

export default IconButton;