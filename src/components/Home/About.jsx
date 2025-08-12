import React from "react";
import Heading from "../Elements/Heading";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <Fade>
            <section id="about" className="max-w-5xl mx-auto px-6 py-16">
                <Heading title="About"></Heading>

                <div className="rounded-2xl shadow-lg p-4 md:p-16  leading-relaxed md:text-lg">
                    <p className="">
                        I'm a passionate MERN stack web developer.
                        My programming journey began a few years ago when I first discovered the power of building websites and applications.
                        Since then, I have dedicated myself to mastering the full stack, from designing intuitive user interfaces to developing robust backend services.
                    </p>

                    <p className="">
                        I especially enjoy crafting clean, efficient code and solving real-world problems through technology.
                        Whether it’s building scalable web apps, experimenting with new frameworks, or optimizing performance, I find great satisfaction in continuous learning and improvement.
                    </p>

                    <p className="">
                        Outside of programming, I’m an avid sports enthusiast and love playing football to stay active and clear my mind.
                        I also have a creative side—I enjoy painting and exploring digital art, which helps me think outside the box and bring fresh ideas to my projects.
                    </p>

                    <p className="">
                        Overall, I believe a balanced blend of technical skills and personal passions shapes me into a developer who not only writes code but tells stories and builds experiences that matter.
                    </p>
                </div>
            </section>
        </Fade>
    );
};

export default About;
