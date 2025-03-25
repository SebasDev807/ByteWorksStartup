import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>

            <div className='footer-info'>

                <div className="footer-section">
                    <h5>QUICK LINKS</h5>
                    <ul className="footer-items">

                        <li>

                            <Link
                                className="footer-item quick-link"
                                to='hero-section'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                className="footer-item quick-link"
                                to='about-us-section'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                About Us
                            </Link>

                        </li>
                        <li>
                            <Link
                                className="footer-item quick-link"
                                to='services-section'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                               Services
                            </Link>

                        </li>
                        
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>ADDRESS</h5>
                    <p>Popayán, Cauca, Colombia</p>
                </div>

                <div className="footer-section">
                    <h5>CONTACT</h5>
                    <p>+57 314 787 5028</p>
                    <p>email@example.com</p>
                </div>

                <div className="footer-section">
                    <h5>FOLLOW US</h5>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn /></a>
                        <a href="#" className="social-icon"><FaGithub /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 - Byteworks. All Rights Reserved.</p>
            </div>

        </footer>
    );
}
