import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row">
        {/* Left Section - Latest Stories */}
        <div className="lg:w-2/3 p-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold flex items-center">
            <span>📂</span>
            <span className="ml-2">Latest Stories</span>
          </h2>
          <div className="border-t border-gray-300 my-4"></div>

          {/* Stories */}
          {stories.map((story, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start space-x-6 mb-4">
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-400">
                    {story.category}
                  </p>
                  <h3 className="text-lg font-bold mt-1 cursor-pointer">
                    {story.title}
                  </h3>
                  <p className="text-gray-400 mt-1 text-sm">
                    {story.description}
                  </p>
                </div>
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-32 h-20 object-cover rounded-lg"
                />
              </div>
              <div className="border-t border-gray-600 my-4"></div>
            </React.Fragment>
          ))}
        </div>

        {/* Right Section - Sticky List */}
        <div className="lg:w-1/3 p-4 sticky top-8 self-start">
          <h2 className="text-3xl font-bold flex items-center">
            <span>🏆</span>
            <span className="ml-2">Lists</span>
          </h2>
          <div className="border-t border-gray-600 my-4"></div>
          {/* List Items */}
          <div className="space-y-4">
            {lists.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold cursor-pointer">{item.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-600 my-4"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const stories = [
  {
    category: "DESIGN",
    title:
      "Small businesses lean into 'cozy' and 'festive' trends this holiday season",
    description:
      "Comforting items are selling this holiday season: Scarves, hats and gloves, humorous Christmas and Hanukkah cards and bright colors.",
    image: "https://placehold.co/150",
  },
  {
    category: "TECH",
    title:
      "'Being a teen mom doesn't mean you're a sh***y parent': TikTok's teen moms are making big money",
    description:
      "Social media influencers like MariClare Maclamroc earn tens of thousands per month by posting about teen motherhood.",
    image: "https://placehold.co/150",
  },
  {
    category: "NEWS",
    title: "Bank of America makes its 2025 housing market predictions",
    description:
      "Rising housing market inventory will slow national home price appreciation next year, predicts Bank of America.",
    image: "https://placehold.co/150",
  },
  {
    category: "DESIGN",
    title:
      "Small businesses lean into 'cozy' and 'festive' trends this holiday season",
    description:
      "Comforting items are selling this holiday season: Scarves, hats and gloves, humorous Christmas and Hanukkah cards and bright colors.",
    image: "https://placehold.co/150",
  },
  {
    category: "TECH",
    title:
      "'Being a teen mom doesn't mean you're a sh***y parent': TikTok's teen moms are making big money",
    description:
      "Social media influencers like MariClare Maclamroc earn tens of thousands per month by posting about teen motherhood.",
    image: "https://placehold.co/150",
  },
  {
    category: "NEWS",
    title: "Bank of America makes its 2025 housing market predictions",
    description:
      "Rising housing market inventory will slow national home price appreciation next year, predicts Bank of America.",
    image: "https://placehold.co/150",
  },
];

const lists = [
  {
    icon: "\uD83D\uDCA1",
    title: "Most Innovative Companies",
    description:
      "Fast Company's annual ranking of businesses that are making an outsize impact.",
  },
  {
    icon: "\u25B2",
    title: "Innovation By Design",
    description:
      "The best products, services, interfaces, and design ideas in business.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "World Changing Ideas",
    description:
      "Products, concepts, and policies that are pursuing innovation for good.",
  },
  {
    icon: "\uD83C\uDFE1",
    title: "Best Workplaces for Innovators",
    description:
      "Companies and organizations that foster a culture of innovation and creativity within their workplaces.",
  },
];

export default App;
