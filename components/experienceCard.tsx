import { Company } from "@/pages/experience";
import Image from "next/image";
import Card from "./ui/card";
import classes from "./experienceCard.module.css";

const ExperienceCard: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <Card elevation={2}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>{company.name}</h3>
        <section className={classes.role}>
          <p>{company.role}</p>
          <p>
            {company.initialDate} - {company.finalDate}
          </p>
        </section>
        <section className={classes.bodyWrapper}>
          <figure>
            <Image
              src={company.thumbnailUrl}
              alt={`Logo of a company called ${company.name}`}
              width={50}
              height={50}
            />
          </figure>
          <div>
            <ul>
              {company.roleDescription.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Card>
  );
};

export default ExperienceCard;
