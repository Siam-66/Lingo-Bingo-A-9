

const About = () => {
    return (
        <div className="text-center  md:pt-16 pt-10 pb-8">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:mb-20 mb-10 text-sky-500">About Lingo Bingo!</h1>
        
     
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 gap-12 mb-16">
      
            <div className="lg:w-1/2 text-lg md:text-xl text-gray-700">
                <p>
                    Lingo Bingo is a fun and interactive app designed to help users learn Japanese vocabulary. 
                    We make learning easy and engaging. Simply log in, powered by Firebase, and start exploring new words. 
                    Whether you're a beginner or advancing your skills, We turns learning into a game.
                </p>
            </div>
     
            <div className="lg:w-1/2">
                <img 
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg" 
                    src="/assets/1Japanese Vocabulary .png" 
                    alt="Learn Japanese Vocabulary" 
                />
            </div>
        </div>

   
        <div className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 gap-12">
    
            <div className="lg:w-1/2">
                <img 
                    className="w-full max-w-lg mx-auto rounded-lg shadow-lg" 
                    src="/assets/3Japanese Vocabulary.png" 
                    alt="Interactive Features" 
                />
            </div>
   
            <div className="lg:w-1/2 text-lg md:text-xl text-gray-700">
                <p>
                    Our app is designed to keep you motivated and excited about learning. 
                    With interactive features and personalized content, you can track your progress and 
                    achieve your language goals. Join us and enjoy the adventure of mastering Japanese in a fun and effective way!
                </p>
            </div>
        </div>
    </div>
    );
};

export default About;