import {useRef, useEffect, useState} from "react";
import NarutoFight1 from '../../assets/videos/naruto-part-one.mp4'
import NarutoFight2 from '../../assets/videos/naruto-part-two.mp4'
import SkipButton from "../../assets/buttons/skip.svg";

type Props = { onIntroFinish: () => void; };

export default function HomeHero({ onIntroFinish }: Props) {
    const [isLooping, setIsLooping] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (localStorage.getItem('hasSeenNarutoIntro') === 'true') {
            setIsLooping(true);
        }
    }, []);

    const skipIntro = () => {
        setIsLooping(true);
        onIntroFinish();
    }

    const handleFirstVideoEnd = () => {
        setIsLooping(true);
        onIntroFinish();
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Intro */}
            {!isLooping && (
                <>
                    <video
                        ref={videoRef}
                        src={NarutoFight1}
                        autoPlay muted playsInline
                        onEnded={handleFirstVideoEnd}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Skip Button */}
                    <button
                        onClick={skipIntro}
                        className="flex items-center gap-2 absolute bottom-8 right-8 z-50 px-6 py-3  bg-black/70 hover:bg-black text-white rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
                    >
                        <img src={SkipButton} alt="Skip" className="w-5 h-5" />
                    </button>
                </>
            )}

            {/* Content */}
            {isLooping && (
                <>
                    <video
                        src={NarutoFight2}
                        autoPlay muted loop playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 flex justify-center z-30 animate-fade-in-up">
                        {/*<div className="max-w-lg text-center">*/}
                        {/*    <h1*/}
                        {/*        className="*/}
                        {/*            text-6xl md:text-7xl*/}
                        {/*            font-black tracking-widest*/}
                        {/*            text-white*/}
                        {/*            mb-6 leading-none*/}
                        {/*            flex items-center gap-2*/}
                        {/*            narutodex-outline*/}
                        {/*          "*/}
                        {/*    >*/}
                        {/*        NARUT*/}
                        {/*        <img*/}
                        {/*            src={Byakugan}*/}
                        {/*            alt="Byakugan"*/}
                        {/*            className="w-12 h-12 inline-block translate-y-1"*/}
                        {/*        />*/}
                        {/*        DEX*/}
                        {/*    </h1>*/}

                        {/*    <p*/}
                        {/*        className="*/}
                        {/*        text-2xl md:text-3xl*/}
                        {/*        font-archivo font-bold*/}
                        {/*        text-orange-400*/}
                        {/*        tracking-[0.15em]*/}
                        {/*        uppercase*/}
                        {/*      "*/}
                        {/*    >*/}
                        {/*        Your Favourite<br />Shinobi Encyclopedia*/}
                        {/*    </p>*/}

                        {/*</div>*/}
                    </div>
                </>
            )}
        </div>
    )
}
