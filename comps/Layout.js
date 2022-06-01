
import Head from 'next/head';
import Hero from './hero';
import Footer from "./Footer";
import Nav from "./Nav";



const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Head>
                <title>Ace Kisch</title>
                <meta name="description" content="Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Hero/>
            <Nav/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;