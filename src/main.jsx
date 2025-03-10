import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Provider store={store}>
    <App />
  </Provider>
 </BrowserRouter>,
)
