import React, { Component } from 'react';
import Projects from '../comps/Project';

// import { ReactComponent as AK } from '../public/svg/ak.svg';
// import { ReactComponent as PLPC } from '../public/svg/plpc.svg';
// import { ReactComponent as Hal9000m } from '../public/svg/hal9000m.svg';


export default class ProjectData extends Component {
  state = {
    projects: [
    {
      title: 'This Site',
      logo:<i className="icon-info_outline"></i>,  
      icons: [
        <i className="icon-html5" title="HTML5" key="1"></i>,
        <i className="icon-css31" title="CSS3" key="2"></i>,
        <i className="icon-react" title="React" key="3"></i>,
        <i className="icon-node-dot-js" title="Node js" key="4"></i>,
        <i className="icon-netlify" title="Netlify" key="5"></i>,
      ], 
      description: 'My portfolio site, showcasing my work and personal projects', 
      buttons: [ 
        <a href="https://github.com/AceGK/ace-react-site" target="_blank">
            <button className="project-btn"><i className="icon-github" title="Github"></i> Github</button>
         </a>,
      ],
      id: 1 
    },
    {
      title: 'Purple Lotus', 
      logo:<i className="icon-info_outline"></i>,
      icons:  [
        <i className="icon-html5" title="HTML5" key="1"></i>,
        <i className="icon-css31" title="CSS3" key="2"></i>,
        <i className="icon-javascript" title="Javascript ES6" key="3"></i>,
        <i className="icon-wordpress1" title="Wordpress" key="4"></i>
      ],   
      description:'Website for a cannabis dispensary located in San Jose, CA.', 
      buttons: [ 
        <a href="https://plpcsanjose.com" target="_blank" rel="noopener noreferrer">
            <button className="project-btn">View Site</button>
         </a>,
      ],
      id: 2
    },
    {
      title: 'HAL 9000 Rainmeter', 
      logo:<i className="icon-info_outline"></i>,
      icons:  [
        <i className="icon-rainmeter2" title="Rainmeter" key="1"></i>,
        <i className="icon-lua" title="LUA" key="2"></i>
      ],   
      description: 'Rainmeter skin modeled after HAL 9000 that monitors PC performance.', 
      buttons: [ 
        <a href="https://github.com/AceGK/Hal9000-Rainmeter">
            <button className="project-btn"><i className="icon-github" title="Github"></i> Github</button>
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

