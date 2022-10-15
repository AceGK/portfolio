import React, { useState } from 'react'

export default function About() {
  
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
              <Icon className="icon-html5" title="HTML5" />
              <Icon className="icon-css3" title="CSS3" />
              <Icon style={{color:"#CC6699"}} className="icon-sass" title="SCSS" /> 
              <Icon className="icon-javascript" title="Javascript" />
              <Icon className="icon-typescript" title="Typescript" />
              <Icon className="icon-jquery" title="jQuery" />
              <Icon className="icon-react" title="React" />
              {/* <Icon className="icon-redux" title="Redux" /> */}
              <Icon className="icon-next-js" title="Next.js" />
              <Icon className="icon-node-js" title="Node.js" />
              <Icon className="icon-php" title="PHP" />
              <Icon className="icon-mysql" title="MySQL" />
              <Icon className="icon-mongodb" title="MongoDB" />
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
                <Icon className="icon-photoshop" title="Photoshop" />
                <Icon className="icon-lightroom" title="Lightroom" />
                <Icon className="icon-illustrator" title="Illustrator" />
                <Icon className="icon-xd" title="Experience Design" />
                <Icon className="icon-sketch" title="Sketch" style={{color:"#F7B500"}} />
                <Icon className="icon-figma" title="Figma" />
              </div>
          </div>

          <div className="skillsBox">
            <h2>Deploy</h2>
              <div>
              <Icon className="icon-netlify" title="Netlify" />
              <Icon className="icon-vercel" title="Vercel" style={{color:'#fff'}} />
              <Icon className="icon-digitalocean" title="DigitalOcean" />
              <Icon className="icon-aws" title="AWS" />
              <Icon className="icon-heroku" title="Heroku" />
              <Icon className="icon-wpengine" title="WPEngine" />
                
              </div>
          </div>
      </div>
     );
}
 

function Icon(props){

  const [iconText, setIconText] = useState(false);

  return(
    <div className="icon-wrapper">
      <i 
        className={`${props.className} icon ${iconText ? `icon-active` : null}`}
        title={props.title} 
        // onClick={() => setIconText(!iconText)}
        onMouseEnter={() => setIconText(true)}
        onMouseLeave={() => setIconText(false)}
      >
      </i>
      <span className={`icon_text ${iconText ? `icon_text--active` : null}`}>{props.title}</span>
    </div>
  )
}
