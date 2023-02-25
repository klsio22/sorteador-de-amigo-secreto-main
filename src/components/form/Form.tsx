import './styles.css';

export function Form() {
  return (
    <form className='form'>
      <h1>Formulario</h1>
      <input type='text' placeholder='Insira os nomes dos participantes' />
      <button disabled={true} className='add'>
        Adicionar
      </button>
    </form>
  );
}
