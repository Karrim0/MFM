import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import "../styles/navnar.css";
import logo from "../assets/images/لوجو/لوجو.webp";

interface NavLinkItem {
    to: string;
    label: string;
    variant?: "default" | "cta";
}

const navLinks: NavLinkItem[] = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/events", label: "Events" },
    { to: "/news", label: "News" },
    { to: "/white-paper", label: "White Paper" },
    { to: "/contact", label: "Contact", variant: "cta" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMobileMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        if (isMobileMenuOpen && window.innerWidth <= 992) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflow;
        }

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((currentState) => !currentState);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`mfm-navbar${isScrolled ? " is-scrolled" : ""}`}
            >
                <div className="mfm-nav-container">
                    <NavLink
                        to="/"
                        className="mfm-nav-brand"
                        aria-label="MFM Egypt home"
                        onClick={closeMobileMenu}
                    >
                        <img
                            src={logo}
                            alt="MFM Egypt"
                            className="mfm-nav-logo"
                        />
                    </NavLink>

                    <nav
                        className="mfm-desktop-navigation"
                        aria-label="Main navigation"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) => {
                                    const classes = ["mfm-nav-link"];

                                    if (isActive) {
                                        classes.push("is-active");
                                    }

                                    if (link.variant === "cta") {
                                        classes.push("mfm-nav-link--cta");
                                    }

                                    return classes.join(" ");
                                }}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="mfm-mobile-toggle"
                        onClick={toggleMobileMenu}
                        aria-label={
                            isMobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mfm-mobile-navigation"
                    >
                        {isMobileMenuOpen ? (
                            <X size={23} strokeWidth={2} />
                        ) : (
                            <Menu size={24} strokeWidth={2} />
                        )}
                    </button>
                </div>

                <div
                    id="mfm-mobile-navigation"
                    className={`mfm-mobile-menu${
                        isMobileMenuOpen ? " is-open" : ""
                    }`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <div className="mfm-mobile-menu-clip">
                        <nav
                            className="mfm-mobile-menu-panel"
                            aria-label="Mobile navigation"
                        >
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === "/"}
                                    tabIndex={isMobileMenuOpen ? 0 : -1}
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) => {
                                        const classes = [
                                            "mfm-mobile-nav-link",
                                        ];

                                        if (isActive) {
                                            classes.push("is-active");
                                        }

                                        if (link.variant === "cta") {
                                            classes.push(
                                                "mfm-mobile-nav-link--cta"
                                            );
                                        }

                                        return classes.join(" ");
                                    }}
                                >
                                    <span>{link.label}</span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <button
                type="button"
                className={`mfm-nav-backdrop${
                    isMobileMenuOpen ? " is-open" : ""
                }`}
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
                tabIndex={isMobileMenuOpen ? 0 : -1}
            />
        </>
    );
};

export default Navbar;