import './index.css'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const news = window.__INITIAL_DATA__ || {};

hydrateRoot(
  document.getElementById('root'),
  <App news={news}/>
)
