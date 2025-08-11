import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import myPhoto from "../../assets/my-photo-2.png"

const Hero = () => {
    return (
        <section id="hero" className=" flex flex-col lg:flex-row items-center justify-between gap-10 xl:px-20 md:px-10 px-4">
            {/* Left Side */}
            <motion.div
                className="flex-1 text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                    Hi, I’m <span className="text-secondary">Muhammad Tamim</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 mb-6">
                    MERN Stack Web Developer
                </h2>

                {/* Resume + icons */}
                <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                        href="/resume.pdf"
                        download="Muhammad_Tamim_Resume.pdf"
                        className="btn btn-primary"
                    >
                        Download Resume
                    </a>
                    <div className="flex items-center gap-4 text-2xl">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary transition-all"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-primary transition-all"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side (Image) */}
            <motion.div
                className="flex-1 flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative group">
                    <img
                        src={myPhoto}
                        alt="Muhammad Tamim"
                        className=""
                    />

                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
