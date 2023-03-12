import { useState, useEffect } from 'react'
import styles from './Bio.module.scss'
import Modal from '../../components/modal'
import Link from 'next/link'
import Image from 'next/image'
import Headshot from '../../../public/images/ace.jpg'

export default function Bio() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);

  return (
    <div className={styles.about}>
      <p>Hello!</p>
      <p>My name is Ace and I live in San Jose, CA.
        I am a full-stack software engineer
        with a focus on front-end web development.
        Below is a list of technologies that I use frequently.
      </p>
      <div className={styles.button} onClick={() => { setModal(!modal) }}>
        <a>More about me</a>
        <i className="icon-modal"></i>
      </div>

      {modal &&
        <Modal setModal={setModal}>
          <div className={styles.image}>
            <Image
              src={Headshot}
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>

          <h1>About Me</h1>

          <p>I was born in 1991 and raised in Dutchess County, NY, where I developed a passion for art and technology. In the early 2000s I began to learn about assembling custom computers, graphic design, photography, animation, and coding.</p>

          <p>After graduating from <Link href="https://www.wikiwand.com/en/Salisbury_School">Salisbury School</Link> in 2009, I went on to study photography at the <Link href="https://www.wikiwand.com/en/The_Art_Institute_of_Boston">Art Institute of Boston</Link>. I then transferred to the <Link href="https://www.wikiwand.com/en/San_Francisco_Art_Institute">San Francisco Art Institute</Link> in 2011. While attending college I discovered my love for web development while building and maintaining my art portfolio website.</p>

          <p>In 2014, I landed a job as an IT manager & software developer at <Link href="https://www.wikiwand.com/en/Oaksterdam_University">Oaksterdam University</Link>. During this time, I delved deeper into programming and began to build web applications professionally for my employer and other SF Bay Area businesses.</p>

          <p>In 2019, I attended a full-stack webdev course at <Link href="https://www.wikiwand.com/en/UC_Berkeley_Extension">UC Berkeley Extension</Link> to further my education and solidify my expertise. Today, I am a skilled and accomplished software engineer and I am always looking for new ways to improve, innovate, and create.</p>
        </Modal>
      }
    </div>
  );
}
