import { Project } from "@/pages/projects";
import Card from "./ui/card";
import classes from "./projectCard.module.css";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card elevation={2}>
      <div className={classes.wrapper}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <figure>
          <picture className={classes.projectPicture}>
            <img
              src={project.imageUrl}
              alt={`An image describing the ${project.name} project`}
            />
          </picture>
        </figure>
      </div>
    </Card>
  );
};

export default ProjectCard;
