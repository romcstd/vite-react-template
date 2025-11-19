import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/layout/footer';

describe('Footer Component', () => {
  it('check the copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/Vite React Template/i);
    expect(copyrightText).toBeInTheDocument();
  });

  it('check the copyright year', () => {
    render(<Footer />);
    const yearText = screen.getByText(/2025/i);
    expect(yearText).toBeInTheDocument();
  });

  it('check the All rights reserved', () => {
    render(<Footer />);
    const reserveText = screen.getByText(/All rights reserved/i);
    expect(reserveText).toBeInTheDocument();
  });
});
