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
              <Icon className="icon-html5" name="HTML5" />
              <Icon className="icon-css3" name="CSS3" />
              <Icon style={{color:"#CC6699"}} className="icon-sass" name="SCSS" /> 
              <Icon className="icon-javascript" name="Javascript" />
              <Icon className="icon-typescript" name="Typescript" />
              <Icon className="icon-jquery" name="jQuery" />
              <Icon className="icon-react" name="React" />
              {/* <Icon className="icon-redux" name="Redux" /> */}
              <Icon className="icon-next-js" name="Next.js" />
              <Icon className="icon-node-js" name="Node.js" />
              <Icon className="icon-php" name="PHP" />
              <Icon className="icon-mysql" name="MySQL" />
              <Icon className="icon-mongodb" name="MongoDB" />
            </div>
          </div>

          {/* <div className="skillsBox">
            <h2>Data</h2>
              <div>
                <i className="icon-mysql" name="MySQL"></i>
                <i className="icon-mongodb" name="MongoDB"></i>
                <i className="icon-firebase" name="Firebase"></i>
                <i className="icon-postgre" name="PostgreSQL"></i>
                <i className="icon-auth0" name="Auth0"></i>
              </div>
          </div> */}

          <div className="skillsBox">
            <h2>Design</h2>
              <div>
                <Icon className="icon-photoshop" name="Photoshop" />
                <Icon className="icon-lightroom" name="Lightroom" />
                <Icon className="icon-illustrator" name="Illustrator" />
                <Icon className="icon-xd" name="Experience Design" />
                <Icon className="icon-sketch" name="Sketch" style={{color:"#F7B500"}} />
                <Icon className="icon-figma" name="Figma" />
              </div>
          </div>

          <div className="skillsBox">
            <h2>Deploy</h2>
              <div>
              <Icon className="icon-netlify" name="Netlify" />
              <Icon className="icon-vercel" name="Vercel" style={{color:'#fff'}} />
              <Icon className="icon-digitalocean" name="DigitalOcean" />
              <Icon className="icon-aws" name="AWS" />
              <Icon className="icon-heroku" name="Heroku" />
              <Icon className="icon-wpengine" name="WPEngine" />
                
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
        name={props.name} 
        // onClick={() => setIconText(!iconText)}
        onMouseEnter={() => setIconText(true)}
        onMouseLeave={() => setIconText(false)}
      >
      </i>
      <span className={`icon_text ${iconText ? `icon_text--active` : null}`}>{props.name}</span>
    </div>
  )
}
