import { Link, useLoaderData, useParams } from "react-router-dom";
import React, { useState } from "react";
import { GoUnmute } from "react-icons/go";

const JapanLesson = () => {
  const { lesson_no } = useParams();
  const lessons = useLoaderData();
  const [modalData, setModalData] = useState(null);

  const currentLesson = lessons.find(
    (lesson) => lesson.lesson_no === parseInt(lesson_no)
  );

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  }

  const difficultyColors = {
    easy: "bg-gradient-to-r from-sky-300 to-blue-600",
    medium: "bg-gradient-to-r from-yellow-300 to-yellow-500",
    difficult: "bg-gradient-to-r from-red-300 to-rose-600"
  };

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center font-bold mb-8 text-black">
        Lesson {lesson_no}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentLesson?.data.map((wordData) => (
          <div
            key={wordData.japanId}
            className={`card shadow-lg rounded-xl border hover:shadow-2xl transform  transition-all duration-300 overflow-hidden`}
          >
            <div className="relative">

              <div className={`${difficultyColors[wordData.difficulty]} h-20 w-full`}></div>
              <div className="absolute hover:rotate-[360deg] hover:duration-[1s] -bottom-10 left-1/2 transform -translate-x-1/2">
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
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Part of Speech:</span> {wordData.part_of_speech}
              </p>
              <button
                className="btn btn-outline btn-sm hover:bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 hover:border-white mt-2 text-base"
                onClick={() => setModalData(wordData)}
              >
                When to Say
              </button>
              <div className="px-12">
              <div className=" bg-gradient-to-r py-1 from-sky-300 via-sky-400 to-blue-500 text-white focus:outline-none transition-all hover:scale-110 mt-2 rounded-full shadow-xl" onClick={() => pronounceWord(wordData.word)}
                aria-label="Pronounce word">
                <button
                className="inline-flex items-center justify-center w-12 h-12 ">
                <GoUnmute className="text-3xl" />
              </button>
              </div>
              </div>


            </div>
          </div>
        ))}
      </div>


{modalData && (
  <div className="modal modal-open">
    <div className="modal-box max-w-md">
      <div className="modal-header flex justify-between">
        <h3 className="font-bold text-lg">{modalData.word}</h3>
        <button
          className="btn btn-sm btn-circle btn-ghost"
          onClick={() => setModalData(null)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="modal-body">
        <p className="py-2"><span className="font-semibold">Meaning:</span> {modalData.meaning}</p>
        <p className="py-2"><span className="font-semibold">When to Say:</span> {modalData.when_to_say}</p>
        <p className="py-2 italic"><span className="font-semibold">Example:</span> {modalData.example}</p>
      </div>
      <div className="modal-action">
        <button
          className="btn text-xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white"

          onClick={() => setModalData(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      <Link to={'/startLearning'}>
        <button className="btn mt-5 text-2xl bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white rounded-lg px-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          Back to Lesson
        </button>
      </Link>
    </div>
  );
};

export default JapanLesson;