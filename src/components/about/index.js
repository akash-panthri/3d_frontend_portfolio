import React from "react";

function AboutDetails() {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <div className="col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center">
          info
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          100+ projects
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          2+ year experience
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
