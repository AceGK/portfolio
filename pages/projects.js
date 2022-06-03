import React, { Component } from 'react';
import Projects from '../comps/Project';

import AK from '../public/svg/ak.svg';
import PLPC from '../public/svg/plpc.svg';
import Hal from '../public/svg/hal9000m.svg';


export default class ProjectData extends Component {
  state = {
    projects: [
    {
      title: 'This Site',
      logo:<AK style={{fill : 'white'}}/>,  
      icons: [
        <i className="icon-react" title="React" key="2"></i>,
        <i className="icon-node-dot-js" title="Node js" key="3"></i>,
        <i className="icon-sass" title="CSS3" style={{color:"#CC6699"}} key="1"></i>,
        <i className="icon-vercel" title="Vercel" key="4"></i>,
      ], 
      description: 'My portfolio site, showcasing my work and personal projects', 
      buttons: [ 
        <a href="https://github.com/AceGK/ace-react-site" className="btn" target="_blank" rel="noreferrer" key="1">
            <i className="icon-github" title="Github"></i> Github
         </a>,
      ],
      id: 1 
    },
    {
      title: 'Purple Lotus', 
      logo:<PLPC />,
      icons:  [
        <i className="icon-html5" title="HTML5" key="1"></i>,
        <i className="icon-css3" title="CSS3" key="2"></i>,
        <i className="icon-javascript" title="Javascript ES6" key="3"></i>,
        <i className="icon-wordpress1" title="Wordpress" key="4"></i>,
        <i className="icon-php" title="php" key="4"></i>
      ],   
      description:'Website for a cannabis dispensary located in San Jose, CA. Currently being rebuilt with Next.js', 
      buttons: [ 
        <a href="https://plpcsanjose.com" className="btn" target="_blank" rel="noreferrer" key="1">
            View Site
         </a>,
      ],
      id: 2
    },
    {
      title: 'HAL 9000 Rainmeter', 
      logo:<Hal />,
      icons:  [
        <i className="icon-rainmeter2" title="Rainmeter" key="1"></i>,
        <i className="icon-lua" title="LUA" key="2"></i>
      ],   
      description: 'Rainmeter skin modeled after HAL 9000 that monitors PC performance status and details', 
      buttons: [ 
        <a href="https://github.com/AceGK/Hal9000-Rainmeter" className="btn" target="_blank" rel="noreferrer" key="1">
            <i className="icon-github" title="Github"></i> Github
         </a>,
      ],
      id: 3 
    }
   
    ]
  }
  render() {
    return (
        
      <div className="page-container">
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

