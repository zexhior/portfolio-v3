import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FaBriefcase, FaHome, FaMoon, FaPen, FaPhone, FaSun } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiStudentBold } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

const Nav = () => {
  const navLink = [
    {
      label: "Accueil",
      path: "/",
      icon: <FaHome size={20} />,
    },
    {
      label: "Compétences",
      path: "/skills",
      icon: <FaPen size={20} />,
    },
    {
      label: "Parcours",
      path: "/parcours",
      icon: <PiStudentBold size={20} />,
    },
    {
      label: "Expériences",
      path: "/experiences",
      icon: <FaBriefcase size={20} />,
    },
    {
      label: "Contact",
      path: "/contacts",
      icon: <FaPhone size={20} />,
    },
  ];

  const [lang, setLang] = useState<"EN" | "FR">("FR");
  const langs = ["FR", "EN"];
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scroll, setScroll] = useState(0);

  const handlerScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        className={`${
          scroll > 0
            ? "bg-slate-600/50 rounded-full translate-y-1 backdrop-blur-xl border-slate-200/50 border-2"
            : "translate-y-0"
        } mx-auto flex w-full px-5 md:max-w-4/5 items-center justify-between py-2 md:px-2 transition-all ease-in duration-75`}
      >
        <div className="flex items-center gap-4">
          <p>Logo</p>
          <Select
            defaultValue={lang}
            onValueChange={(value: "EN" | "FR") => {
              setLang(value);
            }}
          >
            <SelectTrigger value={lang} className="bg-transparent border border-white">
              {lang}
            </SelectTrigger>
            <SelectContent className="bg-transparent border border-white" position="popper">
              <SelectGroup>
                {langs.map((lg) => {
                  return (
                    <SelectItem key={lg} value={lg} className="text-white bg-transparent py-2">
                      <SelectValue className="active:bg-slate-">{lg}</SelectValue>
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex border border-white rounded-full">
            <div
              className={`${
                theme === "light" ? "bg-white" : ""
              } p-2  rounded-[100%]  transition-all ease-in duration-200`}
              onClick={() => setTheme("light")}
            >
              <FaSun color={theme === "light" ? "black" : "white"} size={20} />
            </div>
            <div
              className={`${
                theme === "dark" ? "bg-white" : ""
              } p-2  rounded-[100%] transition-all ease-in duration-200`}
              onClick={() => setTheme("dark")}
            >
              <FaMoon color={theme === "dark" ? "black" : "white"} size={20} />
            </div>
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navLink.map((nav) => {
                return (
                  <NavigationMenuItem key={`desktop-${nav.label}`}>
                    <NavigationMenuLink className="hover:bg-blue-500/50 transition-all ease-in duration-75 cursor-pointer">
                      {nav.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet>
            <SheetTrigger className="border border-white p-2 rounded-md flex md:hidden">
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent className="px-5 pt-15 text-white bg-primary border-0 shadow-[0_0_10px] shadow-slate-200/50">
              <nav className="flex flex-col gap-4 border-b border-slate-700 pb-5">
                {navLink.map((nav) => {
                  return (
                    <Link
                      key={`mobile-${nav.label}`}
                      to={nav.path}
                      className="flex gap-5 items-center py-5"
                    >
                      {nav.icon}
                      {nav.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Nav;
