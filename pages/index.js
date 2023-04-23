import { React } from "react"

import Layout from "../components/Layout"
import { FaJava, FaServer } from "react-icons/fa"

import {
   SiCplusplus,
   SiGo,
   SiPython,
   SiMysql,
   SiPostgresql,
   SiNeo4J,
   SiKubernetes,
   SiDocker,
   SiTerraform,
   SiAmazonaws,
   SiGooglecloud,
   SiMicrosoftazure,
   SiJavascript,
   SiJenkins,
   SiShell,
   SiLinux,
   SiApple,
   SiWindows,
} from "react-icons/si"

import WorkExperience from "@/components/WorkExperience"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Hero } from "@/components/Hero"
import { Certification } from "@/components/Certification"

export default function Home() {
   const skills = [
      {
         title: "Python",
         category: "Programming",
         icon: <SiPython />,
         proficiency: "Expert",
         proficiencyLevel: 90,
         color: "text-blue-600",
      },
      {
         title: "Go",
         category: "Programming",
         icon: <SiGo />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-green-500",
      },
      {
         title: "C/C++",
         category: "Programming",
         icon: <SiCplusplus />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-yellow-500",
      },
      {
         title: "JavaScript",
         category: "Programming",
         icon: <SiJavascript />,
         proficiency: "Expert",
         proficiencyLevel: 90,
         color: "text-red-500",
      },
      {
         title: "Java",
         category: "Programming",
         icon: <FaJava />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-purple-600",
      },
      {
         title: "gRPC",
         category: "Programming",
         icon: <FaServer />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-indigo-500",
      },
      {
         title: "AWS",
         category: "DevOps & Cloud",
         icon: <SiAmazonaws />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-pink-500",
      },
      {
         title: "GCP",
         category: "DevOps & Cloud",
         icon: <SiGooglecloud />,
         proficiency: "Intermediate",
         proficiencyLevel: 85,
         color: "text-orange-500",
      },
      {
         title: "Azure",
         category: "DevOps & Cloud",
         icon: <SiMicrosoftazure />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-teal-500",
      },
      {
         title: "Docker",
         category: "DevOps & Cloud",
         icon: <SiDocker />,
         proficiency: "Intermediate",
         proficiencyLevel: 85,
         color: "text-blue-400",
      },
      {
         title: "Kubernetes",
         category: "DevOps & Cloud",
         icon: <SiKubernetes />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-green-400",
      },
      {
         title: "Terraform",
         category: "DevOps & Cloud",
         icon: <SiTerraform />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-yellow-400",
      },
      {
         title: "CI/CD tools",
         category: "DevOps & Cloud",
         icon: <SiJenkins />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-red-400",
      },
      {
         title: "Bash scripting",
         category: "DevOps & Cloud",
         icon: <SiShell />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-purple-400",
      },
      {
         title: "Linux",
         category: "OS & Databases",
         icon: <SiLinux />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-indigo-400",
      },
      {
         title: "MacOS",
         category: "OS & Databases",
         icon: <SiApple />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-pink-400",
      },
      {
         title: "Windows",
         category: "OS & Databases",
         icon: <SiWindows />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-orange-400",
      },
      {
         title: "Neo4j",
         category: "OS & Databases",
         icon: <SiNeo4J />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-teal-400",
      },
      {
         title: "MySQL",
         category: "OS & Databases",
         icon: <SiMysql />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-blue-300",
      },
      {
         title: "PostgreSQL",
         category: "OS & Databases",
         icon: <SiPostgresql />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-green-300",
      },
   ]
   const workExperience = [
      {
         company: "Google",
         location: "Bangalore, IN",
         logo: "/images/google.svg",
         companyUrl: "https://www.google.com/",
         positions: [
            {
               title: "Cloud Engineer, Full Stack",
               duration: "December 2022 - Present",
               responsibilities: [
                  "Developing technologies to accelerate the Google Cloud journey from legacy monolithic applications. Bring fresh ideas from all areas, including testing and validation automation while maintaining the production availability, conversion automation, distributed computing, and large-scale system design.",
                  "Work with Google Cloud Platform strategic partners to accelerate the delivery.",
                  "Design, develop, test, deploy, maintain, and improve software.",
               ],
            },
            {
               title: "Cloud Infrastructure Engineer, Google Cloud",
               duration: "December 2021 - December 2022",
               responsibilities: [
                  "Working as a trusted technical advisor to customers and solve complex cloud infrastructure challenges in the areas of networking, containerization, and clustering.",
                  "Create and deliver best practice recommendations, tutorials, blog articles, open-source and sample code, and technical presentations adapting to different levels of key business and technical stakeholders.",
               ],
            },
         ],
      },
      {
         company: "Amazon",
         location: "Chennai, IN",
         logo: "/images/amazon.svg",
         companyUrl: "https://www.amazon.com/",
         positions: [
            {
               title: "Application Engineer II",
               duration: "August 2021 - November 2021",
               responsibilities: [
                  "Worked as an ApplicationEngineer for Kindle content org helping authors,publishers & readers to resolve the issues in Kindle content.",
                  "Handle operations and maintenance driven projects, primarily in Java Python,Perl,shell scripts & web technologies and Software deployment support in staging and production environments.",
               ],
            },
         ],
      },
      {
         company: "CapeStart",
         location: "Nagercoil, IN",
         logo: "/images/capestart.png",
         companyUrl: "https://www.capestart.com/",
         positions: [
            {
               title: "DevOps Engineer",
               duration: "October 2020 - August 2021",
               responsibilities: [
                  "Setting up Cloud Infrastructures on AWS,GCP,Azure etc.",
                  "Setting up and maintaining CI/CD pipelines using tools like Jenkins,CircleCI, ArgoCD, Spinnaker etc",
                  "Maintaining Infrastructures using monitoring tools like Pagerduty, Grafana, Prometheus, Apache airflow and Nagios etc",
               ],
            },
         ],
      },
      // {
      //    company: "Jhaiho Pvt Ltd",
      //    location: "Bangalore, IN",
      //    positions: [
      //       {
      //          title: "Software Engineer",
      //          duration: "April 2019 - October 2020",
      //          responsibilities: [
      //             "Worked as a Full Stack Developer for a startup company.",
      //             "Built Backend Microservices using Golang, gRPC and Python.",
      //             "Built a web application using React, Redux, NodeJS, MongoDB, and Neo4J.",
      //          ],
      //       },
      //    ],
      // },
   ]
   return (
      <Layout pageTitle="Vasanth - Portfolio">
         <Hero />
         <About />
         <WorkExperience workExperience={workExperience} />
         <Skills skills={skills} />
         <Certification />
      </Layout>
   )
}
