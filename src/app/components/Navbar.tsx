"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import AccessBeta from "./Accessbeta";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      item: "Home",
      dir: "/#",
    },
    {
      item: "¿Por qué Fuddy?",
      dir: "https://www.fuddy.click/#por-qué-fuddy",
      target: "_blank",
    },

    {
      item: "Newsletter",
      dir: "https://www.fuddy.click/#newsletter",
      target: "_blank",
    },
  ];

  return (
    <>
      <Navbar position="static" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <a href="/#" className="cursor-pointer">
              <Image className="w-28" alt="Fuddy logo" src={logo} />
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden  sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link
              className="hover:text-[#81DD9B] cursor-pointer transition-colors duration-300"
              href="/#"
              color="foreground"
              aria-current="page"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="hover:text-[#81DD9B] cursor-pointer transition-colors duration-300"
              color="foreground"
              href="https://www.fuddy.click/#por-qué-fuddy"
              target="blank"
            >
              ¿Por qué Fuddy?
            </Link>
          </NavbarItem>

          <NavbarItem>
            <a
              href="https://app.fuddy.click/register"
              target="_blank"
              className="bg-[#90FFAF] hover:bg-[#005F04]  py-4 px-8 text-lg text-[#005F04]  rounded-full transition hover:text-[#81DD9B] "
            >
              Unirse
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                target={item.target}
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full hover:text-[#81DD9B] cursor-pointer transition-colors duration-300"
                href={item.dir}
                size="lg"
              >
                {item.item}
              </Link>
            </NavbarMenuItem>
          ))}
          <AccessBeta />
        </NavbarMenu>
      </Navbar>
    </>
  );
}
