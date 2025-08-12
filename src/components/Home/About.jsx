import React from "react";
import Heading from "../Elements/Heading";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <Fade duration={3000}>
            <div id="about">
                <Heading title="About ME"></Heading>
                <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                    <div className="max-w-6xl mx-auto px-6">

                        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">

                            <div>
                                <p className="text-lg leading-relaxed">
                                    My name is Muhammad Tamim. My journey in programming started after I faced some tough times in life, including dropping out of university and starting a job to support my family. But I never gave up. I taught myself web development, and now I am a confident MERN stack developer.
                                </p>
                                <p className="mt-6 text-lg leading-relaxed">
                                    I love building web apps that solve real problems. Writing clean and efficient code makes me happy. I enjoy learning new technologies and improving my skills every day.
                                </p>
                                <p className="mt-6 text-lg leading-relaxed">
                                    Outside programming, I enjoy playing football to stay active and clear my mind. I also like painting and digital art, which help me think creatively and bring fresh ideas to my work.
                                </p>
                                <p className="mt-6 text-lg leading-relaxed font-semibold">
                                    Overall, I’m a hardworking and focused developer who believes in learning from challenges and growing both personally and professionally.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fade>
    );
};

export default About;
