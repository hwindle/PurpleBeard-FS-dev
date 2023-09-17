import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './PhotosRouter.css';
/* pages to import */
import HomePage from '../Pages/HomePage';
import SearchImages from '../Pages/SearchImages';
import RandomImage from '../Pages/RandomImage';
import ErrorPage from '../Pages/ErrorPage';

const PhotosRouter = () => {
  return (
    <Router>
      {/* navigation */}
      <nav>
        <ul id='top-navigation'>
          <li><Link to='/' data-item='Home'>Home</Link></li>
          <li><Link to='/searchImage' data-item='Find Images'>Find Images</Link></li>
          <li><Link to='/randomImage' data-item='Random Photo'>Random Photo</Link></li>
        </ul>
      </nav>

      {/* Different routes/paths for app */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/searchImage' element={<SearchImages />} />
        <Route path='/randomImage' element={<RandomImage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default PhotosRouter;