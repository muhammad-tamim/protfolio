import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';

const Navbar = () => {
    const components = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

    return (
        <div className="navbar fixed top-0 left-0 w-full shadow-md xl:px-20 md:px-10 px-4 py-5 bg-base-100 transition-all duration-300 z-50">
            <div className="navbar-start min-w-0 flex-shrink">
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        aria-label="Open navigation menu"
                        className="cursor-pointer pr-2"
                    >
                        <RiMenu2Line size={25} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg space-y-2"
                    >
                        {components.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-primary hover:underline transition-all duration-200"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold hover:text-primary transition-colors duration-200 whitespace-nowrap">
                    <a href="#hero">Muhammad Tamim</a>
                </h1>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal gap-8 lg:gap-10 font-medium lg:text-lg xl:text-xl">
                    {components.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="relative after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end">
                <a
                    href="/resume.pdf"
                    download="Muhammad_Tamim_Resume.pdf"
                    className="btn btn-primary btn-sm lg:btn-md lg:btn-lg"
                >
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;
