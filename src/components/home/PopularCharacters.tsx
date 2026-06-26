import { useState } from 'react';
import { motion } from 'framer-motion';
import { cardVariants, characterImages, characterQuotes, characterNames, characterLinks } from "../../constants/characters";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/buttons/arrow-right.svg";

const PopularCharacters = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="py-20 bg-gray-950">
            <div className="max-w-7xl mx-auto px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-black tracking-widest text-white mb-3">
                        SHINOBI LEGENDS
                    </h2>
                    <p className="text-xl text-orange-400">
                        The most popular characters in the Naruto world
                    </p>
                </div>

                {/* Horizontal Scrollable Cards */}
                <div className="flex justify-center gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <motion.div
                            key={index}
                            className={`group relative h-[520px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer snap-start transition-all duration-300
                                ${expandedIndex === index
                                ? 'w-[400px]'
                                : 'w-[200px] hover:w-[260px]'}`}
                            variants={cardVariants}
                            initial="collapsed"
                            animate={expandedIndex === index ? "expanded" : "collapsed"}
                            onClick={() => handleCardClick(index)}
                            style={{
                                backgroundImage: `url(${characterImages[index]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >

                            {/* Link to Character */}
                            {expandedIndex === index && (
                                <Link
                                    to={`/characters/${characterLinks[index]}`}
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute top-6 right-6 z-10 inline-flex items-center gap-2
                                           bg-black/70 hover:bg-orange-600 border border-white/30 hover:border-orange-400
                                           text-white px-5 py-2.5 rounded-2xl text-sm font-medium
                                           transition-all duration-200 hover:scale-105 active:scale-95"
                                >
                                    <img src={ArrowRight} alt="Arrow Right" className="w-4 h-4" />
                                </Link>
                            )}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <h3 className="text-3xl text-center font-bold mb-2 tracking-wide">
                                    {characterNames[index]}
                                </h3>

                                {expandedIndex === index && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-gray-200 leading-relaxed text-lg quote-line"
                                    >
                                        {characterQuotes[index]}
                                    </motion.p>
                                )}
                            </div>

                            {/* Hover Indicator */}
                            {expandedIndex !== index && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <div className="text-orange-400 text-sm font-medium tracking-widest border border-orange-400 px-6 py-2 rounded-full">
                                        SEE MORE
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularCharacters;