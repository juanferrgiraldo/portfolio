import ProjectCard from "@/components/projectCard";
import classes from "./projects.module.css";

export type Project = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
};

export default function Projects() {
  const projectList: Project[] = [
    {
      id: "001",
      name: "Misa",
      imageUrl: "https://image.com",
      description: "I was hired to...",
    },
    {
      id: "002",
      name: "Wesu",
      imageUrl: "https://image.com",
      description: "I was hired to...",
    },
  ];

  return (
    <ul className={classes.projectList}>
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
}
