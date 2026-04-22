"use client";

import { useTranslation } from "./LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative flex justify-center w-full px-5 lg:px-8 pt-6 pb-8 lg:py-8 bg-transparent">
      <p className="text-xs leading-[18px] lg:text-[13px] lg:leading-5 text-text-secondary relative z-[2]">
        {t.footer.copy}
      </p>
    </footer>
  );
}
