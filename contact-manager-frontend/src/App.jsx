import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Contacts from './Pages/Contacts';
import Contact from './Pages/Contact';
import AddContact from './Pages/AddContact';

import './styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Contacts />} />
        <Route path=":id" element={<Contact />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;