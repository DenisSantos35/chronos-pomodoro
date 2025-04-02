/*Tipagem do componente input, na primeira chave sobrescrevemos e obrigamos que o componente ao ser utilizado precisara passar obrigatóriamente o id, e junto tera as propriedadade do input atribuido  */
type DefaultInputProps = { id: string } & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>task</label>
      <input id={id} type={type} />
    </>
  );
}
