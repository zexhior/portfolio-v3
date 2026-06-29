import type { ReactNode } from "react";
import {
  FaBriefcase,
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaPen,
  FaPhone,
} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

const size = 20;

export const icons: Record<string, ReactNode> = {
  fahome: <FaHome size={size} />,
  fapne: <FaPen size={size} />,
  pistudentbold: <PiStudentBold size={size} />,
  fabriefcase: <FaBriefcase size={size} />,
  faphone: <FaPhone size={size} />,
  fafacebook: <FaFacebook size={size} />,
  falinkedin: <FaLinkedin size={size} />,
  fagithub: <FaGithub size={size} />,
};
