import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./header.module.css";
import { getNavItems } from "./main-navbar-data";

export default function Header() {
  const router = useRouter();
  const navItems = getNavItems();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Juan F. Giraldo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={
                router.pathname === navItem.route ? classes["active-link"] : ""
              }
            >
              <Link href={navItem.route}>{navItem.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
