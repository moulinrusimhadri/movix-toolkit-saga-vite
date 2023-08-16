import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styledComponents/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>
)
