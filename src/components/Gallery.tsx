import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/gallery.css';

import gallery1 from '../assets/images/work/work1.jpeg';
import gallery2 from '../assets/images/work/work2.jpeg';
import gallery3 from '../assets/images/work/work3.jpeg';
import gallery4 from '../assets/images/work/work4.jpeg';
import gallery5 from '../assets/images/work/work5.jpeg';
import gallery6 from '../assets/images/work/work6.jpeg';
import gallery7 from '../assets/images/work/work7.jpeg';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
    id: number;
    title: string;
    image: string;
}

const galleryImages: GalleryImage[] = [
    { id: 1, title: 'Campaign 1', image: gallery1 },
    { id: 2, title: 'Campaign 2', image: gallery2 },
    { id: 3, title: 'Campaign 3', image: gallery3 },
    { id: 4, title: 'Campaign 4', image: gallery4 },
    { id: 5, title: 'Campaign 5', image: gallery5 },
    { id: 6, title: 'Campaign 6', image: gallery6 },
    { id: 7, title: 'Campaign 7', image: gallery7 },
];

const Gallery = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!trackRef.current || !containerRef.current) return;

        const track = trackRef.current;
        const container = containerRef.current;

        const ctx = gsap.context(() => {

            const totalWidth = track.scrollWidth;
            const containerWidth = container.offsetWidth;
            const distance = totalWidth - containerWidth;

            gsap.to(track, {
                x: -distance,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',        
                    end: `+=${distance}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section className="gallery" ref={containerRef}>
            <div className="gallery-header">
                <h2 className="gallery-title">Our Work</h2>
                <p className="gallery-subtitle">
                    Explore our portfolio of successful campaigns
                </p>
            </div>

            <div className="gallery-track" ref={trackRef}>
                {galleryImages.map((image) => (
                    <div key={image.id} className="gallery-image-wrapper">
                        <img
                            src={image.image}
                            alt={image.title}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;