import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppProvider';
import './styles/app.css';
import './styles/nav.css';
import './styles/tailwind.css';
import { ScrollToTop } from './utils';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <Router>
      <ScrollToTop>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ScrollToTop>
    </Router>
  </AppProvider>
);
