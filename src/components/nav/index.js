import Link from 'next/link';
import styles from './Nav.module.scss';
import { useRouter } from 'next/router';

export default function Navbar() {

  return (
    <div className={styles.nav}>
      <ul>
        <NavItem href="/about" icon="icon-info" title="about"/>
        <NavItem href="/projects" icon="icon-code-close" title="projects"/>
        <NavItem href="/contact" icon="icon-mail" title="contact"/>
      </ul>
    </div>
  );
}

function NavItem(props) {
  
  const router = useRouter(); // using router to mimick react's NavLink ('active' class link state for styling) 

  const activeLi = styles.activeLi;
  const active = styles.active;

  return (
    <li className={router.pathname == props.href ? activeLi : ""}>
      <Link
        href={router.pathname == props.href ? '/' : props.href}
        className={router.pathname == props.href ? active : ""}
      >
        <i className={props.icon}></i>
        <h3>{props.title}</h3>
      </Link>
    </li>
  )
}