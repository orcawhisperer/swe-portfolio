import React, { useState } from "react"

const WorkExperienceItem = ({ position }) => {
   const [collapsed, setCollapsed] = useState(true)

   return (
      <div
         className={`border-l-4 border-blue-500 p-4 mb-6 ${
            collapsed ? "collapsed" : ""
         }`}
         onClick={() => setCollapsed(!collapsed)}>
         <h4 className="text-xl font-semibold mb-2 text-white shadow-text">
            {position.title}
            <span
               className={`inline-block ml-2 transform transition-transform duration-300 ${
                  collapsed ? "" : "rotate-180"
               }`}>
               <i className="fas fa-chevron-down"></i>
            </span>
         </h4>
         <p className="text-gray-300 mb-2 shadow-text">{position.duration}</p>
         {!collapsed && (
            <ul className="list-disc pl-5 text-gray-300 shadow-text font-mono-roboto">
               {position.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
               ))}
            </ul>
         )}
      </div>
   )
}

const WorkExperience = ({ workExperience }) => {
   return (
      <section id="work-experience" className="py-16 bg-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">
            EXPERIENCE
         </h2>
         <div className="container mx-auto">
            {workExperience.map((experience, index) => (
               <div key={index} className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-2xl font-bold text-white shadow-text">
                        {experience.company}
                     </h3>
                     <p className="text-xl text-white shadow-text">
                        {experience.location}
                     </p>
                  </div>
                  {experience.positions.map((position, index) => (
                     <WorkExperienceItem key={index} position={position} />
                  ))}
               </div>
            ))}
         </div>
      </section>
   )
}

export default WorkExperience
