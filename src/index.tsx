import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles';
import GlobalFonts from './assets/fonts/GlobalFonts';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);
root.render(
    <React.Fragment>
        <GlobalFonts />
        <GlobalStyle />
        <App />
    </React.Fragment>,
);
