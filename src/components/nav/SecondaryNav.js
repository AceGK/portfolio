import styles from './SecondaryNav.module.scss'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'

const SecondaryNav = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const prev = usePrevious(theme);


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [theme]); 
  return ref.current;
}

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   return null
  // }

  return (
    <div className={styles.secondary_nav}>
      <i
        className={'icon-moon'}
        title="Dark Mode"
        onClick={() => setTheme('dark')}
        data-hide-on-theme="dark"
      />
      <i
        className={'icon-sun'}
        title="Light Mode"
        onClick={() => setTheme('light')}
        data-hide-on-theme="light"
      />
      <i
        className="icon-terminal"
        title="CRT Mode"
        onClick={() => {
          if (theme === 'crt') {
            setTheme(prev)
          }
          else setTheme('crt')
        }}
      />
    </div>
  );
}

export default SecondaryNav;