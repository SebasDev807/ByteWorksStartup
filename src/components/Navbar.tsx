import { useNavbar } from '../hooks/useNavbar';
import { NavLinkItems } from './NavLinkItems';
import ToggleButton from './ToggleButton';

export default function Navbar() {
   
 const {isMenuOpen, handleOpenNavbar} = useNavbar();

    return (
        <header className="header">
            <h1 className="logo">ByteWorks</h1>

            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <NavLinkItems text="Home" />
                <NavLinkItems text="Services" />
                <NavLinkItems text="About Us" />
                <NavLinkItems text="Contact" />
            </nav>

            <ToggleButton openNavbar={handleOpenNavbar} isOpen={isMenuOpen}/>
        </header>
    );
}