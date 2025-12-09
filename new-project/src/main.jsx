import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavbar from './componernt/pagemenu/MenuNavbar.jsx';
import LoginForm from './componernt/pageLogin/LoginForm.jsx';
import MenuCommand from './componernt/pagemenu/MenuCommand.jsx';
import Error from './componernt/pagemenu/Error.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        {/* <Route path='/' element={<LoginForm />} /> */}
        <Route path='/navbar/:inputName' element={<MenuNavbar />} />
        <Route path='*' element={<Error />} />
        {/* <Route path='/navbar/:inputName' element={<MenuNavbar />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
