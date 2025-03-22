import { Link } from 'react-scroll';

interface NavLinkProps {
    text: string;
    path: string;
}

export const NavLinkItem: React.FC<NavLinkProps> = ({ text, path }) => {
    return (
        <li>
            <Link
                className="nav-link"
                to={path}
                smooth={true}    
                duration={1000}   
                spy={true}       
                offset={-80}     
                activeClass="active"
                onSetActive={(c) => console.log({ c })}
            >
                {text}
            </Link>
        </li>
    );
};
