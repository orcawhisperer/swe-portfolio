import React from "react"

export const Certification = () => {
   const certifications = [
      {
         title: "Professional Cloud Architect",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/9879827e-1874-41c7-9719-6d6859c1720e",
      },
      {
         title: "Professional Cloud Developer",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/8aef081c-8a5d-4f09-bbf4-dd798eb2eea9",
      },
      {
         title: "Associate Cloud Engineer",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/505ee7d0-9a8d-44c7-bd48-5501c0474318",
      },
   ]

   return (
      <section id="certifications" className="bg-black-100 py-24">
         <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white-800">
            CERTIFICATIONS
         </h2>
         <div className="container mx-auto">
            <div className="flex justify-center flex-wrap">
               {certifications.map((certification, index) => (
                  <div
                     key={index}
                     className="mb-8 p-4 md:p-6 bg-white rounded-lg shadow-md max-w-sm mx-4 w-full">
                     <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">
                        {certification.title}
                     </h4>
                     <p className="text-gray-600 mb-2">
                        {certification.provider}
                     </p>
                     <p className="text-gray-500 mb-2">{certification.date}</p>
                     <a
                        href={certification.link}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer">
                        View Certificate
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
