import React from "react";
import Image1 from "/assets/FQA.gif";

const FAQSection = () => {
  return (
    <section className="container mx-auto mb-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-full md:max-w-[30rem] lg:max-w-[50rem] mx-auto"
            src={Image1}
            alt="FAQ Illustration"
          />
        </div>

        {/* FAQ Content */}
        <div className="w-full ">
          <div className="mb-8">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050233]">
              Important FAQ
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl font-medium">
                What is Lingo Bingo?
              </div>
              <div className="collapse-content">
                <div className="divider"></div>
                <p className="text-base sm:text-lg md:text-xl text-justify">
                  Lingo Bingo is a fun and interactive web application designed
                  to help users expand their vocabulary and improve their
                  communication skills in multiple languages. It provides an
                  engaging way to learn new words and retain vocabulary
                  effectively through interactive tools and activities.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl font-medium">
                How does Lingo Bingo make learning vocabulary easier?
              </div>
              <div className="collapse-content">
                <div className="divider"></div>
                <p className="text-base sm:text-lg md:text-xl text-justify">
                  Lingo Bingo uses interactive games, quizzes, and engaging
                  challenges to make vocabulary learning enjoyable. It focuses
                  on repetition and real-world usage of words, ensuring that
                  users can retain vocabulary for the long term without feeling
                  overwhelmed.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl font-medium">
                Do I need to create an account to use Lingo Bingo?
              </div>
              <div className="collapse-content">
                <div className="divider"></div>
                <p className="text-base sm:text-lg md:text-xl text-justify">
                  Yes, you need to create an account and log in to access the
                  vocabulary features of Lingo Bingo. User authentication is
                  managed securely through Firebase, ensuring that your data
                  remains safe and accessible only to you.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl font-medium">
                What languages does Lingo Bingo support?
              </div>
              <div className="collapse-content">
                <div className="divider"></div>
                <p className="text-base sm:text-lg md:text-xl text-justify">
                  Currently, Lingo Bingo supports multiple languages, including
                  English, Spanish, French, and German. We are actively working
                  on expanding the language options to accommodate more users
                  around the globe.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl font-medium">
                Is Lingo Bingo free to use?
              </div>
              <div className="collapse-content">
                <div className="divider"></div>
                <p className="text-base sm:text-lg md:text-xl text-justify">
                  Yes, Lingo Bingo offers a free version with basic features.
                  However, users can subscribe to premium plans for additional
                  tools, such as advanced quizzes, personalized learning paths,
                  and detailed progress reports.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
