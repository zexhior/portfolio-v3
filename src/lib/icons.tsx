import type { ReactNode } from "react";
import { BsTypescript } from "react-icons/bs";
import { DiDjango } from "react-icons/di";
import {
  FaAngular,
  FaBriefcase,
  FaDocker,
  FaFacebook,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaHome,
  FaJs,
  FaLinkedin,
  FaMailBulk,
  FaNode,
  FaPen,
  FaPhone,
  FaPython,
  FaReact,
  FaTrello,
} from "react-icons/fa";
import { FaCss3, FaFlutter, FaHtml5, FaLocationPin } from "react-icons/fa6";
import { IoLogoIonic, IoLogoJavascript } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdonisjs, SiMongodb, SiMysql, SiPostgresql, SiStrapi } from "react-icons/si";

export const icons: Record<string, (size?: number) => ReactNode> = {
  fahome: (size = 20) => <FaHome size={size} />,
  fapne: (size = 20) => <FaPen size={size} />,
  pistudentbold: (size = 20) => <PiStudentBold size={size} />,
  fabriefcase: (size = 20) => <FaBriefcase size={size} />,
  faphone: (size = 20) => <FaPhone size={size} />,
  fafacebook: (size = 20) => <FaFacebook size={size} />,
  falinkedin: (size = 20) => <FaLinkedin size={size} />,
  fagithub: (size = 20) => <FaGithub size={size} />,
  iologojavascript: (size = 20) => <IoLogoJavascript size={size} />,
  bstypescript: (size = 20) => <BsTypescript size={size} />,
  fahtml5: (size = 20) => <FaHtml5 size={size} />,
  facss3: (size = 20) => <FaCss3 size={size} />,
  ritailwindcssfill: (size = 20) => <RiTailwindCssFill size={size} />,
  fareact: (size = 20) => <FaReact size={size} />,
  rinextjsfill: (size = 20) => <RiNextjsFill size={size} />,
  faflutter: (size = 20) => <FaFlutter size={size} />,
  fapython: (size = 20) => <FaPython size={size} />,
  didjango: (size = 20) => <DiDjango size={size} />,
  siadonisjs: (size = 20) => <SiAdonisjs size={size} />,
  fanode: (size = 20) => <FaNode size={size} />,
  sipostgresql: (size = 20) => <SiPostgresql size={size} />,
  simysql: (size = 20) => <SiMysql size={size} />,
  simongodb: (size = 20) => <SiMongodb size={size} />,
  fagitalt: (size = 20) => <FaGitAlt size={size} />,
  fadocker: (size = 20) => <FaDocker size={size} />,
  fatrello: (size = 20) => <FaTrello size={size} />,
  fajs: (size = 20) => <FaJs size={size} />,
  fagitlab: (size = 20) => <FaGitlab size={size} />,
  faangular: (size = 20) => <FaAngular size={size} />,
  fafigma: (size = 20) => <FaFigma size={size} />,
  ioionic: (size = 20) => <IoLogoIonic size={size} />,
  sistrapi: (size = 20) => <SiStrapi size={size} />,
  famailbuld: (size = 20) => (
    <FaMailBulk className="hover:bg-slate-600 transition-all ease-in duration-500" size={size} />
  ),
  falocationpin: (size = 20) => (
    <FaLocationPin className="hover:bg-slate-600 transition-all ease-in duration-500" size={size} />
  ),
};
