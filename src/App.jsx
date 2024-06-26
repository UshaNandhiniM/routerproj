import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import All from './Components/All';
import FullStackDeveloper from './Components/FullStackDeveloper'
import DataScience from './Components/DataScience'
import CyberScience from './Components/CyberSecurity'
import Career from './Components/Career'
import TopBar from './Components/TopBar';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <TopBar/>
    <br/>
<Routes>
      <Route path='/all' element={<All />}></Route>
      <Route path='/fullstackdeveloper' element={<FullStackDeveloper />}></Route>
      <Route path='/datascience' element={<DataScience />}></Route>
      <Route path='/cybersecurity' element={<CyberScience />}></Route>
      <Route path='/career' element={<Career />}></Route>
</Routes>
    </BrowserRouter>
    </>
  );
};

export default App;