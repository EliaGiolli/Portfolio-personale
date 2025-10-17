// ProjectCategoryPage.tsx
//Components
import Card from "../../components/Card";
//Internal imports
import { useThemeStore } from "../../store/store";
//External libs
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
//Data
import { projectsData } from "../../data/projectsData";
//Types
import { ProjectDataTypes } from "../../types/ProjectDataTypes";
import { CardVariants } from "../../types/enums";

export default function ProjectCategoryPage() {
  const { type, tech } = useParams<{ type: string; tech?: string }>();

  // Filters the projects based on thei type (frontend/backend)
  let filteredProjects: ProjectDataTypes[] = projectsData.filter(
    (project) => project.type === type
  );

  // If the type is present, then it filters baed on their technology as well
  if (tech) {
    filteredProjects = filteredProjects.filter((project) =>
      project.technologies.map((t) => t.toLowerCase()).includes(tech.toLowerCase())
    );
  }

  if (filteredProjects.length === 0) {
    return <p className="p-4 text-center">Nessun progetto trovato.</p>;
  }

  const initialTheme = useThemeStore(state => state.initialTheme);
  const MotionCard = motion(Card);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {filteredProjects.map((project) => (
        <MotionCard
          key={project.id}
          variant={CardVariants.project}
          className="border rounded p-4 shadow hover:shadow-lg transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="my-2">{project.description}</p>
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
          <Link
            to={`/projects/${project.type}/${project.technologies[0].toLowerCase()}/${project.slug}`}
            className="text-blue-500 hover:underline"
          >
            Vedi dettagli
          </Link>
        </MotionCard>      
        ))}
    </div>
  );
}
