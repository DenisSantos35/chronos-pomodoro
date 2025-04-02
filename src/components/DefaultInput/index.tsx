import styles from './styles.module.css';

/*Tipagem do componente input, na primeira chave sobrescrevemos e obrigamos que o componente ao ser utilizado precisara passar obrigatóriamente o id, e junto tera as propriedadade do input atribuido  */
type DefaultInputProps = {
  id: string;
  labelText: string /* Deixa o label text como opcional => labelText?: string*/;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/*
      ****Só exibe o componente te o labelText for verdadeiro (E) se conter dados no input exemplo:
      labelText && <label htmlFor={id}>{labelText}</label> 

      **** {...rest} pega o restante das propriedades que enviar na props do componete      
      */}
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
