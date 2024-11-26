import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaPlay } from 'react-icons/fa';

const Tutorials = () => {
    const [activeVideo, setActiveVideo] = useState('6p9Il_j0zjc?si=PkCgEHgE3tizjByy');

    const tutorialVideos = [
        {
            id: '6p9Il_j0zjc?si=PkCgEHgE3tizjByy',
            title: 'Hiragana Mastery in 1 Hour',
            channel: 'Japanese Sensei',
            thumbnail: 'https://i.ytimg.com/vi/6p9Il_j0zjc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqTlzCQgIX1erPWisbwAju7V-rwQ'
        },
        {
            id: 'RSJbXBmjo4s?si=BiU6JE7U4en58UpA',
            title: 'Japanese Alphabet for Beginners',
            channel: 'Japanese Learning Channel',
            thumbnail: 'https://i.ytimg.com/vi/RSJbXBmjo4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDplzEvJAv6FLgPzoaE3yQVUb82A'
        },
        {
            id: 's6DKRgtVLGA?si=a51e9j-4kI1S5TQm',
            title: 'Katakana Complete Guide in 1 Hour',
            channel: 'Learn Japanese',
            thumbnail: 'https://i.ytimg.com/vi/s6DKRgtVLGA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdXJn52ybCCKPBBr_5DfQNW1B8ng'
        },
        {
            id: '4Irzvrcpf4Q?si=aqJX89BRWsuzy2el',
            title: 'Japanese Pronunciation in 14 Minutes',
            channel: 'Japanese Language Hub',
            thumbnail: 'https://i.ytimg.com/vi/4Irzvrcpf4Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBa3mQctb1oaV7g85OJZFWr0khLFg'
        },
        {
            id: '1aR5uVVkJCU?si=lK7T7-BEFcwkuvpu',
            title: 'Japanese Writing Systems Explained',
            channel: 'Language Mastery',
            thumbnail: 'https://i.ytimg.com/vi/1aR5uVVkJCU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEa3PjXNQF8nP_ixZanovYMFsTwQ'
        },
        {
            id: 'BckC9gXghIc?si=2DGE7W2J3ObBvSAQ',
            title: 'Learn Japanese Grammar in 25 Minutes',
            channel: 'Japanese Quick Learn',
            thumbnail: 'https://i.ytimg.com/vi/BckC9gXghIc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBD3OyzyFaKi8XyrKQs5ciT8myssQ'
        },
        {
            id: '66P5_R37vek?si=ANbhC_ivxyVAo0Yl',
            title: '100 Phrases Every Japanese Beginner Must-Know',
            channel: 'Japanese Quick Learn',
            thumbnail: 'https://i.ytimg.com/an_webp/66P5_R37vek/mqdefault_6s.webp?du=3000&sqp=COfGk7oG&rs=AOn4CLBFBaeBIQ88D4T4lkn5whemIaUvWg'
        },
        {
            id: 'qo4YE0a4jaM?si=xLCTN-C6iKw6ERSc',
            title: '50 Daily Japanese Conversations',
            channel: 'Nihongo Master',
            thumbnail: 'https://i.ytimg.com/vi/qo4YE0a4jaM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9mbgRFpyz76yZMNgdgbMH5dF25Q'
        }
    ];

    return (
        <div className="container bg-base-100 mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center text-black mb-16">
                Japanese Tutorial
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white  rounded-xl overflow-hidden">
                    <div className="aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                            title="Japanese Learning Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold text-sky-700">
                            {tutorialVideos.find(v => v.id === activeVideo)?.title}
                        </h2>
                    </div>
                </div>


                <div className="space-y-4 overflow-y-auto bg-base-100 p-2 max-h-[600px]">
                    {tutorialVideos.map((video) => (
                        <div 
                            key={video.id}
                            onClick={() => setActiveVideo(video.id)}
                            className={`flex items-center bg-base-200 shadow-md rounded-lg p-4 cursor-pointer hover:bg-sky-50 transition-all 
                                ${activeVideo === video.id ? 'border-2 border-sky-500' : ''}`}
                        >
                            <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-24 h-16 rounded-md mr-4"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-sky-700">{video.title}</h3>
                                <p className="text-sm text-gray-500">{video.channel}</p>
                            </div>
                            <FaPlay className="ml-auto text-sky-500" />
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex justify-center mt-10 space-x-4">
                <Link 
                    to="/startLearning" 
                    className="flex items-center bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white px-6 py-3 rounded-lg 
                    hover:bg-sky-600 transition-all shadow-lg hover:shadow-xl"
                >
                    <FaBook className="mr-2" /> Learn Vocabularies
                </Link>
            </div>
        </div>
    );
};

export default Tutorials;