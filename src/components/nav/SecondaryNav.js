import styles from './SecondaryNav.module.scss'
import { useTheme } from 'next-themes'

const SecondaryNav = () => {

  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.secondary_nav}>
      {theme === "dark" || theme === "crt" ?
        <i
          className={'icon-sun'}
          title="Light Mode"
          onClick={() => setTheme('light')}
        />
        :
        <i
          className={'icon-moon'}
          title="Dark Mode"
          onClick={() => setTheme('dark')}
        />
      }

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