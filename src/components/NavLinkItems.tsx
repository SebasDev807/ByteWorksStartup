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
                smooth={true}    // 🔹 Scroll suave
                duration={1000}   // 🔹 Velocidad de animación
                spy={true}       // 🔹 Detecta la sección activa
                offset={-80}     // 🔹 Ajusta si hay un navbar fijo
                activeClass="active"
                onSetActive={(c) => console.log({ c })}
            >
                {text}
            </Link>
        </li>
    );
};
