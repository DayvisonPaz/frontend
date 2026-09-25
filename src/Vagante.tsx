import { useState , useEffect } from "react";
import Header from "./header";
import Particlebackground from './pages/particlesbackground';

function Vagante(data: any) {
 const [posts, setPosts] = useState([...data.data[0]]);
  const [cor, setCor] = useState(['bg-gray-800', 'bg-gray-800']);
let tecnico: any[] = [];
let outros: any[] = [];

const [tema, setTema] = useState([tecnico,outros]);
useEffect(() => {
    
 if(tema[0].length==0){
Separe()
 }
   
  }, []); 
 


 
  function Separe(){
      for (let i = 0; i< data.data[0].length; i++) {
        if(data.data[0][i].post%2){
          tecnico.push(data.data[0][i])
         
        }else{
          outros.push(data.data[0][i])
         
        }
setTema([tecnico,outros])
 
      }
     
  }

  function Chancefilter(x: any) {
    if (x === "tecnico" && posts !== tema[1]) {
      
      setPosts(tema[1]);
      setCor(['bg-blue-800', 'bg-gray-800']); // Técnico azul, Outros cinza
    } else if (x === "outros" && posts !== tema[0]) {
      setPosts(tema[0]);
      setCor(['bg-gray-800', 'bg-blue-800']); // Técnico cinza, Outros azul
    } else {
      setPosts([...data.data[0]]);
      setCor(['bg-gray-800', 'bg-gray-800']);
    }
  }

  return (
    <>
    <Particlebackground></Particlebackground>
      <div className="w-screen h-screen z-10 absolute texto-black ">
        <div className="pt-20 w-screen h-full overflow-x-hidden flex flex-col items-center">
           <blockquote className="m-4 border-gray-400 pl-4 italic text-black">
  "Apenas um Programador tentando escrever"
</blockquote>
          <div>
           
            <button
              type="button"
              className={`text-black ${cor[0]} bg-[#DFE5F0] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
              onClick={() => Chancefilter("tecnico")}
            >
              Técnicos
            </button>
            <button
              type="button"
              className={`text-black ${cor[1]} bg-[#DFE5F0] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
              onClick={() => Chancefilter("outros")}
            >
              Outros
            </button>
            
          </div>

          {posts.length > 0 ? (
            posts.map((e: any) => (
              <a
                href={"/" + e.route}
                key={e.post}
                className="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-[#DFE5F0] dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={e.tumb}
                  alt=""
                />
                <div className="flex w-[60vw] flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {e.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {e.About}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <h1>Carregando...</h1>
          )}
        </div>
        <Header />
      </div>
    </>
  );
}

export default Vagante;
