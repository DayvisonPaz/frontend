import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Vagante from './Vagante';

import { useState, useEffect } from 'react';
import axios from "axios";

import Summitofgods from "./pages/sumitofgods";
import Portfolio from "./Portfolio";

import Vinland from "./pages/vinland";
import PrimeirosCOmputadores from "./pages/primeirosComputadores";
import EntendaBits from "./pages/EntendaBits";


function App() {

  const [postsVagante,setPostsVagante] = useState([{"route":String,"post":Number}]);
  useEffect(() => {
    
    
    async function run(){
       
    await axios.get('https://backend-vagante.onrender.com/posts/vagante').then(response=>setPostsVagante(response.data.postsVagante ))
    
  }
  run()
}, []);
    
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/vagante'   element={<Vagante data={postsVagante?[postsVagante]:[]} />} />
    
  
    <Route path='/Summitofgods' element={<Summitofgods></Summitofgods>} />
    <Route path='/vinland' element={<Vinland></Vinland>} />
     <Route path='/entenda-bits' element={<EntendaBits></EntendaBits>} />
    <Route path='/primeiros-computadores' element={<PrimeirosCOmputadores></PrimeirosCOmputadores>} />
    <Route path='/' element={<Portfolio data={postsVagante?[postsVagante]:[]}></Portfolio>} />
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
