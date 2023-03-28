import BrazilSvg from "./svg/BrazilSvg";
import doggoImage from "/src/assets/doggo.webp";

export default function AboutMe({ reference }) {
  return (
    <section
      ref={reference}
      className="p-24 relative gap-24 grid grid-cols-2 h-screen w-full bg-doodle-pattern bg-cover snap-center scrollbar-hide overflow-x-hidden overflow-y-auto bg-palette-white"
    >
      {/* 🚜 Logo */}
      <div className="flex items-center justify-center absolute top-0 left-[calc(50%-150px)] w-[300px] h-[80px] rounded-b-[2rem] bg-palette-black">
        <div className="flex items-center select-none drop-shadow-xl bg-palette-white rounded-full h-16 w-16">
          <img src={doggoImage} alt="An image of a Doggo" className="h-10" />
        </div>
      </div>

      {/* 📄 TEXT SECTION */}
      <div className="flex flex-col gap-4 first:gap-8">
        <h2 className="text-palette-yellow drop-shadow-md text-5xl">
          A brazilian dev
        </h2>
        {/* 📰 NORMAL VERSION */}
        <p>
          I'm a recent graduate from a bootcamp where I learned the necessary
          skills to become a full-stack software developer. My interest in
          coding started when I was just 12 years old, experimenting with
          replicating the functionalities of the games I played in Construct 2.
          Later, I moved on to the Godot game engine, building a range of mobile
          projects that allowed me to see the results of my work firsthand.
        </p>
        <p>
          I'm self-driven and self-taught, which is evident in the way I learned
          English to access more resources related to coding. After graduating
          from high school in Brazil in 2021, I moved to London to seek out new
          opportunities to further my development career.
        </p>
        <p>
          As a junior software developer, I bring strong coding skills and a
          passion for self-improvement to the table. I enjoy both independent
          and collaborative work, and I'm always eager to stay up-to-date with
          the latest trends and advancements in the field. I believe I can be a
          valuable asset to any team looking for a driven, enthusiastic
          developer.
        </p>

        {/* 🗞️ CONCISE VERSION */}
        <p className="hidden">
          I'm a recent bootcamp graduate with a lifelong passion for coding. I
          began experimenting with programming at a young age and have since
          honed my skills in building applications of all sizes. Whether working
          independently or as part of a team.
        </p>
        <p className="hidden">
          I thrive on the challenge of developing solutions to complex problems.
        </p>
      </div>

      {/* Brazil Section */}
      <div className="">
        {/* <div className="rounded-[40px] bg-profile-picture bg-cover bg-center h-full"></div> */}
        <BrazilSvg />
      </div>
    </section>
  );
}
