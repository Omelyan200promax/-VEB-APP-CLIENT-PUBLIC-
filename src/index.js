import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import Store from "./store/store"
import reportWebVitals from './reportWebVitals';
import { createContext } from 'react';

const store = new Store()//создали объект класса
export const Context = createContext({store});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider>
        <App />
     </ChakraProvider>
  </React.StrictMode>
);


reportWebVitals();
