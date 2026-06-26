import { useState, useEffect } from 'react';
import Navbar from "../components/layout/Navbar";
import HomeHero from '../components/home/HomeHero';
import PopularCharacters from "../components/home/PopularCharacters";

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
                <>
                    <PopularCharacters />
                    <h2 className="text-5xl">To be continued..</h2>
                </>
            )}
        </div>
    );

};

export default Home;