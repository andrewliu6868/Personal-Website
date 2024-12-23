import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import stockImg from "@/public/placeholder1.png";
import stockImage from "@/public/placeholder2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Automation Developer",
    location: "Waterloo, ON",
    description:
      "I worked as an Automation Developer at Trustwave Holdings.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - Dec 2022",
  },
  {
    title: "Data Analyst",
    location: "Vancouver, BC",
    description:
      "I worked as a data analyst for BC Hydro. Additionally, I helped out as a firmware technician",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - August 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Montreal, QC",
    description:
      "I worked as a full stack developer at an estate software company, Estateably.",
    icon: React.createElement(FaReact),
    date: "Jan 2024 - April 2024",
  },
] as const;

export const projectsData = [
  {
    title: "DoseDiary - Medication Reminder Android App",
    description:
      "A native android app designed to help users set reminders to take medication, track their refills, and provide weekly medication reports presentable to your local health provider",
    tags: ["Jetpack Compose", "Kotlin", "Room DB", "Hilt", "Material UI"],
    imageUrl: stockImg,
  },
  {
    title: "PollenSense - Pollen Tracker",
    description:
      "A cross-platform mobile application to help users with pollen allergies identify local areas of high pollen content, produce pollen forecasts relative to their location, and provide symptom tracking capabilities",
    tags: ["React Native", "PostgreSQL", "Node.js", "Ambee API", "Google Cloud Services"],
    imageUrl: stockImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;