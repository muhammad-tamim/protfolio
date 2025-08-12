import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

// Import videos
import FunTime2 from "../../assets/videos/Fun_time_2.mp4";
import FunTime4 from "../../assets/videos/Fun_time_4.mp4";
import FunTime5 from "../../assets/videos/Fun_time_5.mp4";

const Experience = () => {
    const reelVideos = [FunTime2, FunTime4, FunTime5];

    return (
        <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Professional Experience
                </h2>

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-primary text-white p-3 rounded-full">
                                <MdWork size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Team Member</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">
                                    Chatime · Full-time
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                                <FaCalendarAlt /> Oct 2023 – Aug 2024 · 11 mos
                            </span>
                            <span className="flex items-center gap-1">
                                <FaMapMarkerAlt /> Banani, Dhaka, Bangladesh · On-site
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-3">Key Contributions:</h4>
                        <ul className="space-y-3">
                            <li>🧋 Prepared <strong>100+ drinks daily</strong> with a 2-minute average turnaround, strictly following SOP and hygiene standards.</li>
                            <li>💵 Supported daily sales operations exceeding <strong>৳1,00,000</strong>, ensuring fast, accurate service and smooth transactions.</li>
                            <li>🎬 Produced <strong>7 promotional reels</strong>, generating <strong>6M+ views</strong> and boosting sales by 50% during campaigns.</li>
                            <li>📊 Reduced ingredient wastage by <strong>20%</strong> through sales data analysis, identifying peak hours and high-demand days.</li>
                            <li>🧪 Collaborated with R&D to develop <strong>4 new drinks</strong>, expanding the seasonal menu and attracting new customers.</li>
                        </ul>
                    </div>

                    <div className="mt-10">
                        <h4 className="text-lg font-semibold mb-4">Most Viewed Promotional Videos:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {reelVideos.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full aspect-[9/16] object-cover"
                                    >
                                        <source src={src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
