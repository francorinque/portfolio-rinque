"use client";

import { Approach } from "@/components/Approach";
// import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => {
  return (
    <main className="relative  bg-black-100 flex  items-center flex-col  mx-auto">
      <Hero />
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <Grid />
        <RecentProjects />
        {/* <Experience /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};
export default Home;
