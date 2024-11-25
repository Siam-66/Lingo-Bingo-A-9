import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import vBanner from '/assets/japan.mp4';

const Banner = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);    

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
        <div className="relative lg:h-[800px] md:h-[600px] overflow-hidden max-sm:h-[400px]  ">
            <video 
                ref={videoRef}
                className="absolute top-0 left-0 md:w-full lg:h-[800px] md:h-[595px] w-full  h-[375px] object-cover"
                autoPlay 
                loop 
                muted
            >
                <source src={vBanner} type="video/mp4" />
                
            </video>
            
            
            <div className="absolute inset-0 flex flex-col justify-center items-center mt-14 z-20 top-[50px]  lg:top-[250px] md:top-[20px] ">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-white">Welcome to Lingo Bingo</h1>
                <p className="mt-4 lg:text-2xl md:text-xl text-white mb-5">Boost Your Vocabulary, One Bingo at a Time!</p>
                <Link to="/startLearning" className='mt-2 text-white hover:scale-105 duration-[0.3s] lg:text-4xl md:text-2xl border-2 p-3 rounded-2xl font-semibold'>Start Learning</Link>
            </div>
            <button 
                onClick={togglePlayPause} 
                className="absolute top-10 right-4  text-black p-2 rounded-full z-20"
            >
                {isPlaying ? (
                    <CiPause1 className="h-9 w-9" />  // Pause icon when video is playing
                ) : (
                    <CiPlay1 className="h-9 w-9" />  // Play icon when video is paused
                )}
            </button>
        </div>
        </div>
    );
};

export default Banner;