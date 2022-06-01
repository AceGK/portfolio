import Link from 'next/link'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <Link href="https://github.com/AceGK">Github</Link>
            <Link href="https://www.linkedin.com/in/acekisch/">LinkedIn</Link>
        </div>
     );
}
 
export default Footer;