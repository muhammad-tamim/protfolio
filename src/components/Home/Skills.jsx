import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
    SiTailwindcss, SiMongodb, SiExpress, SiFigma, SiGithub,
    SiNpm, SiVercel, SiDaisyui,
} from "react-icons/si";
import Heading from "../Elements/Heading";
import { DiFirebase } from "react-icons/di";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
                { name: "TailwindCSS", icon: <SiDaisyui className="text-yellow-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-sky-400" /> },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
            ],
        },
        {
            title: "Other Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "GitHub", icon: <SiGithub className="text-gray-800 dark:text-gray-200" /> },
                { name: "NPM", icon: <SiNpm className="text-red-500" /> },
                { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
                { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
                { name: "FireBase", icon: <DiFirebase className="text-orange-400" /> },
            ],
        },
    ];

    return (
        <Fade duration={3000}>
            <div id="skills">
                <Heading title="Skills"></Heading>
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="bg-white  shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">

                            <div>
                                {skillCategories.map((category, index) => (
                                    <div key={index}>
                                        {/* <h3 className="text-2xl pb-4 font-semibold text-center my-4">{category.title}:</h3> */}
                                        <div className="flex flex-wrap gap-4 my-10 ">
                                            {category.skills.map((skill, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center mx-auto justify-center text-center gap-2 px-4 py-2 bg-gray-200 btn btn-ghost rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                                                >
                                                    <span className="text-xl">{skill.icon}</span>
                                                    <span className="text-sm font-medium">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fade>
    );
};

export default Skills;
