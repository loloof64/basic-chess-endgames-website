"use client";

import { useState, useEffect } from "react";
import SideNav from "@/app/ui/SideNav";
import { Bars4Icon } from "@heroicons/react/16/solid";

import pages from "@/app/ui/pages";
import { useTranslations } from "next-intl";

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="p-4 border-b border-gray-300">
      {isMobile ? (
        <>
          <button onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
            <Bars4Icon className="h-6 w-6" />
          </button>
          {isSideNavOpen && <SideNav close={() => setIsSideNavOpen(false)} />}
        </>
      ) : (
        <div className="flex gap-4">
          {pages.map((page) => (
            <a key={page.path} href={page.path}>
              {t(page.translationKey)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
