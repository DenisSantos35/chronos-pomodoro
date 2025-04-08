import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailablesThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailablesThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link ptevine os eventos
    if (theme === 'dark') {
      setTheme(() => 'light');
    } else {
      setTheme(() => 'dark');
    }
  }
  return (
    <>
      <nav className={styles.menu}>
        <h1>{theme}</h1>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ir para a Home'
          title='Ir para a Home '
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ver Histórico'
          title=' Ver Histórico'
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Configurações'
          title='Configurações'
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Mudar Tema'
          title='Mudar Tema'
          onClick={handleThemeChange}
        >
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
