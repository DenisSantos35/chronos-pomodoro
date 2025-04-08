import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailablesThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailablesThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link ptevine os eventos
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
    //document.documentElement.setAttribute('data-theme', theme);
  }
  //// Há trez formas de utiliza use effect.
  //só o array => Executado toda vez que o componete e renderiado
  // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // });
  ////com array de dependencias vazio => Executado quando o componente e montado pela primeira vez
  // useEffect(() => {
  //   console.log('useEffect com array de dependencias vazio', Date.now());
  // }, []);
  // //com array com dependencia => Executa toda vez que o valor da dependencia for alterado
  useEffect(() => {
    console.log(`theme mudou para ${theme}`);
    document.documentElement.setAttribute('data-theme', theme);
    // Este retorno antes da montagem do proximo compontente limpa a sujeira anterior para depois montar o novo componente, cleanUp
    return () => {
      console.log('olha, este componente será atualizado');
    };
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
          <SunIcon />
        </a>
      </nav>
    </>
  );
}
