import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Japans = () => {
    const [japans, setJapans] = useState([]);

    useEffect(() => {
        fetch('/lingoBingo.json') // Ensure the file is at the correct path in your public folder.
            .then((res) => res.json())
            .then((data) => setJapans(data))
            .catch((error) => console.error("Error loading lessons:", error));
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-center text-5xl mt-10 mb-10 text-sky-600 font-bold">
                    Start Learning
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {japans.map((lesson) => (
                    <div key={lesson.lesson_no} className="card bg-sky-100 w-full shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Lesson {lesson.lesson_no}</h2>
                            <p>Learn new vocabulary daily with Lingo Bingo.</p>
                            <div className="card-actions justify-start">
                                <Link to={`/japans/${lesson.lesson_no}`}>
                                    <button className="btn bg-sky-500 text-white text-lg mt-5">
                                        Words Await
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Japans;
