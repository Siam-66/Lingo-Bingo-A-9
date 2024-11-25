import React from "react";
import CountUp from "react-countup";
import { FaUserFriends, FaBook, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";

const SuccessSection = () => {
    const stats = [
        {
            id: 1,
            title: "Users",
            icon: <FaUserFriends className="text-5xl text-indigo-500" />,
            count: 4200,
            desc: "↗︎ 200 (5%) this week",
        },
        {
            id: 2,
            title: "Lessons",
            icon: <FaBook className="text-5xl text-green-500" />,
            count: 850,
            desc: "↗︎ 50 (6%) this month",
        },
        {
            id: 3,
            title: "Vocabulary",
            icon: <FaClipboardList className="text-5xl text-yellow-500" />,
            count: 12000,
            desc: "↗︎ 1,000 (8%) this month",
        },
        {
            id: 4,
            title: "Tutorials",
            icon: <FaChalkboardTeacher className="text-5xl text-blue-500" />,
            count: 320,
            desc: "↗︎ 20 (10%) this week",
        },
    ];

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-10">
                Our Achievements
            </h2>
            <p className="text-center lg:px-[20rem] mb-10">Celebrate our milestones of excellence! From satisfied learners to prestigious accolades, our achievements reflect the impact we've made in shaping bright futures.</p>
            <div className="grid gap-8 py-7 rounded-2xl px-6 bg-sky-500 sm:px-8 md:px-16 lg:px-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="stat flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div>{stat.icon}</div>
                        <div className="stat-title text-lg font-medium text-gray-600 mt-4 text-center">
                            {stat.title}
                        </div>
                        <div className="stat-value text-4xl font-bold text-gray-800 mt-2">
                            <CountUp start={0} end={stat.count} duration={2.5} separator="," />
                        </div>
                        <div className="stat-desc text-sm text-gray-500 mt-2 text-center">
                            {stat.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessSection;
