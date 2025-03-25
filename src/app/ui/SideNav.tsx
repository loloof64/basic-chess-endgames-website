"use client";

import { useTranslations } from "next-intl";
import pages from "@/app/ui/pages";
import Link from "next/link";

export default function SideNav({ close }: { close: () => void }) {
  const t = useTranslations();
  return (
    <div
      className="fixed inset-0 bg-gray-500 opacity-80 flex items-center justify-center"
      onClick={close}
    >
      <div className="bg-white p-4 rounded-lg">
        <ul className="mt-2 space-y-2 text-gray-600">
          {pages.map((page) => (
            <li key={page.path}>
              <Link href={page.path}>{t(page.translationKey)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
