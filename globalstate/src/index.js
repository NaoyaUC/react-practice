import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';


ReactDOM.render(
  <React.StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
