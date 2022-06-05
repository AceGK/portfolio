import styles from '../styles/Nav2.module.scss'
import {useEffect, useState} from 'react'

const Nav2 = () => {

    //set crt theme
    const [crt, setCrt] = useState(false)
    useEffect(() => {
      document.body.classList.toggle('crt', crt);
    },[crt])


    return ( 
        <div className={styles.nav2}>
            <p>click me</p>
            <i className="icon-terminal" title="CRT mode" onClick={()=> setCrt(!crt)}></i>
        </div>
     );
}
 
export default Nav2;