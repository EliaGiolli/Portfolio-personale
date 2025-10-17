//External libs
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
//Components
import Card from "../../components/Card";
//Internal imports
import { useThemeStore } from "../../store/store";
//Data
import { projectsData } from "../../data/projectsData";
//Types
import { CardVariants } from "../../types/enums";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2>Progetto non trovato</h2>
      </div>
    );
  }

  const initialTheme = useThemeStore(state => state.initialTheme);


  return (
    <Card 
      variant={CardVariants.project}
      className="p-6 max-w-2xl mx-auto"
      >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-xl shadow-md mb-6 max-h-[350px] w-full object-cover"
      />
      <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight  mb-5
          ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>{project.title}
      </h1>
      <p className={`
        ${initialTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} 
        text-md md:text-lg my-5`}>
        {project.longDescription}
      </p>
      <div className="flex gap-4">
        {project.githubLink && (
          <motion.a
            className={`${initialTheme === 'dark' ? 'text-cyan-400 hover:text-cyan-500' : 'text-blue-500 hover:text-blue-700'}`}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
          >
            GitHub
          </motion.a>
        )}
        {project.demoLink && (
          <motion.a
            className={`${initialTheme === 'dark' ? 'text-cyan-400 hover:text-cyan-500' : 'text-blue-500 hover:text-blue-700'}`}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{scale: 1.1}}
            whileFocus={{scale: 1.1}}
          >
            Demo
          </motion.a>
        )}
      </div>
    </Card>
  );
}
