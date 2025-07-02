import '@styles/custom.css';
import '@styles/tailwind.css';

import { StrictMode } from 'react';
import { createRoot,ReactDOM } from 'react-dom/client';

import App from './App';

import {
  RouterProvider,
} from "react-router-dom"; 
import router from './route/route';

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);