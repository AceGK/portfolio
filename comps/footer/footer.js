import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
	return ( 
		<div className={styles.footer}>
			<Link href="https://github.com/AceGK">
				<a><i className="icon-github" title="Github"></i></a>
			</Link>
			<Link href="https://www.linkedin.com/in/acekisch/">
				<a><i className="icon-linkedin" title="Linkedin"></i></a>
			</Link>
		</div>
	);
}
 
export default Footer;