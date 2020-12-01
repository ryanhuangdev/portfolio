import React from "react"
import { FaCode, FaAdobe, FaGithub } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    skills: ['React', 'Apollo', 'GraphQL', 'Relay', 'JavaScript', 'CSS', 'HTML', 'Cypress', 'Jest'],
  },
  {
    id: 2,
    icon: <FaGithub className="service-icon" />,
    title: "software development",
    skills: ['SCRUM Master', 'Splunk', 'Jenkins', 'Github', 'Docker', 'Jira'],
  },
  {
    id: 3,
    icon: <FaAdobe className="service-icon" />,
    title: "technology",
    skills: ['Windows', 'MacOS', 'Linux', 'Adobe Lightroom', 'Adobe Photoshop'],
  },
]
