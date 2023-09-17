import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import Ultimate from '../Pages/Ultimate';
import All from '../Pages/All';

import './PageRouter.css';

const PageRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Digimon</Link>
          </li>
          <li>
            <Link to='/ultimate'>Ultimate Digimon</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/ultimate' element={<Ultimate />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
