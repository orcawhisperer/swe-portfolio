import React, { useState } from "react"

export const Skills = ({ skills }) => {
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
            <div className="flex justify-center mb-8 space-x-4 overflow-x-auto">
               {categories.map((category, index) => (
                  <button
                     key={index}
                     onClick={() => setActiveCategory(category)}
                     className={`text-white font-semibold py-2 px-4 rounded ${
                        activeCategory === category
                           ? "bg-blue-600"
                           : "bg-gray-600"
                     }`}>
                     {category}
                  </button>
               ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {skillsByCategory[activeCategory].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <div className={`text-4xl mb-4 ${skill.color}`}>
                        {skill.icon}
                     </div>
                     <h4 className="text-xl font-semibold mb-2 text-gray-300">
                        {skill.title}
                     </h4>
                     <div className="w-full h-6 relative overflow-hidden rounded-xl bg-gray-700">
                        <div
                           className={`w-full h-full absolute left-0 top-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600`}
                           style={{
                              clipPath:
                                 "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
                              transformOrigin: "left",
                              animation: `wave-top 2s ${
                                 index * 0.2 + Math.random() * 0.5
                              }s infinite alternate`,
                              width: `${skill.proficiencyLevel}%`,
                           }}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
