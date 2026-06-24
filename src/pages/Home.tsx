import { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import HomeHero from '../components/home/HomeHero';

const Home = () => {

    const [introFinished, setIntroFinished] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('hasSeenNarutoIntro') === 'true') {
            setIntroFinished(true);
        }
    }, []);

    const handleIntroFinish = () => {
        setIntroFinished(true);
        localStorage.setItem('hasSeenNarutoIntro', 'true');
    }

    return (
        <div>
            {introFinished && <Navbar />}

            <HomeHero onIntroFinish={handleIntroFinish} />

            {introFinished && (
                <div className="opacity-0 animate-fade-in">
                    <div className="h-screen bg-gray-950 flex items-center justify-center">
                        <h2 className="text-5xl">To be continued...</h2>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Home;