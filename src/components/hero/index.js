import Link from 'next/link'
import styles from './Hero.module.scss'

function Hero() {
	return (

		<Link href="/">
			<div className={styles.hero}>
				<div>
					<h1>
						Ace Kisch
					</h1>
				</div>
				<h2>
					Software Engineer
				</h2>
			</div>
		</Link>
	);
}

export default Hero;
