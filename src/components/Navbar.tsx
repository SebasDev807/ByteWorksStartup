import { useNavbar } from '../hooks/useNavbar';
import { NavLinkItem } from './NavLinkItems';
import ToggleButton from './ToggleButton';

export default function Navbar() {

    const { isMenuOpen, handleOpenNavbar } = useNavbar();

    return (
        <header className="header">
            <h1 className="logo">ByteWorks</h1>

            <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
                <NavLinkItem text="Home" path='hero-section' />
                <NavLinkItem text="About Us" path='about-us-section' />
                <NavLinkItem text="Services" path='services-section'/>
                <NavLinkItem text="Contact" path='form-section'/>
            </nav>

            <ToggleButton openNavbar={handleOpenNavbar} isOpen={isMenuOpen} />
        </header>
    );
}