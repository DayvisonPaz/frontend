import { useState } from "react";
import Header from "./header";

function Vagante(data: any) {
  const [posts, setPosts] = useState([...data.data[0], ...data.data[1]]);
  const [cor, setCor] = useState(['bg-gray-800', 'bg-gray-800']);

  function Chancefilter(x: any) {
    if (x === "tecnico" && posts !== data.data[1]) {
      setPosts(data.data[1]);
      setCor(['bg-blue-800', 'bg-gray-800']); // Técnico azul, Outros cinza
    } else if (x === "outros" && posts !== data.data[0]) {
      setPosts(data.data[0]);
      setCor(['bg-gray-800', 'bg-blue-800']); // Técnico cinza, Outros azul
    } else {
      setPosts([...data.data[0], ...data.data[1]]);
      setCor(['bg-gray-800', 'bg-gray-800']);
    }
  }

  return (
    <>
      <div className="bg-[#323C59] w-screen h-screen">
        <div className="pt-20 w-screen h-full overflow-x-hidden flex flex-col items-center">
          <div>
            <button
              type="button"
              className={`text-white ${cor[0]} hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
              onClick={() => Chancefilter("tecnico")}
            >
              Técnicos
            </button>
            <button
              type="button"
              className={`text-white ${cor[1]} hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
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
                className="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={e.tumb}
                  alt=""
                />
                <div className="flex w-[60vw] flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
