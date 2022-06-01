import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter(); // using router to mimick react's NavLink ('active' class link state for styling) 

    return ( 
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? "active" : ""}>
                            <i className="icon-info_outline">Icon</i>
                            <h3>About</h3>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className={router.pathname == "/projects" ? "active" : ""}>
                            <i className="icon-code2">Icon</i>
                            <h3>Projects</h3>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={router.pathname == "/contact" ? "active" : ""}>
                            <i className="icon-mail_outline">Icon</i>
                            <h3>Contact</h3>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;