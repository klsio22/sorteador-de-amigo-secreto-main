import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../components/form/Form';

test("when input is empty,new participation can't be added", () => {
  render(<Form />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );
  //encontrar o botão
  const button = screen.getByRole('button');
  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  //garantir que o botão esteja no desabilitado
  expect(button).toBeDisabled();
});

test('Add a participant, case exist a name filled', () => {
  render(<Form />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );
  //encontrar o botão
  const button = screen.getByRole('button');

  // inserir um valor no input
  fireEvent.change(input, {
    target: {
      value: 'Klesio',
    },
  });
  //clicar no botão esteja de submeter
  fireEvent.click(button);

  //garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();

  //garantir que o input não tenha um valor
  expect(input).toHaveValue('Klesio');
});
