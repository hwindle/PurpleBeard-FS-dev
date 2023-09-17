import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './SteamRouter.css';
/* pages to import */
import HomePage from '../Pages/HomePage';
import SteamEnginesView from '../Pages/SteamEnginesView';
import AddEnginePage from '../Pages/AddEnginePage';
import ErrorPage from '../Pages/ErrorPage';

const SteamRouter = () => {
  return (
    <Router>
      

      {/* Different routes/paths for app */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/steam-engines-view' element={<SteamEnginesView />} />
        <Route path='/addengine' element={<AddEnginePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default SteamRouter;