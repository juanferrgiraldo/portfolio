import classes from "./card.module.css";

const Card: React.FC<{ elevation: number; children?: React.ReactNode }> = ({
  elevation = 2,
  children,
}) => {
  const boxShadow = `var(--elevation-${elevation})`;
  return (
    <div style={{ boxShadow }} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
