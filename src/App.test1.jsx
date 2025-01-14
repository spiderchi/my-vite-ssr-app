import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import App from './App'; // Adjust the path to the location of your App component

// Mock Article component
jest.mock('./components/Article/Article', () => ({ data }) => (
  <div data-testid="article">{JSON.stringify(data)}</div>
));

describe('App Component', () => {
  const mockNews = [
    {
      title: 'News 1',
      description: 'Description 1',
      urlToImage: 'https://example.com/image1.jpg',
    },
    {
      title: 'News 2',
      description: 'Description 2',
      urlToImage: 'https://example.com/image2.jpg',
    },
  ];

  it('renders the heading and news articles', () => {
    render(<App news={mockNews} />);

    // Check if the heading is rendered
    expect(screen.getByText(/Latest News/i)).toBeInTheDocument();

    // Check if the list of articles is rendered
    const newsItems = screen.getAllByRole('listitem');
    expect(newsItems).toHaveLength(mockNews.length);

    // Check each article
    mockNews.forEach((article, index) => {
      // Check the image
      const img = screen.getAllByRole('img')[index];
      expect(img).toHaveAttribute('src', article.urlToImage);

      // Check the Article component
      const articleData = screen.getAllByTestId('article')[index];
      expect(articleData).toHaveTextContent(JSON.stringify(article));
    });
  });
});

