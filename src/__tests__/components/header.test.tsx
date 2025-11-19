import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/header';

describe('Header Component', () => {
  it('Check header text', () => {
    render(<Header />);
    const HeaderText = screen.getByText(/Header/i);
    expect(HeaderText).toBeInTheDocument();
  });
});
