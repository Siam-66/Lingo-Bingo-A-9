import { useLoaderData, useParams } from "react-router-dom";

const JapanLesson = () => {
    const { lesson_no } = useParams();
    const lessons = useLoaderData();
    
    // Find the current lesson based on lesson_no
    const currentLesson = lessons.find(
        (lesson) => lesson.lesson_no === parseInt(lesson_no)
    );

    // Function to pronounce a word
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "ja-JP"; // Japanese language
        window.speechSynthesis.speak(utterance);
    }

    return (
        <div className="p-5">
            <h1 className="text-4xl text-center font-bold mb-8 text-sky-600">
                Lesson {lesson_no}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentLesson?.data.map((wordData) => (
                    <div
                        key={wordData.japanId}
                        className="card bg-sky-100 w-full shadow-xl cursor-pointer"
                        onClick={() => pronounceWord(wordData.word)} // Call pronounceWord on click
                    >
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                                {wordData.word}
                            </h2>
                            <p className="text-lg">
                                Pronunciation: {wordData.pronunciation}
                            </p>
                            <p className="text-lg">
                                Meaning: {wordData.meaning}
                            </p>
                            <p className="text-sm italic">
                                Example: {wordData.example}
                            </p>
                            <p className="text-sm">
                                When to Say: {wordData.when_to_say}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JapanLesson;
