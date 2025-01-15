import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row py-8">
        {/* Left Section */}
        <div className="lg:w-2/3 p-4">
          {/* Image */}
          <div className="relative">
            <img
              src="https://placehold.co/600x400"
              alt="Filming"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 text-white text-6xl font-bold rotate-90 origin-top-left">
              Earntelligent
            </div>
          </div>
          {/* Content */}
          <div className="mt-6">
            <h1 className="text-5xl font-bold leading-tight">
              One of the year’s best movies was filmed in first person
            </h1>
            <p className="mt-4 text-gray-400">
              Nickel Boys director RaMell Ross shares his point of view with the
              world.
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-400 space-x-4">
              <span className="text-green-400 font-bold">KEVIN NGUYEN</span>
              <span>DEC 14</span>
              <span>|</span>
              <span>8</span>
            </div>
          </div>
        </div>

        {/* Right Section - Top Stories */}
        <div className="lg:w-1/3 p-4">
          <h2 className="text-green-400 text-2xl font-bold mb-4">
            Top Stories
          </h2>
          <div className="space-y-6">
            {/* Story Item */}
            {topStories.map((story, index) => (
              <div key={index} className="flex space-x-4 items-start">
                {/* Serial Number */}
                <span className="text-green-400 text-2xl font-bold">
                  {index + 1}
                </span>
                {/* Content */}
                <div>
                  <h3 className="font-semibold hover:text-gray-300 cursor-pointer">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {story.author} <span className="mx-2">|</span> {story.date}{" "}
                    <span className="mx-2">|</span> {story.comments} comments
                  </p>
                </div>
                {/* Thumbnail */}
                <img
                  src={story.thumbnail}
                  alt="Thumbnail"
                  className="w-16 h-16 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const topStories = [
  {
    title:
      "Arm CEO Rene Haas on the AI chip race, Intel, and what Trump means for tech",
    author: "ALEX HEATH",
    date: "Two hours ago",
    comments: 2,
    thumbnail: "https://placehold.co/100",
  },
  {
    title: "Infinity Nikki is a fashion-forward Zelda",
    author: "ASH PARRISH",
    date: "DEC 14",
    comments: 11,
    thumbnail: "https://placehold.co/100",
  },
  {
    title: "The musical at the end of the world",
    author: "ROBYN KANNER",
    date: "DEC 15",
    comments: 8,
    thumbnail: "https://placehold.co/100",
  },
  {
    title: "Europe’s Starlink competitor is go",
    author: "THOMAS RICKER",
    date: "5:07 PM GMT+5",
    comments: 19,
    thumbnail: "https://placehold.co/100",
  },
  {
    title: "A worthy update to my favorite mobile game ever",
    author: "DAVID PIERCE",
    date: "DEC 15",
    comments: 33,
    thumbnail: "https://placehold.co/100",
  },
];

export default HeroSection;
