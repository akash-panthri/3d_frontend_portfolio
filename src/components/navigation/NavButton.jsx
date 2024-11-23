import {Home, Github, Linkedin, NotebookText, Palette, Phone, User,Mail  } from "lucide-react";
import Link from "next/link";
import React from "react";

function NavButton({ x, y, label, link, icon, newTab }) {
  const getIcon = (icon) => {
    switch (icon) {
      case "home":
        return <Home className="w-full h-auto" strokeWidth={1.5} />;
      case "about":
        return <User className="w-full h-auto" strokeWidth={1.5} />;
      case "projects":
        return <Palette className="w-full h-auto" strokeWidth={1.5} />;
      case "contact":
        return <Phone className="w-full h-auto" strokeWidth={1.5} />;
      case "github":
        return <Github className="w-full h-auto" strokeWidth={1.5} />;
      case "linkedin":
        return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      case "mail":
        return <Mail  className="w-full h-auto" strokeWidth={1.5} />;
      case "resume":
        return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
  
      default:
        return <Home className="w-full h-auto" strokeWidth={1.5} />;
    }
  };
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground  rounded-full flex items-center justify-center"
        aria-label={label}
      >
      <span className="relative  w-14 h-14 p-4">

        {getIcon(icon)}
      </span>
      </Link>
    </div>
  );
}

export default NavButton;
