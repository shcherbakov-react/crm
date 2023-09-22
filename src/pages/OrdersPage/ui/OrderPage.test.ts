import { fireEvent, screen } from '@testing-library/react';

test('test button map', () => {
    const onClick = jest.fn()
    const btn = screen.getByText('Свернуть');
    fireEvent.click(btn)
    expect(onClick).toHaveClass('collapse')
    expect(btn).toBeInTheDocument()
})