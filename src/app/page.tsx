"use client";
import FeaturedPosts from "@/Components/FeaturePosts";
import HeroSection from "@/Components/HeroSection";
import LatestStoriesAndLists from "@/Components/LatestStoriesAndLists";

export default function Home() {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40">
      <HeroSection />
      <FeaturedPosts />
      <LatestStoriesAndLists />
    </div>
  );
}
