import ExperienceCard from "@/components/experienceCard";
import classes from "./experience.module.css";

export type Company = {
  id: string;
  name: string;
  thumbnailUrl: string;
  role: string;
  roleDescription: string[];
  initialDate: string;
  finalDate: string;
};

export default function Experience() {
  const companies: Company[] = [
    {
      id: `002-${Date.now().toString()}`,
      name: "Experimentality Labs",
      thumbnailUrl: "/images/expe-logo.jpeg",
      role: "Software Developer",
      roleDescription: [
        "Rebuild a frontend project using Angular2+",
        "Use terraform and AWS services to perform cloud scheduled actions",
        "Build an home services app with Ionic v4",
        "Migrate a full insurances module from AngularJS to Angular2+",
      ],
      initialDate: "02-2019",
      finalDate: "01-2022",
    },
    {
      id: `001-${Date.now().toString()}`,
      name: "LIS UdeA",
      thumbnailUrl: "/images/lis-logo.png",
      role: "Software Engineer",
      roleDescription: [
        "Build a schedulling app with Angular2+ and NodeJS",
        "OnPremise networks support and maintenance",
      ],
      initialDate: "06-2018",
      finalDate: "02-2019",
    },
  ];
  return (
    <>
      <h1 className={classes.title}>Experience</h1>
      <ul className={classes.companiesList}>
        {companies.map((company) => (
          <ExperienceCard key={company.id} company={company} />
        ))}
      </ul>
    </>
  );
}
