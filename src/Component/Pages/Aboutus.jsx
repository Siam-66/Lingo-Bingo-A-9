import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs, FaDatabase } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";

const Aboutus = () => {
  const techIcons = {
    HTML: <FaHtml5 className="text-orange-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    JavaScript: <FaJs className="text-yellow-500" />,
    Firebase: <SiFirebase className="text-orange-400" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    ExpressJS: <SiExpress className="text-gray-800" />,
    ReactJS: <FaReact className="text-sky-500" />,
    NodeJS: <FaNodeJs className="text-green-600" />,
  };

  const projects = [
    {
      name: "Gadget Heaven",
      description: "E-commerce platform for tech enthusiasts",
      link: "https://assignment-8-main.netlify.app/",
    },
    {
      name: "Dream 11",
      description: "T20 Cricket Tournament Auction",
      link: "https://assignment-main-7.netlify.app/",
    },
    {
      name: "Paddy",
      description: "Pet to Adoption",
      link: "https://siam-66.github.io/assignment-6/",
    },
    {
      name: "BD Aid",
      description: "Donate for Flood",
      link: "https://siam-66.github.io/assignment-5/",
    },
    {
      name: "MediNest",
      description: "The Nest for All Your Medical Needs",
      link: "medinest-66.netlify.app/",
    },
    {
      name: "Rinterio",
      description: "Buy barn house",
      link: "https://siam-66.github.io/assignment-3/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-md">
          <div className="flex-1">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-400 via-sky-900 to-blue-800 bg-clip-text text-transparent">
              Siam Mahmud
            </h1>
            <p className="text-lg text-gray-600 mt-2">Frontend Developer from Bangladesh</p>
            <p className="text-gray-600 mt-4">
              Currently, I am focusing on front-end development and MERN stack development. My goal
              is to continually learn and advance in the field of web development.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="btn bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 text-white">
                Contact Me
              </button>
              <a href="https://github.com/Siam-66?tab=repositories" target="_blank">
                <button className="btn btn-outline hover:bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 hover:border-white">
                  View Projects
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 mt-8 lg:mt-0">
            <div className="p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-700">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {Object.keys(techIcons).map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center space-x-2 bg-white  p-3 rounded-md hover:bg-gradient-to-r from-sky-200 via-sky-400 to-blue-400"
                  >
                    {techIcons[tech]}
                    <span className="text-sky-600 hover:text-white font-bold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <section className="mt-10 shadow-md p-5 rounded-md">
          <h2 className="text-3xl font-semibold text-gray-700">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects.map((project) => (
              <div key={project.name} className="p-4 bg-white rounded-lg shadow-md relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 text-sky-500 hover:underline"
                >
                  <GoArrowUpRight  className="size-6"/>
                </a>
                <h3 className="text-xl font-semibold text-sky-700">{project.name}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Currently Learning */}
        <section className="mt-10 shadow-md p-2 rounded-md">
          <h2 className="text-3xl font-semibold text-gray-700">Currently Learning</h2>
          <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
            <li>Backend</li>
            <li>Firebase</li>
            <li>Mongoose</li>
            <li>JavaScript</li>
          </ul>
        </section>

        {/* Get in Touch */}
        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-700">Get in Touch</h2>
          <div className="bg-white p-6 rounded-lg flex items-center justify-between shadow-md mt-4">
            <p className="text-lg text-gray-600">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="mailto:siammahmud66@gmail.com" className="text-sky-700 font-semibold underline">
                siammahmud66@gmail.com
              </a>
              <a
                href="https://github.com/Siam-66"
                target="_blank"
                className="text-gray-700 font-semibold underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
