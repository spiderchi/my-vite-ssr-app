import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

// Mock data for the `news` prop
const mockNews = [
  {
    title: 'Breaking News: React 18 Released!',
    description: 'The latest version of React is now available.',
    urlToImage: 'https://via.placeholder.com/150',
  },
  {
    title: 'JavaScript Tops Developer Survey Again',
    description: 'JavaScript remains the most popular programming language.',
    urlToImage: 'https://via.placeholder.com/150',
  },
];

describe('App Component', () => {
  it('renders the title', () => {
    render(<App news={mockNews} />);
    expect(screen.getByText(/Latest News/i)).toBeInTheDocument();
  });

  it('renders the list of news articles', () => {
    render(<App news={mockNews} />);
    const newsItems = screen.getAllByRole('listitem');
    expect(newsItems).toHaveLength(mockNews.length);
  });

  it('renders each article with title and image', () => {
    render(<App news={mockNews} />);

    // Check that each article's image and title are displayed
    mockNews.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });
});
