import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import '../styles/footer.css';
import logo from '../assets/images/لوجو/لوجو2.webp';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const socialsRef = useRef<HTMLDivElement>(null);
    const copyrightRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // ✅ اللوجو ينزل بشكل احترافي بدون لف
        if (logoRef.current) {
            tl.fromTo(
                logoRef.current,
                {
                    y: -60,
                    opacity: 0,
                    scale: 0.9
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }

        // ✅ السوشيال تنزل بعدها بشوية
        if (socialsRef.current) {
            tl.fromTo(
                socialsRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out'
                },
                '-=0.5'
            );
        }

        // ✅ الكوبي رايت
        if (copyrightRef.current) {
            tl.fromTo(
                copyrightRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.8, ease: 'power2.out' },
                '-=0.3'
            );
        }
    }, []);

    return (
        <footer ref={footerRef} className="footer">
            <div className="footer-container">
                <img ref={logoRef} src={logo} alt="Logo" className="footer-logo" />

                <div ref={socialsRef} className="footer-socials">
                    <a href="#" className="social-link" aria-label="Facebook">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="social-link" aria-label="Email">
                        <Mail size={24} />
                    </a>
                </div>

                <p ref={copyrightRef} className="footer-copyright">
                    &copy; {new Date().getFullYear()} Marketing Facility Management. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;