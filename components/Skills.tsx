import React from "react";

import { skills } from "@/data";
import { Button } from "./ui/MovingBorders";

const Skills = () => {
  return (
    <div id="skills" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">skills</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {skills.map((category) => (
          <Button
            key={category.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-6 w-full">
              {/* Category Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-center w-full">
                {category.category}
              </h1>

              {/* Skills Grid/Flex */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-2 w-full">
                {category.items.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black-200/50 border border-white/10 p-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm md:text-base font-medium text-white-100">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
