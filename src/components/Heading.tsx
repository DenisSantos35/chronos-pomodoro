import styles from './Heading.module.css';

export function Heading() {
  //console.log(styles);
  //colocar duas classes no mesmo componente
  //const classes = `${styles.heading} ${styles.cyan}`
  //<h1 className={classes}>Hello World! (App)</h1>
  //ou
  //<h1 className={`${styles.heading} ${styles.cyan}`}>Hello World! (App)</h1>
  return (
    <>
      <h1 className={styles.heading}>Hello World! (App)</h1>
    </>
  );
}
