import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailablesThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailablesThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailablesThemes) ?? 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log(`theme mudou para ${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
          {nextThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
