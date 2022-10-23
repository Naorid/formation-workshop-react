import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('possède le nom de notre application', () => {
    render(<Footer />);
    const nameElement = screen.getByText('Skool 24')
    expect(nameElement).toBeInTheDocument();
  })
});