"use client";
import FeaturedPosts from "@/Components/FeaturePosts";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import LatestStoriesAndLists from "@/Components/LatestStoriesAndLists";

export default function Home() {
  return (
    <div className="mx-40">
      <Header />
      <HeroSection />
      <FeaturedPosts />
      <LatestStoriesAndLists />
      <Footer />
    </div>
  );
}
