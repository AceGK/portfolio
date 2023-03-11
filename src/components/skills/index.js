import styles from "./Skills.module.scss"
import { useState } from "react";

function SkillsBox(props) {
  return (
    <div className={styles.skillsBox}>
      <h2>{props.title}</h2>
      <div>
        {props.children}
      </div>
    </div>
  )
}

function Icon(props) {

  const [iconText, setIconText] = useState(false);

  return (
    <div className={styles.icon_wrapper}>
      <i
        className={`${props.className} ${styles.icon}} ${iconText ? styles.icon_active : null}`}
        name={props.name}
        // onClick={() => setIconText(!iconText)}
        onMouseEnter={() => setIconText(true)}
        onMouseLeave={() => setIconText(false)}
      >
      </i>
      <span className={`${styles.icon_text} ${iconText ? styles.icon_text__active : null}`}>{props.name}</span>
    </div>
  )
}

export {
  SkillsBox,
  Icon,
}