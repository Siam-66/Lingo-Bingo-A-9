import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Japans = () => {
    const [japans, setJapans] = useState([]);

    useEffect(() => {
        fetch("/lingoBingo.json")
            .then((res) => res.json())
            .then((data) => setJapans(data))
            .catch((error) => console.error("Error loading lessons:", error));
    }, []);

    return (
        <div className="min-h-screen bg-base-100 mb-10">
            <div>
                <h1 className="text-center text-5xl mt-10 mb-5 text-black font-extrabold">
                    Start Learning
                </h1>
                <p className="text-center lg:px-[20rem] mb-10">Unlock the world of Japanese vocabulary with ease! Explore daily lessons designed to make learning fun, engaging, and effective. Begin your journey to fluency today!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {japans.map((lesson) => (
                    <div
                        key={lesson.lesson_no}
                        className="card image-full bg-white shadow-lg border border-sky-100 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <figure>
                                <img  className="rounded-2xl" src={lesson.image} />
                        </figure>
                        <div className="card-body p-6 text-center">
                            <h2 className="card-title text-3xl font-bold text-white mb-4">
                                Lesson {lesson.lesson_no}
                            </h2>
                            <p className="text-white lg:mt-10 lg:text-center mb-2 text-justify ">
                                {lesson.descriptions}

                            </p>
                            <div className="card-actions">
                                <Link to={`/japans/${lesson.lesson_no}`}>
                                    <button className="btn bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white text-lg font-medium py-2 px-6 rounded-md shadow border-sky-600 transition-colors">
                                        Words Await
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="items-center justify-center flex">
            <Link to={'/tutorials'}>
                <button className="btn md:mt-5 lg:mt-0 text-2xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white rounded-lg px-8  shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Go Tutorial
                </button>
            </Link>
            </div>
        </div>
    );
};

export default Japans;
