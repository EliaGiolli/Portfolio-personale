import Card from "../../components/Card";
import { useThemeStore } from "../../store/store";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projectsData";
import { ProjectDataTypes } from "../../types/ProjectDataTypes";
import { CardVariants } from "../../types/enums";

export default function ProjectCategoryPage() {
  const { type, tech } = useParams<{ type: string; tech?: string }>();
  const initialTheme = useThemeStore((state) => state.initialTheme);
  const MotionCard = motion(Card);
  const { t } = useTranslation("common");

  // Filter project by type and technology
  let filteredProjects: ProjectDataTypes[] = projectsData.filter(
    (project) => project.type === type
  );

  if (tech) {
    filteredProjects = filteredProjects.filter((project) =>
      project.technologies
        .map((t) => t.toLowerCase())
        .includes(tech.toLowerCase())
    );
  }

  return (
    <>
      {filteredProjects.length === 0 ? (
        <p className="p-4 text-center">{t("projectCategoryPage.error")}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {filteredProjects.map((project) => {
            const key = project.title
              .toLowerCase()
              .replace(/\s/g, "")
              .replace(/[^a-z0-9]/gi, "");

            return (
              <MotionCard
                key={key}
                variant={CardVariants.project}
                className="border rounded p-4 shadow hover:shadow-lg transition w-[25rem] h-[30rem] flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h2 className={`text-xl font-semibold mb-2 ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'}`}>{project.title}</h2>
                   <p className="my-3">{t(`projects.${key}.short`)}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`${
                          initialTheme === "dark"
                            ? "bg-blue-100 text-gray-700"
                            : "bg-gray-200"
                        } px-2 py-1 rounded text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/projects/${project.type}/${project.technologies[0].toLowerCase()}/${project.slug}`}
                  className="text-blue-500 hover:underline mt-auto"
                >
                  {t("projectCategoryPage.details")}
                </Link>
              </MotionCard>

            );
          })}
        </div>
      )}
    </>
  );
}
