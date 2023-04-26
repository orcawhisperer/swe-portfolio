import React, { useState } from "react"
import styles from "./Skills.module.css"
import Link from "next/link"

const Skills = ({ skills }) => {
   const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null)

   const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
         acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
   }, {})

   const categories = Object.keys(skillsByCategory)
   const [activeCategory, setActiveCategory] = useState(categories[0])

   return (
      <section
         id="skills"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            SKILLS
         </h2>
         <div className="container mx-auto">
            <div className="flex justify-center mb-8 space-x-4 overflow-x-auto flex-wrap">
               {categories.map((category, index) => (
                  <button
                     key={index}
                     onClick={() => setActiveCategory(category)}
                     className={`text-white font-semibold py-2 px-4 rounded font-montserrat mb-4 ${
                        activeCategory === category
                           ? "bg-gradient-to-br from-red-500 via-yellow-500 via-green-500 to-blue-500"
                           : "bg-gray-600"
                     }`}>
                     {category}
                  </button>
               ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
               {skillsByCategory[activeCategory].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <div
                        className={`text-4xl mb-4 ${skill.color} cursor-pointer transform hover:scale-150 transition-all duration-300 ease-in-out`}>
                        <Link href={skill.url} target="_blank">
                           {skill.icon}
                        </Link>
                     </div>
                     <h4 className="text-xl font-semibold mb-2 text-gray-300 font-montserrat">
                        {skill.title}
                     </h4>
                     <div
                        className="w-full h-6 relative overflow-hidden rounded-xl bg-gray-700"
                        onMouseEnter={() => setHoveredSkillIndex(index)}
                        onMouseLeave={() => setHoveredSkillIndex(null)}>
                        <div
                           className={`w-full h-full absolute left-0 top-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 ${
                              styles["skill-bar"]
                           } ${
                              hoveredSkillIndex === index
                                 ? styles["slide-in"]
                                 : ""
                           }`}
                           style={{
                              clipPath:
                                 "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
                              transformOrigin: "left",
                              width: `${skill.proficiencyLevel}%`,
                              "--skill-width": `${skill.proficiencyLevel}%`,
                           }}
                        />
                        {hoveredSkillIndex === index && (
                           <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white text-sm font-semibold">
                                 {skill.proficiencyLevel}%
                              </span>
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Skills
