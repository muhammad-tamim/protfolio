import React from "react";
import { Link, useParams } from "react-router";
import Container from "../components/Container/Container";
import VerticalSpace from "../components/Container/VerticalSpace";

const ProjectDetails = () => {
    const { id } = useParams();

    const projectData = {
        1: {
            name: "Recipe Book",
            techStack: ["HTML", "TailwindCSS", "DaisyUI", "React", "Express", "Node", "MongoDB", "Firebase Auth"],
            description:
                "A full-featured MERN stack application where food lovers can add, manage, and explore delicious recipes from around the world. The app includes authentication, dynamic likes, private routes, a top recipes section, and much more.",
            liveLink: "https://assignment-10-72e11.web.app/",
            githubLink: "https://github.com/muhammad-tamim/assignment-10",
            challenges:
                "Handling image uploads for recipes efficiently and ensuring smooth performance with large datasets.",
            improvements:
                "Introduce a smart recipe recommendation system, add multi-language support, and implement advanced search filters.",
        },
        2: {
            name: "Rapid Ride",
            techStack: ["HTML", "TailwindCSS", "DaisyUI", "React", "Express", "Node", "MongoDB", "Firebase Auth"],
            description:
                "A full-featured Car Rental web application where users can explore, list, and book cars. The platform supports real-time availability updates, secure authentication, and seamless user experience across all devices.",
            liveLink: "https://assignment-11-b9621.web.app/",
            githubLink: "https://github.com/muhammad-tamim/assignment-11-client",
            challenges:
                "Ensuring accurate real-time availability sync and optimizing large image loading for car listings.",
            improvements:
                "Add AI-powered price suggestions for owners, introduce loyalty rewards for frequent renters, and create a trip-planning tool.",
        },
        3: {
            name: "Made Easy",
            techStack: ["HTML", "TailwindCSS", "DaisyUI", "React", "Express", "Node", "MongoDB", "Firebase Auth"],
            description:
                "MedEasy is a full-stack pharmacy e-commerce platform designed for customers, sellers, and admins. It provides smooth product browsing, secure authentication, cart and checkout functionality with Stripe payment integration, and comprehensive dashboards for admin and sellers to manage products, users, payments, and advertisements.",
            liveLink: "https://assignment-12-a7eae.web.app/",
            githubLink: "https://github.com/muhammad-tamim/assignment-12-client",
            challenges:
                "Implementing a secure prescription verification system and managing sensitive customer data under strict compliance.",
            improvements:
                "Add AI-driven health product recommendations, enable subscription-based medicine refills, and provide a chatbot for instant medical queries.",
        },
    };


    const project = projectData[id];

    if (!project) {
        return <p className="text-center mt-10">Project not found!</p>;
    }

    return (
        <Container>
            <VerticalSpace>
                <section className="px-6 py-10 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-4 text-center">{project.name}</h1>
                    <div className="space-y-6">
                        <div className="">
                            <h2 className="text-xl font-semibold mb-2">Main Technology Stack:</h2>
                            {project.techStack.map((tech, index) => <span key={index}>{tech}, </span>)}
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold">Description</h2>
                            <p className="text-gray-700">{project.description}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Challenges Faced</h2>
                            <p className="text-gray-700">{project.challenges}</p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">Potential Improvements</h2>
                            <p className="text-gray-700">{project.improvements}</p>
                        </div>
                        <div className=" flex justify-center gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Live Project
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary"
                            >
                                GitHub (Client)
                            </a>
                        </div>
                        <div>
                            <Link to='/'>
                                <button className="btn btn-primary w-full">Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </VerticalSpace>
        </Container>

    );
};

export default ProjectDetails;
