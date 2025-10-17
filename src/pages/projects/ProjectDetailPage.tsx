import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import Card from "../../components/Card";
import { useThemeStore } from "../../store/store";
import { projectsData } from "../../data/projectsData";
import { CardVariants } from "../../types/enums";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  //Theme classes
  const initialTheme = useThemeStore((state) => state.initialTheme);
  const isDark = initialTheme === 'dark';

  const { t } = useTranslation("common");

  if (!project) {
    return (
      <div className="p-6 text-center text-red-200">
        <h2 className="text-2xl text-red-500">{t("projectDetailsPage.error")}</h2>
      </div>
    );
  }

  const key = project.title
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[^a-z0-9]/gi, "");

  return (
    <Card variant={CardVariants.project} className="p-6 max-w-2xl mx-auto">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-xl shadow-md mb-6 max-h-[350px] w-full object-cover"
      />
      <h1
        className={`text-3xl md:text-4xl font-extrabold leading-tight mb-5 ${
          isDark ? "text-cyan-300" : "text-blue-600"
        }`}
      >
        {project.title}
      </h1>
      <p
        className={`${
          isDark ? "text-gray-300" : "text-gray-700"
        } text-md md:text-lg my-5`}
      >
        {t(`projects.${key}.long`)}
      </p>
      <div className="flex gap-4">
        {project.githubLink && (
          <motion.a
            className={`${
              isDark
                ? "text-cyan-400 hover:text-cyan-500"
                : "text-blue-500 hover:text-blue-700"
            }`}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
          >
            GitHub
          </motion.a>
        )}
        {project.demoLink && (
          <motion.a
            className={`${
              isDark
                ? "text-cyan-400 hover:text-cyan-500"
                : "text-blue-500 hover:text-blue-700"
            }`}
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
          >
            Demo
          </motion.a>
        )}
      </div>
    </Card>
  );
}
