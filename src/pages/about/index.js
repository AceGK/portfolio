import { useState, useEffect } from 'react'
import styles from './about.module.scss'
import Link from 'next/link'

export default function About() {

  const [aboutModal, setAboutModal] = useState(false)

  useEffect(() => {
    if (aboutModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [aboutModal]);

  return (
    <div className="page-container">
      <div className={styles.about}>
        <p>Hello!</p>
        <p>My name is Ace and I live in San Jose, CA.
          I am a full-stack software engineer
          with a focus on front-end web development.
          Below is a list of technologies that I use frequently.
        </p>
        <div className={styles.button} onClick={() => { setAboutModal(!aboutModal) }}>
          <a>More about me</a>
          <i className="icon-arrow-right"></i>
        </div>
        <AboutModal aboutModal={aboutModal} setAboutModal={setAboutModal} />
      </div>

      <SkillsBox title="Dev">
        <Icon className="icon-html5" name="HTML5" />
        <Icon className="icon-css3" name="CSS3" />
        <Icon className="icon-sass" name="SASS" />
        <Icon className="icon-javascript" name="Javascript" />
        {/* <Icon className="icon-typescript" name="Typescript" /> */}
        <Icon className="icon-react" name="React" />
        {/* <Icon className="icon-redux" name="Redux" /> */}
        <Icon className="icon-next-js" name="Next.js" />
        {/* <Icon className="icon-npm" name="npm" /> */}
        <Icon className="icon-node-js" name="Node.js" />
        {/* <Icon className="icon-php" name="PHP" /> */}
        {/* <Icon className="icon-mysql" name="MySQL" /> */}
        <Icon className="icon-mongodb" name="MongoDB" />
        <Icon className="icon-firebase" name="Firebase" />
        {/* <Icon className="icon-postgre" name="PostgreSQL" /> */}
        <Icon className="icon-auth0" name="Auth0" />
        <Icon className="icon-algolia" name="Algolia" />
        <Icon className="icon-sanity" name="Sanity" />
      </SkillsBox>

      <SkillsBox title="Deploy">
        <Icon className="icon-vercel" name="Vercel" />
        <Icon className="icon-netlify" name="Netlify" />
        <Icon className="icon-digitalocean" name="DigitalOcean" />
        <Icon className="icon-aws" name="AWS" />
        <Icon className="icon-heroku" name="Heroku" />
        <Icon className="icon-wpengine" name="WP Engine" />
      </SkillsBox>

      <SkillsBox title="Design">
        <Icon className="icon-sketch" name="Sketch" />
        <Icon className="icon-figma" name="Figma" />
        <Icon className="icon-xd" name="Experience Design" />
        <Icon className="icon-photoshop" name="Photoshop" />
        <Icon className="icon-illustrator" name="Illustrator" />
        <Icon className="icon-indesign" name="Indesign" />
      </SkillsBox>

    </div>
  );
}

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

function AboutModal(props) {
  console.log(props.aboutModal)
  if (props.aboutModal === true) {
    return (
      <>
        <Backdrop setAboutModal={props.setAboutModal} />
        <div className={styles.aboutModal}>
          <div className={styles.aboutModal__close}>
            <span className="icon-xmark" onClick={() => { props.setAboutModal(false) }}></span>
          </div>
          <div className={styles.aboutModal__content}>
            <h1>About Me</h1>

            <p>I was born in 1991 and raised in Dutchess County, NY, where I developed a passion for art, music, and technology. In the early 2000s I began to learn about assembling custom computers, graphic design, photography, animation, and coding.</p>

            <p>After graduating from <Link href="https://www.wikiwand.com/en/Salisbury_School">Salisbury School</Link> in 2009, I went on to study photography at the <Link href="https://www.wikiwand.com/en/The_Art_Institute_of_Boston">Art Institute of Boston</Link>. I then transferred to the <Link href="https://www.wikiwand.com/en/San_Francisco_Art_Institute">San Francisco Art Institute</Link> in 2011. While attending college I discovered my love for web development while building and maintaining my art portfolio website.</p>

            <p>In 2014, I landed a job as an IT manager & software developer at <Link href="https://www.wikiwand.com/en/Oaksterdam_University">Oaksterdam University</Link>. During this time, I delved deeper into programming and began to build web applications professionally for my employer and other SF Bay Area businesses.</p>

            <p>In 2019, I attended a full-stack webdev course at <Link href="https://www.wikiwand.com/en/UC_Berkeley_Extension">UC Berkeley Extension</Link> to further my education and solidify my expertise. Today, I am a skilled and accomplished software engineer and I am always looking for new ways to improve, innovate, and create.</p>

          </div>
        </div>
      </>
    )
  }
}

function Backdrop({ setAboutModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={() => setAboutModal(false)}
    >
    </div>
  )
}