import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu } from 'lucide-react';
import '../styles/navnar.css';
import logo from '../assets/images/لوجو/لوجو.webp';

interface NavLinkItem {
    to: string;
    label: string;
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const navLinks: NavLinkItem[] = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/events', label: 'Events' },
        { to: '/news', label: 'News' },
        { to: '/white-paper', label: 'White Paper' },
        { to: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!mobileMenuRef.current) return;

        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">

                {/* Logo Left */}
                <div className="navbar-logo-container">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Logo"
                            className="navbar-logo"
                        />
                    </NavLink>
                </div>

                {/* Desktop Links Right */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active' : ''}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <Menu size={26} color="#000000" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div ref={mobileMenuRef} className="mobile-menu">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `mobile-nav-link ${isActive ? 'active' : ''}`
                        }
                        onClick={closeMobileMenu}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;