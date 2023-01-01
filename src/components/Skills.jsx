import React from "react";
import Js from "../resources/JavaScript_logo.webp";
import Python from "../resources/Python_logo.webp";
import reactLogo from "../resources/react_logo.webp";
import html from "../resources/html_logo.webp";
import css from "../resources/CSS_logo.webp";
import java from "../resources/java_logo.webp";
import mongo from "../resources/mongodb_logo.webp";
import next from "../resources/nextjs_logo.webp";
import strapi from "../resources/strapi_lg.webp";
import vs from "../resources/vs_logo.webp";
import tailwind from "../resources/tailwind_logo.webp";
import firebase from "../resources/firebase_logo.webp";
import mui from "../resources/mui.webp";
import ts from "../resources/ts_logo.webp";
import angular from "../resources/angular_logo.webp";
import { motion } from "framer-motion";
import Skill from "./Skill";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left xl:px-10 min-h-screen justify-center items-center"
    >
      <h1 className="absolute select-none top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h1>

      <h1 className="absolute tracking-[3px] top-36 uppercase text-sm text-gray-500">
        Hover over a skill for current proficiency
      </h1>

      <div className="grid grid-cols-4 gap-5 mt-28 short:mt-44">
        <Skill directionLeft={true} logo={Js} proficiency="Proficient" />
        <Skill directionLeft={true} logo={Python} proficiency="Proficient" />
        <Skill directionLeft={true} logo={reactLogo} proficiency="Proficient" />
        <Skill directionLeft={true} logo={css} proficiency="Proficient" />
        <Skill directionLeft={true} logo={html} proficiency="Proficient" />
        <Skill directionLeft={true} logo={tailwind} proficiency="Proficient" />
        <Skill directionLeft={true} logo={vs} proficiency="Proficient" />
        <Skill directionLeft={true} logo={angular} proficiency="Competent" />
        <Skill logo={ts} proficiency="Competent" />
        <Skill logo={mui} proficiency="Competent" />
        <Skill logo={next} proficiency="Competent" />
        <Skill logo={java} proficiency="Competent" />
        <Skill logo={mongo} proficiency="Competent" />
        <Skill logo={strapi} proficiency="Competent" />
        <Skill logo={firebase} proficiency="Competent" />
      </div>
    </motion.div>
  );
}
