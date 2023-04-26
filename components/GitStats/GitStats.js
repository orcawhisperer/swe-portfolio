import React, { useEffect, useState } from "react"
import axios from "axios"

export const GitStats = ({ username }) => {
   const [userData, setUserData] = useState(null)
   const [userRepos, setUserRepos] = useState([])

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const { data } = await axios.get(
               `https://api.github.com/users/${username}`
            )
            setUserData(data)
         } catch (error) {
            console.error(error)
         }
      }

      const fetchUserRepos = async () => {
         try {
            const { data } = await axios.get(
               `https://api.github.com/users/${username}/repos`
            )
            setUserRepos(data)
         } catch (error) {
            console.error(error)
         }
      }

      fetchUserData()
      fetchUserRepos()
   }, [username])

   return (
      <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
         <h2 className="text-4xl font-bold mb-8 text-center text-white shadow-text font-montserrat">
            Git Stats
         </h2>
         {userData && (
            <div className="container mx-auto text-center">
               <h3 className="text-3xl font-semibold mb-4 text-white">
                  {userData.name}
               </h3>
               <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="rounded-full w-40 h-40 mx-auto mb-4"
               />
               <p className="text-xl mb-4 text-gray-300">
                  Public Repositories: {userData.public_repos}
               </p>
               <p className="text-xl mb-4 text-gray-300">
                  Followers: {userData.followers}
               </p>
               <p className="text-xl mb-4 text-gray-300">
                  Following: {userData.following}
               </p>
               <p className="text-xl mb-4 text-gray-300">
                  Location: {userData.location || "N/A"}
               </p>
               <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold text-blue-500">
                  View GitHub Profile
               </a>
            </div>
         )}
         {userRepos.length > 0 && (
            <div className="container mx-auto mt-16">
               <h3 className="text-3xl font-semibold mb-8 text-center text-white">
                  Repositories
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {userRepos.map((repo, index) => (
                     <div key={index} className="bg-gray-700 p-6 rounded-xl">
                        <h4 className="text-2xl font-semibold mb-4 text-gray-300">
                           {repo.name}
                        </h4>
                        <p className="text-lg mb-4 text-gray-300">
                           {repo.description || "No description"}
                        </p>
                        <p className="text-lg mb-4 text-gray-300">
                           Forks: {repo.forks_count}
                        </p>
                        <p className="text-lg mb-4 text-gray-300">
                           Stars: {repo.stargazers_count}
                        </p>

                        <p className="text-lg mb-4 text-gray-300">
                           Watchers: {repo.watchers_count}
                        </p>
                        <a
                           href={repo.html_url}
                           target="_blank"
                           rel="noreferrer"
                           className="text-lg font-semibold text-blue-500">
                           View Repository
                        </a>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </section>
   )
}
