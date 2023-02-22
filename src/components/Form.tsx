export function Form() {
  return (
    <form>
      <h1>Formulario</h1>
      <input type='text' placeholder='Insira os nomes dos participantes' />
      <button disabled={true}>Adicionar</button>
    </form>
  );
}
