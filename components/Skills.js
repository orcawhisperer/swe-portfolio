import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

export const Skills = ({ skills }) => {
   const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
         acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
   }, {})
   return (
      <section id="skills" className="py-16 bg-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            SKILLS
         </h2>
         <div className="container mx-auto">
            <Carousel
               showThumbs={false}
               showStatus={false}
               showIndicators={false}
               autoPlay
               interval={4000}
               infiniteLoop>
               {Object.entries(skillsByCategory).map(
                  ([category, skills], index) => (
                     <div
                        key={index}
                        className="mb-12 bg-white rounded-lg shadow-md p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-700 border-b-2 border-blue-600 pb-2 inline-block">
                           {category}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
                           {skills.map((skill, index) => (
                              <div
                                 key={index}
                                 className="flex flex-col items-center skill-container">
                                 <div
                                    className={`text-4xl mb-4 ${skill.color} skill-icon`}>
                                    {skill.icon}
                                 </div>
                                 <h4 className="text-xl font-semibold mb-2 text-gray-800 skill-title">
                                    {skill.title}
                                 </h4>
                                 <div className="w-full skill-progress">
                                    <div
                                       className={`skill-progress-fill ${skill.color}`}
                                       style={{
                                          width: `${skill.proficiencyLevel}%`,
                                          backgroundColor: "#667eea",
                                       }}
                                    />
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  )
               )}
            </Carousel>
         </div>
      </section>
   )
}
