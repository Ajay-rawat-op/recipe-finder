import React, { useState } from "react";

const foodShorts = [
    "lVfNStAU178",
    "2dR6SzUwbpY",
    "3SVi80fjs7U",
    "HhHkKyu2xwQ",
];

export default function FoodShortsCarousel() {
    const [playingId, setPlayingId] = useState(null);

    return (
        <div className="w-full mx-auto p-3">
            <h2 className="flex items-center text-3xl font-semibold mb-5 text-yellow-600">
                <span className="mr-3 text-4xl">🔥</span> Trending Food Shorts
            </h2>
            <div className="flex space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 overflow-x-auto">
                {foodShorts.map((videoId) => (
                    <div
                        key={videoId}
                        className="min-w-[320px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg relative cursor-pointer"
                        onClick={() => setPlayingId(videoId)}
                    >
                        {playingId === videoId ? (
                            <iframe
                                className="w-full h-[570px] md:h-[360px]"
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
                                title="YouTube Shorts video player"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <>
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                    alt="Video thumbnail"
                                    className="w-full h-[570px] md:h-[360px] object-cover"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                                        <svg
                                            className="w-12 h-12 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 84 84"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="42" cy="42" r="42" fill="currentColor" />
                                            <polygon
                                                fill="black"
                                                points="33,26 60,42 33,58"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
