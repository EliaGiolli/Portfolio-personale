// src/pages/projects/ProjectsLayout.tsx

//External libs
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
//Internal imports
import { useThemeStore } from "../../store/store";
//Components
import Card from "../../components/Card";
//Icons
import { CgBrowser } from "react-icons/cg";
import { BsServer } from "react-icons/bs";
//Types
import { CardVariants } from "../../types/enums";

export default function ProjectPage() {
  const initialTheme = useThemeStore((state) => state.initialTheme);
  const MotionCard = motion(Card);
  const { t } = useTranslation("common");

  const isDark = initialTheme === "dark";

  const iconClasses = isDark
    ? "text-cyan-500 hover:text-cyan-700 p-2 text-4xl transition-colors duration-300"
    : "text-blue-600 hover:text-blue-700 p-2 text-4xl transition-colors duration-300";

  return (
    <section className="min-h-screen px-8 my-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1
          className={`text-3xl md:text-4xl font-extrabold leading-tight ${
            isDark ? "text-cyan-300" : "text-blue-600"
          }`}
        >
          {t("projectPage.title")}
        </h1>
        <p
          className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {t("projectPage.paragraph")}
        </p>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col justify-center gap-8 mb-8 text-lg font-medium">
        {/* Frontend Card */}
        <MotionCard
          variant={CardVariants.project}
          className="min-w-[500px]"
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex gap-6 items-center text-center">
            <CgBrowser size={50} className={iconClasses} />
            <NavLink
              to="frontend"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-400"
              }
            >
              Front-end
            </NavLink>
          </div>
        </MotionCard>

        {/* Backend Card */}
        <MotionCard
          variant={CardVariants.project}
          className="min-w-[500px]"
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex gap-6 items-center text-center">
            <BsServer size={50} className={iconClasses} />
            <NavLink
              to="backend"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline"
                  : "text-gray-500 hover:text-blue-400"
              }
            >
              Back-end
            </NavLink>
          </div>
        </MotionCard>
      </div>

      <Outlet />
    </section>
  );
}
