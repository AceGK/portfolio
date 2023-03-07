import styles from './SecondaryNav.module.scss'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const SecondaryNav = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
            setTheme('dark')
          }
          else setTheme('crt')
        }}
      />
    </div>
  );
}

export default SecondaryNav;