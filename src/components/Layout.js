
import Head from 'next/head';
import Hero from './hero';
import Footer from "./footer";
import Nav from "./nav";
import SecondaryNav from './nav/SecondaryNav';



const Layout = ({ children }) => {
	return (
		<div className="content">
			<Head>
				<title>Ace Kisch</title>
				<meta name="description" content="Software Engineer" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SecondaryNav />
			<Hero />
			<Nav />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;