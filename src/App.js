
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePages } from './store/actions/changePage';
import './App.css';
import List from './page/list';
import FourOFour from './page/fourOfour';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePages(1));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} ></Route>
        <Route path='*' element={<FourOFour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

