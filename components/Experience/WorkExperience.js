import React, {useState} from "react"
import {FaChevronDown} from "react-icons/fa"

const WorkExperienceItem = ({position}) => {
   const [collapsed, setCollapsed] = useState(true)

   return (
      <div
         className={`border-l-4 border-blue-500 p-4 mb-6 transition-all duration-300 transform hover:scale-105 cursor-pointer`}
         onClick={() => setCollapsed(!collapsed)}>
         <h4 className="text-xl font-semibold mb-2 text-white shadow-text font-montserrat">
            {position.title}
            <span
               className={`inline-block ml-2 transform transition-transform duration-300 ${
                  collapsed ? "" : "rotate-90"
               }`}>
               <FaChevronDown />
            </span>
         </h4>
         <p className="text-gray-300 mb-2 shadow-text font-montserrat">
            {position.duration}
         </p>
         {!collapsed && (
            <ul className="list-disc pl-5 text-gray-300 shadow-text font-montserrat">
               {position.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
               ))}
            </ul>
         )}
      </div>
   )
}

const WorkExperience = ({workExperience}) => {
   return (
      <section
         id="work-experience"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            EXPERIENCE
         </h2>
         <div className="container mx-auto">
            {workExperience.map((experience, index) => (
               <div key={index} className="mb-12">
                  <div className="flex-column items-start mb-4">
                     <div className="w-20 h-20 bg-white p-1 mr-4 rounded-full shadow-lg">
                        <a
                           href={experience.companyUrl}
                           target="_blank"
                           rel="noopener noreferrer">
                           <img
                              src={experience.logo}
                              alt={`${experience.company} logo`}
                              className="w-full h-full object-contain rounded-full"
                           />
                        </a>
                     </div>
                     <div>
                        <p className="text-md text-gray-400 shadow-text pt-5 font-montserrat">
                           {experience.location}
                        </p>
                     </div>
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
