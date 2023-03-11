import { SkillsBox, Icon } from '../components/skills'
import Bio from '../components/bio'

export default function About() {

  return (
    <div className="page-container">
      <Bio />

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