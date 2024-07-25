import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';


const rootElement = document.getElementById('root');
const rootFunction = ReactDOM.createRoot(rootElement);

rootFunction.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)
