// src/pages/ContactsPage.tsx

// Components
import FormComponent from "../layouts/FormComponent";

// Internal imports
import { useThemeStore } from "../store/store";

// External libs
import { useTranslation } from "react-i18next";

export default function ContactsPage() {
  const { t } = useTranslation("common");
  const initialTheme = useThemeStore((state) => state.initialTheme);
  const isDark = initialTheme === "dark";

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 my-10">
      {/* Titolo e testo introduttivo */}
      <div className="p-6">
        <h1
          className={`text-3xl md:text-4xl font-extrabold leading-tight p-3 ${
            isDark ? "text-cyan-300" : "text-blue-600"
          }`}
        >
          {t("contactpage.title")}
        </h1>

        <p
          className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {t("contactpage.paragraph")}
        </p>
      </div>

      {/* Form di contatto */}
      <FormComponent />
    </section>
  );
}
