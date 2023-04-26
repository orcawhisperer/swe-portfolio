import React from "react"

const Certification = () => {
   const certifications = [
      {
         title: "Associate Cloud Engineer",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/505ee7d0-9a8d-44c7-bd48-5501c0474318",
         badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/50496814",
      },
      {
         title: "Professional Cloud Architect",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/9879827e-1874-41c7-9719-6d6859c1720e",
         badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/51314118",
      },
      {
         title: "Professional Cloud Developer",
         provider: "Google Cloud",
         date: "May 2022",
         link: "https://www.credential.net/8aef081c-8a5d-4f09-bbf4-dd798eb2eea9",
         badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/50890882",
      },
   ]

   return (
      <section
         id="certifications"
         className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            CERTIFICATIONS
         </h2>
         <div className="container mx-auto">
            <div className="flex flex-nowrap overflow-x-auto px-4 gap-4 justify-content-center md:justify-center">
               {certifications.map((certification, index) => (
                  <div key={index} className="flex flex-col items-center">
                     <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                           src={certification.badge}
                           alt={`${certification.title} badge`}
                           width={200}
                           height={200}
                           className="w-42 h-42 mb-4 object-contain rounded transform transition-transform duration-300 hover:scale-105"
                        />
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Certification
