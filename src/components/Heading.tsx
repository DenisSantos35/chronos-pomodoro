import styles from './Heading.module.css';

export function Heading(props) {
  console.log(props);
  /*
  ** css modules
  console.log(styles);
  colocar duas classes no mesmo componente
  const classes = `${styles.heading} ${styles.cyan}`
  <h1 className={classes}>Hello World! (App)</h1>
  ou
  <h1 className={`${styles.heading} ${styles.cyan}`}>Hello World! (App)</h1>*/

  /*
  ** props do componente
    <h1 className={styles.heading}>
        {props.children} {props.attr} {props.attr2}
    </h1>

   */
  return (
    <>
      <h1 className={styles.heading}>
        {props.children} {props.attr} {props.attr2}
      </h1>
    </>
  );
}
