import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/clients.css';

// Import client logos from local assets
import client1 from '../assets/images/clients/client1.png';
import client2 from '../assets/images/clients/client2.jpeg';
import client3 from '../assets/images/clients/clent3.jpeg';


gsap.registerPlugin(ScrollTrigger);

interface ClientLogo {
    id: number;
    name: string;
    logo: string;
}

const clientsData: ClientLogo[] = [
    { id: 1, name: 'Client 1', logo: client1 },
    { id: 2, name: 'Client 2', logo: client2 },
    { id: 3, name: 'Client 3', logo: client3 },
];

const Clients = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            const items = trackRef.current?.querySelectorAll('.client-logo-item');

            if (items) {
                gsap.fromTo(
                    items,
                    { opacity: 0, scale: 0.8 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'back.out(1.7)',
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: trackRef.current,
                            start: 'top center+=100',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="clients">
            <div className="clients-container" ref={containerRef}>
                <h2 ref={titleRef} className="clients-title">Our Clients</h2>

                <p ref={subtitleRef} className="clients-subtitle">
                    Trusted by leading brands across the region
                </p>

                <div className="clients-track" ref={trackRef}>
                    {clientsData.map((client) => (
                        <div key={client.id} className="client-logo-item">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="client-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;