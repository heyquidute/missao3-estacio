import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Catálogo de Livros</Link>
            </li>
            <li className='nav-item'>
              <Link to="/cadastro" className='nav-link'>Cadastrar livro</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<LivroLista/>}/>
          <Route path='/cadastro' element={<LivroDados/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
