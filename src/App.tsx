import {BrowserRouter,Route, Routes} from "react-router-dom"
import './App.css'
import Vagante from './Vagante';


import Summitofgods from "./pages/sumitofgods";
import Portfolio from "./Portfolio";

import Vinland from "./pages/vinland";
import PrimeirosCOmputadores from "./pages/primeirosComputadores";
import EntendaBits from "./pages/EntendaBits";
import Header from "./header";
import axios from "axios";
import MecanismoGoogle from "./pages/MecanismoGoogle";
import MatandoSemideuses from "./pages/MatandoSemideuses";
import Idiolatria from "./pages/Idiolatria";
import DilemaDasRedes from "./pages/DilemaDasRedes";


function App() {
axios.get(`https://backend-vagante.onrender.com/comments/vagante/1`)
const postsVagante =[
    {
      "_id": "651ef5c208acb22a54779b5f",
      "title": "Porque subi ate o topo",
      "About": "O que leva uma pessoa a subir ate o topo do Mount Everest?",
      "post": 0,
      "data": "2023-07-12T03:00:00.000Z",
      "tumb": "https://ik.imagekit.io/yfgcubiem1/summit%20of%20gods/Summit-of-the-Gods.jpg?updatedAt=1753783814850",
      "route": "summitofgods"
    },
    {
      "_id": "6888a00a70ead8d8e001ed8a",
      "title": "Dilema Das Redes Sociais",
      "About": "Entenda como as redes sociais não sao suas amigas, como elas te manipulam, te enganam e depois te vendem.",
      "post": 4,
      "tumb": "https://ik.imagekit.io/yfgcubiem1/dilema%20das%20redes/dilema%20das%20redes.png?updatedAt=1753783725568",
      "route": "dilema-das-redes"
    },
    {
      "_id": "6888a0f770ead8d8e001ed8e",
      "title": "Idiolatria",
      "About": "A idiotice de se idolatrar famosos e influencers, entenda de uma vez o quão fútil é o seu fanatismo e como os influencers são na verdade DESinfluentes.",
      "post": 5,
      "data": "2023-07-12T03:00:00.000Z",
      "tumb": "https://ik.imagekit.io/yfgcubiem1/idiolatria/idiolatria%20%20(1).png?updatedAt=1753827465007",
      "route": "idiolatria"
    },
    {
      "_id": "6888a1b170ead8d8e001ed90",
      "title": "Matando Semideuses",
      "About": "Mostrando a você que pessoa como Eistein, Steve jobs e Nikola Tesla ditas como Semideuses, são tão humano quanto voce.",
      "post": 6,
      "tumb": "https://ik.imagekit.io/yfgcubiem1/matando%20semideuses/matando%20gigantes.jpg?updatedAt=1753783685714",
      "route": "matando-semideuses"
    }
  ]
const postsTechno = [
    {
      "_id": "684cbdc04fab4d746596250b",
      "title": "Entendendo Bits",
      "About": "Uma breve introdução ao funcionamento dos bits, desde sua origem básica, em como se transformam em numeros e até em letras.",
      "post": 2,
      "tumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSpRWHNq2ChNoiTq4C1c3EvixrWnzT9C6XzJwsVKa6OdOyiWQ5Gw8fJbNqWwamo4Gi6w",
      "route": "entenda-bits"
    },
    {
      "_id": "684cbf224fab4d746596250f",
      "title": "Os Primeiros Computadores",
      "About": "A Historia dos primeiros computadores e como funcionavam, conhecendo as principais ideias, ferramentas e importantes obras que contribuiram para que os computadores pudessem ser construidos.",
      "post": 1,
      "tumb": "https://imgcdn.stablediffusionweb.com/2024/10/8/e1a396ef-05f4-4846-b514-60b63ad9d85a.jpg",
      "route": "primeiros-computadores"
    },
    {
      "_id": "68889f2570ead8d8e001ed88",
      "title": "Mecanismos de busca",
      "About": "Em um mundo antes dependente do Google, entenda a importancia dos Mecanismos de busca e como foram criados.",
      "post": 3,
      "tumb": "https://ik.imagekit.io/yfgcubiem1/mecanismo%20de%20busca/google%20search.png?updatedAt=1753783708879",
      "route": "mecanismos-de-busca"
    }
  ]
const dataPosts=[postsTechno,postsVagante]  
return (
    <>
    <BrowserRouter>
    <div className="absolute bottom-0 w-full">
       <Header></Header>
    </div>
    <Routes>
    <Route path='/vagante'   element={<Vagante data={postsVagante ?dataPosts:[]} />} />
  <Route path='/mecanismo-de-busca' element={<MecanismoGoogle></MecanismoGoogle>} />
    <Route path='/Summitofgods' element={<Summitofgods></Summitofgods>} />
    <Route path='/vinland' element={<Vinland></Vinland>} />
     <Route path='/entenda-bits' element={<EntendaBits></EntendaBits>} />
     <Route path='/mecanismos-de-busca' element={<MecanismoGoogle></MecanismoGoogle>} />
     <Route path='/matando-semideuses' element={<MatandoSemideuses></MatandoSemideuses>} />
     <Route path='/idiolatria' element={<Idiolatria></Idiolatria>} />
     <Route path='/dilema-das-redes' element={<DilemaDasRedes></DilemaDasRedes>} />
    <Route path='/primeiros-computadores' element={<PrimeirosCOmputadores></PrimeirosCOmputadores>} />
    <Route path='/' element={<Portfolio data={postsVagante?[postsVagante]:[]}></Portfolio>} />
    
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
