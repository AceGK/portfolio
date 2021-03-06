const About = () => {
    return ( 
      <div className="page-container">
        <div className="about"> 
          <p>Hello!</p>
          <p>My name is Ace and I live in San Jose, CA. 
            I am a full-stack software engineer
            with a focus on front-end web development. 
            Below is a list of technologies that I use frequently. 
          </p>
        </div>
        
        <div className="skillsBox">
          <h2>Dev</h2>
            <div>
              <i className="icon-html5" title="HTML5"></i>
              <i className="icon-css3" title="CSS3"></i>
              <i style={{color:"#CC6699"}} className="icon-sass" title="SCSS"></i> 
              <i className="icon-javascript" title="Javascript"></i>
              <i className="icon-typescript" title="Typescript"></i>
              <i className="icon-jquery" title="jQuery"></i>
              <i className="icon-react" title="React"></i>
              {/* <i className="icon-redux" title="Redux"></i> */}
              <i className="icon-next-js" title="Next.js"></i>
              <i className="icon-node-js" title="Node.js"></i>
              <i className="icon-php" title="PHP"></i>
              <i className="icon-mysql" title="MySQL"></i>
              <i className="icon-mongodb" title="MongoDB"></i>
            </div>
          </div>

          {/* <div className="skillsBox">
            <h2>Data</h2>
              <div>
                <i className="icon-mysql" title="MySQL"></i>
                <i className="icon-mongodb" title="MongoDB"></i>
                <i className="icon-firebase" title="Firebase"></i>
                <i className="icon-postgre" title="PostgreSQL"></i>
                <i className="icon-auth0" title="Auth0"></i>
              </div>
          </div> */}

          <div className="skillsBox">
            <h2>Design</h2>
              <div>
                <i className="icon-photoshop" title="Photoshop"></i>
                <i className="icon-lightroom" title="Lightroom"></i>
                <i className="icon-illustrator" title="Illustrator"></i>
                <i className="icon-xd" title="InDesign"></i>
                <i className="icon-sketch" title="Sketch" style={{color:"#F7B500"}}></i>
                <i className="icon-figma" title="Figma"></i>
              </div>
          </div>

          <div className="skillsBox">
            <h2>Deploy</h2>
              <div>
              <i className="icon-netlify" title="Netlify"></i>
              <i className="icon-vercel" title="Vercel" style={{color:'#fff'}}></i>
              <i className="icon-digitalocean" title="DigitalOcean"></i>
              <i className="icon-aws" title="AWS"></i>
              <i className="icon-heroku" title="Heroku"></i>
              <i className="icon-wpengine" title="WPEngine"></i>
                
              </div>
          </div>
      </div>
     );
}
 
export default About;