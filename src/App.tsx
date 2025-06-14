import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Vagante from './Vagante';


import Summitofgods from "./pages/sumitofgods";
import Portfolio from "./Portfolio";

import Vinland from "./pages/vinland";
import PrimeirosCOmputadores from "./pages/primeirosComputadores";
import EntendaBits from "./pages/EntendaBits";


function App() {

const postsVagante = [{"_id":"651ef5c208acb22a54779b5f","title":"Porque subi ate o topo","About":"O que leva uma pessoa a subir ate o topo do Mount Everest?","post":0,"data":"2023-07-12T03:00:00.000Z","tumb":"https://onedrive.live.com/embed?resid=CCDB940572A31808%2159410&authkey=%21AGohXx6QZwDguZ0&width=562&height=562","route":"summitofgods","comments":[{"nome":"dayvison","comentario":"heelo worlds\n"}]},{"_id":"684cbdc04fab4d746596250b","title":"Entendendo Bits","About":"Uma breve introdução ao funcionamento dos bits, desde sua origem básica, em como se transformam em numeros e até em letras.","post":2,"tumb":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSpRWHNq2ChNoiTq4C1c3EvixrWnzT9C6XzJwsVKa6OdOyiWQ5Gw8fJbNqWwamo4Gi6w","route":"entenda-bits"},{"_id":"684cbf224fab4d746596250f","title":"Os Primeiros Computadores","About":"A Historia dos primeiros computadores e como funcionavam, conhecendo as principais ideias, ferramentas e importantes obras que contribuiram para que os computadores pudessem ser construidos.","post":1,"tumb":"https://imgcdn.stablediffusionweb.com/2024/10/8/e1a396ef-05f4-4846-b514-60b63ad9d85a.jpg","route":"primeiros-computadores"}]
    
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
