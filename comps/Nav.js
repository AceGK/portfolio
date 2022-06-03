import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter(); // using router to mimick react's NavLink ('active' class link state for styling) 

    const activeLi = styles.activeLi;
    const active = styles.active;

    return ( 
        <div className={styles.nav}>
            <ul>
                <li className={router.pathname == "/about" ? activeLi : ""}>
                    <Link href="/about">
                        <a className={router.pathname == "/about" ? active : ""}>
                            <i className="icon-info_outline"></i>
                            <h3>About</h3>
                        </a>
                    </Link>
                </li>
                <li className={router.pathname == "/projects" ? activeLi : ""}>
                    <Link href="/projects">
                        <a className={router.pathname == "/projects" ? active : ""}>
                            <i className="icon-code2"></i>
                            <h3>Projects</h3>
                        </a>
                    </Link>
                </li>
                <li className={router.pathname == "/contact" ? activeLi : ""}>
                    <Link href="/contact">
                        <a className={router.pathname == "/contact" ? active : ""}>
                            <i className="icon-mail"></i>
                            <h3>Contact</h3>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;