import React from "react";

const HeroSection = () => {

    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
                src="/images/pexels-photo-8818667.jpeg"
                alt="Category Background"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 transform scale-x-[-1]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 text-left text-white px-10 py-20 ml-10">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-merienda mb-8">Namaste, my spice-loving foodies!</h1>
                    <p className="text-lg text-justify text-align: justify mb-6">If your stomach growls louder at the smell of tadka than at your alarm clock, you're in the right place. This is where butter chicken meets butter logic, and samosas come with no judgment (only extra chutney). Whether you're a master chef or just a pro at ordering paneer tikka, we’re all united by one truth: life is better with ghee. So loosen your belt, sharpen your appetites, and get ready to drool — because things are about to get masaledaar!</p>
                    <button className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-[200px] hover:bg-gray-200 transition ">
                        Learn More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
