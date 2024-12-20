"use client"
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

function AboutDetails() {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
      <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"} > 
      <h2 className="text-xl md:text-2xl text-left w-full capitalize">
      Architect of Enchantment
      </h2>
      <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
      </ItemLayout>
      <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"} > 
      <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            100+ <sub className="font-semibold text-base">Projects</sub>
          </p>
      </ItemLayout>
      <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"} > 
      <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">Year Experience</sub>
          </p>
      </ItemLayout>
      <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=akash-panthri&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="akash-panthri" loading="lazy" className="w-full h-auto" />
      </ItemLayout>
      <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
        <img src="https://github-readme-stats.vercel.app/api?username=akash-panthri&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="akash-panthri" loading="lazy" className="w-full h-auto" />
      </ItemLayout>
      <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=bootstrap,css,django,eclipse,express,figma,firebase,git,github,gmail,html,js,jquery,linkedin,linux,materialui,mongodb,mysql,nextjs,nodejs,npm,postgres,postman,powershell,prisma,pytorch,react,redux,regex,sass,stackoverflow,sublime,supabase,svg,tailwind,tensorflow,threejs,ts,vercel,vite,vscode,windows,wordpress,yarn`}
            alt="akash-panthri"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={'https://streak-stats.demolab.com/?user=akash-panthri&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B'}
            alt="akash-panthri"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/akash-panthri/google_clone_nextjs_project"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={'https://github-readme-stats.vercel.app/api/pin/?username=akash-panthri&repo=google_clone_nextjs_project&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false'}
              alt="akash-panthri"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
}

export default AboutDetails;
