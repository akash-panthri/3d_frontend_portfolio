import React from "react";
import clsx from "clsx";
const ItemLayout = ({ children, className }) => {
return <div  className={clsx(
    "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
    className
  )}>{children}</div>;
}

function AboutDetails() {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
      <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"} > 
      <h2 className="text-2xl text-left w-full capitalize">
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
      <ItemLayout className={"col-span-4 text-accent"} > 
      <p className="font-semibold w-full text-left text-5xl">
            100+ <sub className="font-semibold text-base">Projects</sub>
          </p>
      </ItemLayout>
      <ItemLayout className={"col-span-4 text-accent"} > 
      <p className="font-semibold w-full text-left text-5xl">
            2+ <sub className="font-semibold text-base">Year Experience</sub>
          </p>
      </ItemLayout>
      <ItemLayout className={"col-span-4 !p-0"}>
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=akash-panthri&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="akash-panthri" loading="lazy" className="w-full h-auto" />
      </ItemLayout>
      <ItemLayout className={"col-span-8 !p-0"}>
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
        
      </div>
    </section>
  );
}

export default AboutDetails;
