
const Aboutus = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20 lg:px-40">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-sky-600 mb-5">
            About Lingo Bingo!
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Your gateway to mastering Japanese vocabulary in a fun and engaging way!
          </p>
        </div>
  
        {/* Content Section */}
        <div className="mt-10 space-y-10">
          {/* First Section */}
          <div className="flex flex-col md:flex-row items-center gap-5">
            <div className="md:w-1/2">
              <img
                src="/public/assets/4Japanese Vocabulary.png"
                alt="Learning Japanese Vocabulary"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg">
              <h2 className="text-2xl font-bold text-sky-500 mb-3">
                Why Lingo Bingo?
              </h2>
              <p>
                Learning a new language can be challenging, especially when it
                comes to retaining vocabulary. Lingo Bingo is designed to help
                users overcome this challenge in a fun, easy, and interactive way.
                Our platform gamifies learning, making it enjoyable and highly
                effective.
              </p>
            </div>
          </div>
  
          {/* Second Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-5">
            <div className="md:w-1/2">
              <img
                src="/public/assets/2Japanese Vocabulary.png"
                alt="Interactive Learning Features"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2 text-gray-700 text-lg">
              <h2 className="text-2xl font-bold text-sky-500 mb-3">
                How It Works
              </h2>
              <p>
                Lingo Bingo simplifies the learning process. With just a single
                click, users can log in and start exploring new vocabulary. The
                app is powered by Firebase, ensuring a seamless and secure login
                experience. Personalized content keeps users motivated while
                tracking their progress.
              </p>
            </div>
          </div>
  
          {/* Third Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-sky-500 mb-3">
              Join the Adventure!
            </h2>
            <p className="text-gray-700 text-lg">
              Whether you're just starting or looking to advance your Japanese
              language skills, Lingo Bingo is here to turn your learning journey
              into an exciting adventure. Expand your vocabulary, improve your
              communication skills, and fall in love with the beauty of the
              Japanese language.
            </p>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="px-8 py-3 bg-sky-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-sky-600">
            Start Learning Now
          </button>
        </div>
      </div>
    );
};

export default Aboutus;