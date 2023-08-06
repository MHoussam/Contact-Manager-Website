import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Posts from './Pages/Posts';
import Post from './Pages/Post';

import './styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Posts />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;