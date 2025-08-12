import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100  py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    &copy; {currentYear} Muhammad Tamim. All rights reserved.
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/muhammad-tamim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/muhammad-tamim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:your.email@example.com"
                        className="hover:text-primary transition"
                        aria-label="Email"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
