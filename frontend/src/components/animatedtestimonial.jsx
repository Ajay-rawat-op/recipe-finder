import React, { useState, useEffect, useRef } from "react";
import testimonials from "../data/testimonials";

function StarRating({ rating }) {
    return (
        <div className="flex justify-center space-x-1 text-orange-400">
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <svg
                        key={i}
                        className={`w-5 h-5 ${i < rating ? "fill-current" : "fill-none stroke-current"
                            }`}
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                ))}
        </div>
    );
}

export default function AnimatedTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    const handlePrev = () => {
        clearInterval(timerRef.current);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        clearInterval(timerRef.current);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="w-full px-4 py-12 flex justify-center bg-gray-100 dark:bg-gray-800 relative">
            <button
                onClick={handlePrev}
                className="absolute left-24 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white p-3 rounded-full shadow-xl hover:bg-orange-500 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                aria-label="Previous Testimonial"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={handleNext}
                className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white p-3 rounded-full shadow-xl hover:bg-orange-500 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                aria-label="Next Testimonial"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="relative w-full max-w-4xl h-72 overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-full backdrop-blur-md bg-white bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40 shadow-lg p-10 flex flex-col justify-center rounded-lg mx-2"
                        >
                            <svg
                                className="mx-auto mb-4 w-12 h-12 text-orange-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.17 6.24L5 11v7h7v-7H8.5L10.17 6.24H7.17zm10 0L15 11v7h7v-7h-5.5L17.17 6.24h-0.83z" />
                            </svg>
                            <p className="text-gray-900 dark:text-gray-100 italic mb-6 text-center text-lg leading-relaxed max-w-xl mx-auto">
                                “{testimonial.quote}”
                            </p>
                            <div className="flex flex-col items-center space-y-1">
                                <StarRating rating={testimonial.rating} />
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.photo}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover shadow-md"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-center">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-orange-600 text-sm text-center">{testimonial.role}</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs italic text-center">
                                            {testimonial.tagline}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
