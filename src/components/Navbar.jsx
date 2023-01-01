import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <IconButton onClick={toggleDarkMode} aria-label="toggle darkmode">
          {darkMode ? (
            <DarkModeIcon className="text-[#F7AB0A]" />
          ) : (
            <LightModeIcon className="text-[#F7AB0A]" />
          )}
        </IconButton>
        <SocialIcon
          url="https://github.com/AhmadNasser04"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ahmad-nasser-034222223/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center space-x-5 text-gray-400 p-3 cursor-pointer"
      >
        <a
          title="Go to contact section"
          className="text-[#808080] flex items-center text-center justify-center space-x-5"
          href="#contact"
        >
          <EmailIcon />
          <p className="uppercase hidden md:inline-flex text-sm">
            Get In Touch
          </p>
        </a>
        <a
          title="Download Resume"
          className="flex items-center text-center justify-center text-[#808080] space-x-5"
          href="https://drive.google.com/file/d/126k5bmhyd-MwcsJEpMw4DZKjE5hVIFZI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InsertDriveFileIcon />
          <p className="uppercase hidden md:inline-flex text-sm">Resume</p>
        </a>
      </motion.div>
    </header>
  );
}
