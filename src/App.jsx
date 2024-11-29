import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Apod from './pages/Apod';
import Antur from './pages/Antur';
import AISummariser from './pages/AISummariser';
import Rhestr from './pages/Rhestr';
import SamsPatisseries from './pages/SamsPatisseries';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/apod' element={<Apod />} />
      <Route path='/antur' element={<Antur />} />
      <Route path='/aisummariser' element={<AISummariser />} />
      <Route path='/rhestr' element={<Rhestr />} />
      <Route path='/samspatisseries' element={<SamsPatisseries />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App
