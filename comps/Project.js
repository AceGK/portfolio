import React, { Component } from 'react';
import Toggle from "../comps/Toggle";
import styles from "../styles/Project.module.scss"

export default class Projects extends Component{
  render(){
    const { projects } = this.props;
    const projectList = projects.map(project => {
      return (
        <Toggle key={ project.id }
          render={({ on, toggle }) => (
        <div className={styles.project} >
          <div onClick={ toggle } className={styles.projectLink}>
                <div className={styles.projectFlex}>
                    { project.logo }
                    <div className={styles.projectTitle}>
                        <h4>
                            { project.title }
                        </h4>
                    </div>
                    <div className={styles.toggleArrow}>
                        <i className={on ? "icon-keyboard_arrow_up" : "icon-keyboard_arrow_down"}></i>
                    </div>
                </div>
            </div>
            {on && 
            <div className={styles.projectInfo}>
                <div className={styles.projectIcons}>
                    { project.icons }
                </div>
                <p> 
                    { project.description } 
                </p>
                    { project.buttons }
            </div>
            }
        </div>
         )}
         /> //end Toggle
      )
    });



    return (
      <div className={styles.projectList}>
        { projectList }
      </div>
    )
  }
}

