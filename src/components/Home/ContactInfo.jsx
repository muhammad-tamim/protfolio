import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Heading from '../Elements/Heading';
import { Fade } from 'react-awesome-reveal';

const ContactInfo = () => {
    return (
        <Fade duration={3000}>
            <div id="contact">
                <Heading title="Contact WIth ME"></Heading>
                <section className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
                    <div className="max-w-6xl mx-auto px-6">

                        <div >
                            <div>
                                <div className="grid lg:grid-cols-2 gap-10">
                                    {/* Contact Info */}
                                    <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center">
                                        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
                                        <div className="space-y-4 text-gray-700">
                                            <p className="flex items-center gap-3">
                                                <FaEnvelope className="text-primary text-lg" />
                                                <span>contact2tamim@gmail.com</span>
                                            </p>
                                            <p className="flex items-center gap-3">
                                                <FaPhoneAlt className="text-primary text-lg" />
                                                <span>01586090360</span>
                                            </p>
                                            <p className="flex items-center gap-3">
                                                <FaMapMarkerAlt className="text-primary text-lg" />
                                                <span>Dhaka, Bangladesh</span>
                                            </p>
                                        </div>

                                        {/* Social Links */}
                                        <div className="flex gap-5 mt-8">
                                            <a href="https://github.com/muhammad-tamim" target="_blank" rel="noopener noreferrer"
                                                className="text-gray-700 hover:text-primary transition text-2xl">
                                                <FaGithub />
                                            </a>
                                            <a href="https://linkedin.com/in/tamim-muhammad" target="_blank" rel="noopener noreferrer"
                                                className="text-gray-700 hover:text-primary transition text-2xl">
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Contact Form */}
                                    <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" placeholder="Your Name"
                                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" placeholder="your@email.com"
                                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Message</label>
                                            <textarea placeholder="Your message here..." rows="4"
                                                className="mt-1 block w-full p-3 rounded-xl border border-gray-300 focus:border-primary focus:ring focus:ring-primary/20 outline-none"></textarea>
                                        </div>
                                        <button type="submit"
                                            className="w-full btn btn-primary">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fade>
    );
};

export default ContactInfo;