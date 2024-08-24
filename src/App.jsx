import React, { useState } from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './Components/Layout/Layout';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Contact } from './Components/Contact/Contact';

export default function App() {

  const router= createBrowserRouter([
    
    {path: '' , element: <Layout />, children : [

       {index:true , element: <Home />},
       {path: 'about' , element: <About />},
       {path: 'portfolio' , element: <Portfolio />},
       {path: 'contact' , element: <Contact />},
    ]},


  ])


  return(
    <>
    
    <RouterProvider router={router} />
    
    </>
    
  )
}

 
