import React, { useState } from "react"

const WorkExperienceItem = ({ position }) => {
   const [collapsed, setCollapsed] = useState(true)

   return (
      <div
         className={`border-l-4 border-blue-500 p-4 mb-6 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
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
            <ul className="list-disc pl-5 text-gray-300 shadow-text font-poppins">
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
      <section
         id="work-experience"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text">
            EXPERIENCE
         </h2>
         <div className="container mx-auto">
            {workExperience.map((experience, index) => (
               <div key={index} className="mb-12">
                  <div className="flex items-center justify-between mb-4">
                     <div className="w-40 h-16 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 p-1 rounded">
                        <a
                           href={experience.companyUrl}
                           target="_blank"
                           rel="noopener noreferrer">
                           <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="w-full h-full object-contain rounded"
                           />
                        </a>
                     </div>
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
