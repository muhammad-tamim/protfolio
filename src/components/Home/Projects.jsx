import React from "react";
import Heading from "../Elements/Heading";
import { Link } from "react-router";
import recipeBook from "../../assets/recipeBook.png"
import repidRide from "../../assets/repid-ride.png";
import madeEasy from "../../assets/madeEasy.png"

const projects = [
    {
        id: 1,
        name: "Recipe Book",
        image: recipeBook,
    },
    {
        id: 2,
        name: "Rapid Ride",
        image: repidRide,
    },
    {
        id: 3,
        name: "MedEasy",
        image: madeEasy,
    },
];

const Projects = () => {
    return (
        <section>
            <Heading title="Projects" />
            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="max-w-xs rounded-md shadow-md bg-white text-gray-800"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className=" object-center w-full rounded-t-md h-72"
                        />
                        <div className="flex flex-col justify-between p-6 space-y-4">
                            <h2 className="text-2xl font-semibold tracking-wide text-center">
                                {project.name}
                            </h2>
                            <Link to={`/projectDetails/${project.id}`}>
                                <button
                                    type="button"
                                    className="btn btn-primary w-full"
                                >
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
