import React from 'react';
import './App.css'
import Article from './components/Article/Article'

function App({ news }) {
  return (
    <>
      <h1>Latest News</h1>
      <div>
      <ul className='news-list'>
        {news.map((article, index) => (
          <li className="news-item" key={index}>
            <img src={article.urlToImage} className='article-img' />
            <Article data={article} />
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}

export default App
