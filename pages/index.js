import { React } from "react"

import Layout from "../components/Layout"
import { FaJava, FaServer, FaTerminal } from "react-icons/fa"

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
   SiLinux,
   SiApple,
   SiWindows,
} from "react-icons/si"

import WorkExperience from "@/components/Experience/WorkExperience"
import About from "@/components/About/About"
import Skills from "@/components/Skill/Skills"
import Hero from "@/components/Hero/Hero"
import Certification from "@/components/Certification/Certification"

export default function Home() {
   const skills = [
      {
         title: "Python",
         category: "Programming",
         icon: <SiPython color="#3776AB" />,
         proficiency: "Expert",
         proficiencyLevel: 90,
         color: "text-blue-600",
         url: "https://www.python.org/",
      },
      {
         title: "Go",
         category: "Programming",
         icon: <SiGo color="#00ADD8" />,
         proficiency: "Intermediate",
         proficiencyLevel: 73,
         color: "text-green-500",
         url: "https://go.dev/",
      },
      {
         title: "C/C++",
         category: "Programming",
         icon: <SiCplusplus color="#00599C" />,
         proficiency: "Intermediate",
         proficiencyLevel: 70,
         color: "text-yellow-500",
         url: "https://isocpp.org/",
      },
      {
         title: "JavaScript",
         category: "Programming",
         icon: <SiJavascript color="#F7DF1E" />,
         proficiency: "Expert",
         proficiencyLevel: 90,
         color: "text-red-500",
         url: "https://www.javascript.com/",
      },
      {
         title: "Java",
         category: "Programming",
         icon: <FaJava color="#E32636" />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-purple-600",
         url: "https://www.java.com/en/",
      },
      {
         title: "gRPC",
         category: "Programming",
         icon: <FaServer />,
         proficiency: "Intermediate",
         proficiencyLevel: 60,
         color: "text-indigo-500",
         url: "https://grpc.io/",
      },
      {
         title: "AWS",
         category: "DevOps & Cloud",
         icon: <SiAmazonaws color="#FF9900" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-pink-500",
         url: "https://aws.amazon.com/",
      },
      {
         title: "GCP",
         category: "DevOps & Cloud",
         icon: <SiGooglecloud color="#1A73E8" />,
         proficiency: "Intermediate",
         proficiencyLevel: 85,
         color: "text-orange-500",
         url: "https://cloud.google.com/",
      },
      {
         title: "Azure",
         category: "DevOps & Cloud",
         icon: <SiMicrosoftazure color="#0078D4" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-teal-500",
         url: "https://azure.microsoft.com/en-us/",
      },
      {
         title: "Docker",
         category: "DevOps & Cloud",
         icon: <SiDocker color="#2496ED" />,
         proficiency: "Intermediate",
         proficiencyLevel: 85,
         color: "text-blue-400",
         url: "https://www.docker.com/",
      },
      {
         title: "Kubernetes",
         category: "DevOps & Cloud",
         icon: <SiKubernetes color="#326CE5" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-green-400",
         url: "https://kubernetes.io/",
      },
      {
         title: "Terraform",
         category: "DevOps & Cloud",
         icon: <SiTerraform color="#5C4EE5" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-yellow-400",
         url: "https://www.terraform.io/",
      },
      {
         title: "Jenkins",
         category: "DevOps & Cloud",
         icon: <SiJenkins color="#D24939" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-red-400",
         url: "https://www.jenkins.io/",
      },
      {
         title: "ShellScript",
         category: "Programming",
         icon: <FaTerminal color="#4CAF50" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-purple-400",
         url: "https://www.gnu.org/software/bash/",
      },
      {
         title: "Linux",
         category: "OS & Databases",
         icon: <SiLinux color="#FFFFFF" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-indigo-400",
         url: "https://www.linux.org/",
      },
      {
         title: "MacOS",
         category: "OS & Databases",
         icon: <SiApple color="#A1A1A1" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-pink-400",
         url: "https://www.apple.com/macos/",
      },
      {
         title: "Windows",
         category: "OS & Databases",
         icon: <SiWindows color="#0078D7" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-orange-400",
         url: "https://www.microsoft.com/en-us/windows",
      },
      {
         title: "Neo4j",
         category: "OS & Databases",
         icon: <SiNeo4J color="#008CC1" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-teal-400",
         url: "https://neo4j.com/",
      },
      {
         title: "MySQL",
         category: "OS & Databases",
         icon: <SiMysql color="#0072C6" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-blue-300",
         url: "https://www.mysql.com/",
      },
      {
         title: "PostgreSQL",
         category: "OS & Databases",
         icon: <SiPostgresql color="#336791" />,
         proficiency: "Intermediate",
         proficiencyLevel: 75,
         color: "text-green-300",
         url: "https://www.postgresql.org/",
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
