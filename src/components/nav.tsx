import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

const Nav = () => {
  const navLink = [
    {
      label: "Accueil",
      path: "/",
    },
    {
      label: "Compétences",
      path: "/skills",
    },
    {
      label: "Parcours",
      path: "/parcours",
    },
    {
      label: "Expériences",
      path: "/experiences",
    },
    {
      label: "Contact",
      path: "/contacts",
    },
  ];

  const [lang, setLang] = useState<"EN" | "FR">("FR");

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <p>Logo</p>
        <Select
          onValueChange={(value: "EN" | "FR") => {
            setLang(value);
          }}
        >
          <SelectTrigger className="bg-transparent border border-slate-200">{lang}</SelectTrigger>
          <SelectContent>
            {["FR", "EN"].map((lg) => {
              return <SelectItem value={lg}>{lg}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {navLink.map((nav) => {
            return (
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:bg-blue-500/50 transition-all ease-in duration-75 cursor-pointer">
                  {nav.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
