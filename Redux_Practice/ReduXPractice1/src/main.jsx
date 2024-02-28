// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your Redux store
import App from './App.jsx';

const rootElement = document.getElementById('root');

const Root = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

const root = createRoot(rootElement); // Use createRoot from "react-dom/client"
root.render(<Root />);
