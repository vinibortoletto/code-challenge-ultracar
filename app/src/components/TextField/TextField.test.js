import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextField from './TextField';

describe('Unit test for "TextField" component', () => {
  it('should render input field', () => {
    const labelMock = 'label mock';
    const typeMock = 'text';
    const idMock = 'id-mock';
    const placeholderMock = 'placeholder mock';
    const valueMock = 'valueMock';
    const callbackMock = jest.fn();

    const { getByLabelText } = render(
      <TextField
        label={labelMock}
        type={typeMock}
        id={idMock}
        placeholder={placeholderMock}
        value={valueMock}
        callback={callbackMock}
      />
    );

    const input = getByLabelText('label mock');
    act(() => userEvent.type(input, 'test'));

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', typeMock);
    expect(input).toHaveAttribute('id', idMock);
    expect(input).toHaveAttribute('placeholder', placeholderMock);
    expect(input).toHaveAttribute('value', valueMock);
    expect(callbackMock).toHaveBeenCalled();
  });
});
