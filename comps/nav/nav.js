import Link from 'next/link';
import styles from './nav.module.scss';
import { useRouter } from 'next/router';

export default function Navbar() {

  const router = useRouter(); // using router to mimick react's NavLink ('active' class link state for styling) 

  const activeLi = styles.activeLi;
  const active = styles.active;

  return (
    <div className={styles.nav}>
      <ul>
        <li className={router.pathname == "/about" ? activeLi : ""}>
          <Link
            href="/about"
            className={router.pathname == "/about" ? active : ""}
          >
            <i className="icon-info_outline"></i>
            <h3>About</h3>
          </Link>
        </li>

        <li className={router.pathname == "/projects" ? activeLi : ""}>
          <Link 
            href="/projects"
            className={router.pathname == "/projects" ? active : ""}
          >
              <i className="icon-code2"></i>
              <h3>Projects</h3>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? activeLi : ""}>
          <Link 
            href="/contact"
            className={router.pathname == "/contact" ? active : ""}>

              <i className="icon-mail"></i>
              <h3>Contact</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function NavItem() {
  const router = useRouter(); // using router to mimick react's NavLink ('active' class link state for styling) 

  const activeLi = styles.activeLi;
  const active = styles.active;

  return (
    <li className={router.pathname == props.href ? activeLi : ""}>
      <Link
        href={props.href}
        className={router.pathname == props.href ? active : ""}
      >
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
      </Link>
    </li>
  )
}