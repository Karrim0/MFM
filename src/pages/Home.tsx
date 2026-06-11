import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Philosophy from '../components/Philosophy';
import Gallery from '../components/Gallery';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import OurLatest from '../components/OurLatest';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <Hero />
            <About />
            <OurLatest />
            <Philosophy />
            <Gallery />
            <Clients />
            <Footer />
        </div>
    );
};

export default Home;
