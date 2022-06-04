
import Head from 'next/head';
import Hero from './Hero';
import Footer from "./Footer";
import Nav from "./Nav";
import Nav2 from './Nav2';



const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Head>
                <title>Ace Kisch</title>
                <meta name="description" content="Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
                
            </Head>
            <Nav2/>
            <Hero/>
            <Nav/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;