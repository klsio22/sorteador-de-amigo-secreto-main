import { render, screen } from '@testing-library/react';
import React from 'react';

//Jest
test("when input is empty,new participation can't be added", () => {
  render(<Form />);

  // encontrar no DOM o input
  const input = screen.getByPlaceholderText('Isira os nome dos participantes');
  //encontrar o botão
  const button = screen.getByRole('button');
  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  //garantir que o botão esteja no desabilitado
  expect(button).toBeDisabled();

});