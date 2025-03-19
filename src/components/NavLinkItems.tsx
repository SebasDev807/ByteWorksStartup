interface NavLinkProps {
    text: string;
}


export const NavLinkItems: React.FC<NavLinkProps> = ({ text }) => {
    return (
        <li>
            <button className="nav-link">
                { text }
            </button>
        </li>
    )
}
