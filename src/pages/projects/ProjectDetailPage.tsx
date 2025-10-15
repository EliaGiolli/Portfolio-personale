import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";

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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="rounded-xl shadow-md mb-6"
      />
      <p className="text-gray-700 mb-4">{project.longDescription}</p>
      <div className="flex gap-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
