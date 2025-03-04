import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Vagante from './Vagante';

import { useState, useEffect } from 'react';
import axios from "axios";

import Summitofgods from "./pages/sumitofgods";
import Portfolio from "./Portfolio";
import Daytechno from "./daytechno";
import Vinland from "./pages/vinland";

function App() {

  const [postsTechno,setPostsTechno] = useState([{"route":String,"post":Number}]);
  const [postsVagante,setPostsVagante] = useState([{"route":String,"post":Number}]);
  useEffect(() => {
    
    
    async function run(){
       
    await axios.get('https://backend-vagante.onrender.com/posts/vagante').then(response=>setPostsVagante(response.data.postsVagante ))
    await axios.get('https://backend-vagante.onrender.com/posts/techno').then(response=>setPostsTechno(response.data.postsTechno  ))
  }
  run()
}, []);
    
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/vagante'   element={<Vagante data={postsVagante?[postsVagante]:[]} />} />
    <Route path='/daytechno'   element={<Daytechno data={postsTechno?[postsTechno]:""} />} />
  
    <Route path='/Summitofgods' element={<Summitofgods></Summitofgods>} />
    <Route path='/vinland' element={<Vinland></Vinland>} />
    <Route path='/' element={<Portfolio></Portfolio>} />
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
