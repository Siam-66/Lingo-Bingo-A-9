import { Link, useLoaderData, useParams } from "react-router-dom";
import { GoUnmute } from "react-icons/go";

const JapanLesson = () => {
    const { lesson_no } = useParams();
    const lessons = useLoaderData();

    const currentLesson = lessons.find(
        (lesson) => lesson.lesson_no === parseInt(lesson_no)
    );

    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "ja-JP";
        window.speechSynthesis.speak(utterance);
    }

    return (
        <div className="p-5">
            <h1 className="text-5xl text-center font-bold mb-8 text-black">
                Lesson {lesson_no}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentLesson?.data.map((wordData) => (
                    <div
                        key={wordData.japanId}
                        className="card bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <div className="relative">
                            <div className="bg-gradient-to-r from-sky-300 to-blue-600 h-20 w-full"></div>
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-sky-500">
                                    <span className="text-4xl text-sky-700 font-bold">
                                        {wordData.word.charAt(0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-6 pt-14 text-center">
                            <h2 className="card-title text-2xl font-bold text-sky-700 mb-4">
                                {wordData.word}
                            </h2>
                            <p className="text-lg text-gray-700 mb-2">
                                <span className="font-semibold">Pronunciation:</span> {wordData.pronunciation}
                            </p>
                            <p className="text-lg text-gray-700 mb-2">
                                <span className="font-semibold">Meaning:</span> {wordData.meaning}
                            </p>
                            <p className="text-sm italic text-gray-600 mb-2">
                                <span className="font-semibold">Example:</span> <br />
                                {wordData.example}
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-semibold">When to Say:</span> {wordData.when_to_say}
                            </p>
                            <button
                                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-sky-700 text-white shadow-lg focus:outline-none transition-all hover:scale-110"
                                onClick={() => pronounceWord(wordData.word)}
                                aria-label="Pronounce word"
                            >
                                <GoUnmute  className="text-xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={'/startLearning'}>
                <button className="btn mt-5 text-2xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white rounded-lg px-8 py-3 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Go Back
                </button>
            </Link>
        </div>
    );
};

export default JapanLesson;