import React, { useEffect, useState, type ReactNode } from "react";
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
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "@/assets/h-logo-light.png";
import { motion } from "framer-motion";
import type { Nav } from "@/lib/type";

interface PropsNav {
  lang: "fr" | "en";
  setLang: React.Dispatch<React.SetStateAction<"fr" | "en">>;
  nav?: Nav;
}

const NavComponent: React.FC<PropsNav> = ({ nav, lang, setLang }) => {
  const langs = ["fr", "en"];

  const [scroll, setScroll] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerScroll = () => {
    setScroll(window.scrollY);
  };

  const size = 35;
  const socialNetworks: Record<string, ReactNode> = {
    fafacebook: <FaFacebook size={size} />,
    falinkedin: <FaLinkedin size={size} />,
    fagithub: <FaGithub size={size} />,
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
            ? "bg-slate-600/50 translate-y-1 backdrop-blur-xl border-slate-200/50 border-2"
            : "translate-y-0"
        } mx-auto flex w-full px-5 md:max-w-4/5 items-center justify-between py-2 md:px-2 transition-all ease-in duration-75 rounded-full`}
      >
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" width={50} height={50} />
          <Select
            defaultValue={lang}
            onValueChange={(value: "en" | "fr") => {
              setLang(value);
            }}
          >
            <SelectTrigger value={lang} className="bg-transparent border border-white">
              {lang}
            </SelectTrigger>
            <SelectContent className="bg-transparent border border-white" position="popper">
              <SelectGroup>
                {langs?.map((lg) => {
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {nav?.list?.map((nav) => {
                return (
                  <NavigationMenuItem key={`desktop-${nav.label}`}>
                    <NavigationMenuLink
                      className="hover:bg-slate-500/50 bg-transparent transition-all ease-in duration-200 cursor-pointer"
                      href={nav.path}
                    >
                      {nav.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="border border-white p-2 rounded-md flex md:hidden"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <RxHamburgerMenu />
            </SheetTrigger>
            <SheetContent className=" text-white bg-primary/35 backdrop-blur-3xl border-0 transition-all ease-in duration-350 p-5">
              <nav className="flex flex-col gap-2 border-b border-slate-700 pb-5">
                {nav?.list?.map((nav, index) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        opacity: {
                          delay: index * 0.02,
                          duration: 0.2,
                        },
                        x: {
                          delay: index * 0.02,
                          duration: 0.2,
                        },
                      }}
                      key={`mobile-${nav.label}`}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <a
                        href={nav.path}
                        className="flex gap-5 items-center py-5  uppercase text-xl font-bold tracking-widest text-outfit"
                      >
                        {nav.label}
                      </a>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="flex gap-5 w-full mt-2">
                {nav?.social?.map((socialNetwork) => {
                  return (
                    <a
                      key={socialNetwork.link}
                      href={socialNetwork.link}
                      className=" text-slate-100 hover:text-slate-500"
                    >
                      {socialNetworks[socialNetwork.icon.toLocaleLowerCase()]}
                    </a>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
