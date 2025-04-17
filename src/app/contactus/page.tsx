"use client";
import { useState } from "react";
import { Contactus } from "../components/contact";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/resizable-navbar";
export default function Contact() {
  const navItems = [
        {
          name: "About",
          link: "#about",
        },
        {
          name: "Features",
          link: "#features",
        },
        {
          name: "Contact",
          link: "#contact",
        },
      ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="bg-neutral-950 flex h-screen
    w-[100%]">
      <Navbar>
              {/* Desktop Navigation */}
              <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                  {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
                  <NavbarButton variant="primary">Download</NavbarButton>
                </div>
              </NavBody>
      
              {/* Mobile Navigation */}
              <MobileNav>
                <MobileNavHeader>
                  <NavbarLogo />
                  <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  />
                </MobileNavHeader>
      
                <MobileNavMenu
                  isOpen={isMobileMenuOpen}
                  onClose={() => setIsMobileMenuOpen(false)}
                >
                  {navItems.map((item, idx) => (
                    <a
                      key={`mobile-link-${idx}`}
                      href={item.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="block">{item.name}</span>
                    </a>
                  ))}
                  <div className="flex w-full flex-col gap-4">
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      className="w-full"
                    >
                      Book a call
                    </NavbarButton>
                  </div>
                </MobileNavMenu>
              </MobileNav>
      </Navbar> 
      <div className=" w-full h-screen flex items-center justify-center">
        <Contactus/>
      </div>
    </div>
  );
}
