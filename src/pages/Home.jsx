import React from "react";
import HeroSection from "../components/HeroSection";
import Recipes from "../components/Recipes";

function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroSection
        title={
          <p>
            Taste the World with
            <br /> FlavorVerse!
          </p>
        }
        type="home"
      />
      <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
    </main>
  );
}

export default Home;
