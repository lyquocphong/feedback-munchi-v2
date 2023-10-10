"use client";

import "./feedbackLayout.css";

import { ReactNode, useEffect, useState } from "react";

import { NextIntlClientProvider } from "next-intl";
import engTranslation from "../../../../translation/en.json";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fi" }, { locale: "es" }];
}

export default function LocaleLayout({
  children,
  params: { locale: propLocale }, // Rename prop.locale to avoid naming conflicts
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const [locale, setLocale] = useState(propLocale); // Initialize with the prop value
  const [messages, setMessages] = useState(engTranslation); // Initialize with an english as default

  const handleLanguageChange = (event: any) => {
    const newLocale = event.target.value;
    setLocale(newLocale); // Update the selected locale
    import(`../../../../translation/${newLocale}.json`)
      .then((module) => {
        setMessages(module.default);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Load initial translation messages based on the selected locale
    handleLanguageChange({ target: { value: propLocale } });
  }, [propLocale]);

  const availableLanguages = [
    { locale: "en", label: "English" },
    { locale: "fi", label: "Suomi" },
    { locale: "es", label: "Estonian" },
  ];

  return (
    <html lang={locale}>
      <body>
        <div className="mobile">
          <div className="language-selector">
            <select
              id="languageSelect"
              onChange={handleLanguageChange}
              value={locale}
            >
              {availableLanguages.map((langOption) => (
                <option key={langOption.locale} value={langOption.locale}>
                  {langOption.label}
                </option>
              ))}
            </select>
          </div>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
