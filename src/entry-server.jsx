import { renderToString } from 'react-dom/server'
import App from './App'
import { fetchNews } from './api/newsApi';

/**
 * @param {string} _url
 */
export async function render(_url) {
  const news = await fetchNews('tesla'); // Fetch news about 'tesla'
  const appHtml = renderToString(
    <App news={news} />
  )

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>News</title>
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script>
        // Hydrate the app with the same data
        window.__INITIAL_DATA__ = ${JSON.stringify(news)};
      </script>
    </body>
    </html>
  `;
  return { html }
}
