//External libs
import { useParams } from "react-router-dom";
//Components
import Card from "../../components/Card";
import { ModalButton } from "../../components/ModalButton";
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
    <Card variant={CardVariants.project}
      className="p-6 max-w-4xl mx-auto">
      <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight  mb-5
          ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-xl shadow-md mb-6 max-h-[400px] w-full object-cover"
      />
      <p className={`${initialTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-md md:text-lg mb-4`}>{project.longDescription}</p>
      <div className="flex gap-4">
        {project.githubLink && (
          <ModalButton
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ModalButton>
        )}
        {project.demoLink && (
          <ModalButton
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </ModalButton>
        )}
      </div>
    </Card>
  );
}
