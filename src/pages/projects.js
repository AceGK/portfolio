import React, { Component } from 'react';
import Projects from '../components/project';
import Link from 'next/link'

import AK from '../../public/svg/ak.svg';
import PLPC from '../../public/svg/plpc.svg';
import Hal from '../../public/svg/hal9000m.svg';
import Tipper from '../../public/svg/tipper.svg';
import IP from '../../public/svg/ip-tracker.svg';

export default class ProjectData extends Component {
  state = {
    projects: [
      {
        title: 'This Site',
        logo: <AK />,
        icons: [
          <i className="icon-next-js" title="Next.js" key="1" />,
          <i className="icon-sass" title="SCSS" key="2"/>,
          <i className="icon-sendgrid" title="Sendgrid" key="3"/>,
        ],
        description: 'My portfolio site, showcasing my work and personal projects',
        buttons: [
          <Link href="https://github.com/AceGK/portfolio" className="btn" key="1">
            <i className="icon-github" title="Github"/> Github
          </Link>
        ],
        id: 1
      },
      {
        title: 'Purple Lotus',
        logo: <PLPC />,
        icons: [
          <i className="icon-next-js" title="Next.js" key="1" />,
          <i className="icon-sass" title="SCSS" key="2"/>,
          <i className="icon-algolia" title="Algolia" key="3" />,
          <i className="icon-sanity" title="Sanity" key="4" />,
        ],
        description: 'Work in progress. Ecommerce site for a cannabis dispensary built with Next.js, Algolia Instant Search, and Sanity CMS',
        buttons: [
          <Link href="https://purplelotus.vercel.app" className="btn" key="1">
            <i className="icon-link" title="view site" /> View
          </Link>,
        ],
        id: 2
      },
      {
        title: 'IP Tracker',
        logo: <IP  />,
        icons: [
          <i className="icon-next-js" title="Next.js" key="1" />,
          <i className="icon-sass" title="SCSS" key="2"/>,
        ],
        description: 'IP address tracker built with NextJS, Ipify Geolocation API, and LeafletJS',
        buttons: [
          <Link href="https://ip-tracker-acegk.vercel.app/" className="btn" key="1">
            <i className="icon-link" title="view site"/> View
          </Link>,
          <Link href="https://github.com/AceGK/ip-tracker" className="btn" key="2">
            <i className="icon-github" title="Github"/> Github
          </Link>
        ],
        id: 3
      },
      {
        title: 'Tip Calculator',
        logo: <Tipper />,
        icons: [
          <i className="icon-html5" title="HTML5" key="1" />,
          <i className="icon-css3" title="CSS3" key="2" />,
          <i className="icon-javascript" title="Javascript" key="3" />,
        ],
        description: 'A vanilla JS tip calculator that evaluates cost per person based on bill amount and tip %',
        buttons: [
          <Link href="https://acegk.github.io/tip-calculator/" className="btn" key="1">
            <i className="icon-link" title="view site"/> View
          </Link>,
          <Link href="https://github.com/AceGK/tip-calculator" className="btn" key="2">
            <i className="icon-github" title="Github"/> Github
          </Link>
        ],
        id: 4
      },
      {
        title: 'HAL PC monitor',
        logo: <Hal />,
        icons: [
          <i className="icon-rainmeter" title="Rainmeter" key="1"/>,
          <i className="icon-lua" title="LUA" key="2"/>
        ],
        description: 'Hal 9000 themed PC hardware usage meters',
        buttons: [
          <Link href="https://github.com/AceGK/Hal9000-Rainmeter" className="btn" key="1">
            <i className="icon-github" title="Github"/> Github
          </Link>,
        ],
        id: 5
      },

    ]
  }
  render() {
    return (
      <div className="page-container">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

