import Header from './header'

import Particlebackground from './pages/particlesbackground'
import Typewriter from "typewriter-effect"

function Portfolio(data:any){
  const posts = data.data[0]
return(< >
<Particlebackground></Particlebackground>

<div className='w-full h-screen z-10'>


{/*precisa colocar o typewriter */}

<section className="px-10 pt-32 w-4/5 m-auto backdrop-blur-none mb-20">

    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="">
            <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-full" src="../src/assets/profilepic.png" alt="" />
        </div>
        <div className="order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left ">
            <p className="mt-2 text-3xl md:text-lg sm:text-sm text-white">Seja Bem vindo </p>
            <p className="text-4xl font-bold md:text-7xl  text-white ">Eu sou
                <span className="text-orange-600"> Dayvison</span>.
            </p>
            <p className="text-3xl  md:text-6xl text-white">E tambem sou {
                <Typewriter
                options={{
                  strings: ['Programador', 'Escritor',"Analista de Dados","Desenvolvedor"],
                  autoStart: true,
                  loop: true,
                  delay:80
                }}
              />} <span>
                            
                        </span></p>
            <p className="mt-2 lg:text-3xl md:text-lg sm:text-sm  text-white "></p>
           

          
        </div>

    </div>
 

</section>


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<section className=" m-auto w-4/5 backdrop-blur-none flex items-center justify-center">

<ol >
  <h1 className='text-center text-white text-3xl  font-bold'>Sobre Mim</h1>
  <li className="border-l-2 border-blue-600">
    <div className="md:flex flex-start">
      <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <a href="#!" className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">Programador Full-Stack</a>
   
        </div>
        <p className="text-gray-700 mb-6">Programador full-stack, criando projetos usando Html, Css, Javascript, Typescript, Reactjs, Tailwind, NodeJS, MongoDB, Mysql e demais ferramentas.</p>
        </div>
    </div>
  </li>
  <li className="border-l-2 border-green-600">
    <div className="md:flex flex-start">
      <div className="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <a href="#!" className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">Analista de Dados</a>
          
        </div>
        <p className="text-gray-700 mb-6">Conhecimento básico na area de Ciencia de dados, uso de Linguagens Python e R, ferramentas como Numpy, Sql, SciPy, excel, uso de Webscraping e Conhecimentos em Areas como Estatistica e Probabilidade   </p>
        </div>
    </div>
  </li>
 <li className="border-l-2 border-blue-600">
    <div className="md:flex flex-start">
      <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
        <div className="flex justify-between mb-4">
          <a href="#!" className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">Demais</a>
   
        </div>
        <p className="text-gray-700 mb-6">Possuo Tecnologo em Analise e Desenvolvimento de Sistemas, Inglês intermediario, diversas Certificações em Programação Web, Analise de Dados, conhecimento de Git, GitHub, uso de  Arch Linux, Arduino...</p>
        </div>
    </div>
  </li>
</ol>
</section>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<section className="shadow-2xl m-auto w-4/5 backdrop-blur-none">

    <div className="w-full h-full py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
  <section className=" md:px-8 xl:px-20 text-white bg-primary flex items-center">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
   
    <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
      <div className="text-white p-6 pl-2 pr-20 sm:pl-10 lg:pr-20">
       
        <div
          className="absolute -left-4 top-16 sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
          <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
          <p> Skills</p>
        </div>

       
        <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
          Minhas Habilidades
        </h2>
      </div>

      <p className="p-3 text-gray-400 text-sm leading-relaxed">
       Essas são algumas das ferramentas que uso no dia a dia para criação dos projetos.
       Maior uso de ferramentas para desenvolvimento Web, frontend, backend e analise de dados
      </p>
      <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
  <span className="rounded-lg px-4 py-2 bg-blue-500 text-white transition-all duration-300">
    Skills
  </span>
  <span className="rounded-lg px-4 py-2 bg-transparent text-gray-300 transition-all duration-300">
    Tools
  </span>
</span>

    </div>

    
   
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
    
        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
              <svg width="32" height="32" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#161614"><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
            </span>
            <p className="text-xs mt-2">Github</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
<path fill="#1e88e5" d="M28.465,38.611c0.419-1.105,0.664-2.365,0.664-3.714c0-4.133-2.211-7.494-4.929-7.494	c-2.741,0-4.951,3.361-4.951,7.494c0,1.326,0.221,2.586,0.641,3.669c-9.041,0.951-15.407,4.731-17.993,6.432	c4.355-6.278,8.909-13.638,13.262-22.105c1.083-2.101,2.101-4.178,3.05-6.211c0.375,0.243,0.751,0.509,1.171,0.775	c1.945,1.215,3.759,1.879,5.084,2.233c-0.973-0.73-2.033-1.613-3.116-2.697c-0.817-0.817-1.547-1.637-2.167-2.433	C21.016,10.538,22.608,6.669,24,3c2.32,6.144,5.217,12.842,8.841,19.893c2.343,4.531,4.731,8.754,7.117,12.644	c-0.685-0.375-1.437-0.73-2.233-1.039c-1.371-0.53-2.652-0.862-3.759-1.06c1.503,0.751,3.25,1.747,5.084,3.073	c1.194,0.885,2.254,1.769,3.161,2.631c0.021,0.021,0.021,0.021,0.045,0.045c1.26,2.056,2.565,3.957,3.846,5.813	C43.561,43.319,37.306,39.605,28.465,38.611z"></path>
</svg>
            </span>
            <p className="text-xs mt-2">Arch Linux</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
            </span>
            <p className="text-xs mt-2">JavaScript</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#007ACC" rx="60"/><path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"/></g></svg>
           </span>
            <p className="text-xs mt-2">TypeScript</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg width="32px" height="32  px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
<defs>
<linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
<stop stop-color="#327EBD"/>
<stop offset="1" stop-color="#1565A7"/>
</linearGradient>
<linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDA4B"/>
<stop offset="1" stop-color="#F9C600"/>
</linearGradient>
</defs>
</svg>
</span>
            <p className="text-xs mt-2">Python</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
</svg> </span>
            <p className="text-xs mt-2">ReactJS</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg width="32px" height="32px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1725 2.29872C16.4627 1.89953 15.5373 1.90132 14.8269 2.29872C11.2689 4.26227 7.71082 6.22641 4.15216 8.18906C3.45969 8.55335 2.99264 9.29698 3.00009 10.0688V21.9328C2.99509 22.7197 3.48622 23.4705 4.19655 23.8298C5.21871 24.3736 6.2118 24.9726 7.25244 25.4802C8.45451 26.0709 9.95843 26.2015 11.1752 25.5855C12.1629 25.075 12.6016 23.9395 12.6003 22.896C12.6083 18.9806 12.6016 15.0651 12.6034 11.1496C12.6269 10.9756 12.4962 10.7896 12.3064 10.7938C11.8517 10.7866 11.3964 10.7896 10.9417 10.7926C10.7699 10.7764 10.6022 10.9191 10.6152 11.0918C10.6091 14.982 10.6164 18.8734 10.6115 22.7642C10.6214 23.3024 10.2578 23.8196 9.73913 24.0014C8.5412 24.4213 5.12198 22.2012 5.12198 22.2012C4.9965 22.1431 4.91682 22.007 4.92912 21.8718C4.92912 17.9576 4.92973 14.0433 4.92912 10.1297C4.91187 9.97191 5.00912 9.8298 5.15402 9.76538C8.70033 7.8134 12.2448 5.85654 15.7911 3.90336C15.9143 3.82115 16.086 3.8214 16.2089 3.90396C19.7552 5.85654 23.3003 7.81161 26.8472 9.76368C26.9926 9.828 27.0857 9.9725 27.0709 10.1297C27.0703 14.0433 27.0721 17.9576 27.0697 21.8713C27.0802 22.0098 27.0086 22.144 26.8793 22.2048C23.3661 24.1462 19.8129 26.025 16.3315 28.0228C16.1796 28.1099 16.0075 28.2086 15.8373 28.1126C14.9218 27.6062 14.0174 27.0801 13.1049 26.5688C13.0057 26.5069 12.8794 26.4803 12.7759 26.5496C12.3668 26.7652 11.982 26.9398 11.5122 27.1258C10.8524 27.387 10.9578 27.4938 11.5529 27.8405C12.62 28.4444 13.6889 29.0459 14.756 29.6504C15.4585 30.0888 16.4024 30.12 17.1275 29.7149C20.6861 27.7538 24.2436 25.7904 27.8029 23.8293C28.5113 23.468 29.0049 22.7202 28.9999 21.9327V10.0688C29.0068 9.31264 28.5576 8.58227 27.886 8.21259C24.3156 6.23947 20.7435 4.27064 17.1725 2.29872Z" fill="#8CC84B"/>
<path d="M22.5419 11.2062C21.1452 10.459 19.4836 10.4192 17.9315 10.5169C16.8102 10.6277 15.6309 10.9371 14.814 11.7409C13.9761 12.5489 13.7937 13.8537 14.1917 14.9085C14.4769 15.6539 15.1948 16.1386 15.9372 16.395C16.8935 16.7326 17.8979 16.837 18.9026 16.9414C19.819 17.0366 20.7357 17.1319 21.6165 17.4042C21.9763 17.5234 22.3953 17.7058 22.5055 18.0973C22.6073 18.5609 22.4957 19.0998 22.1193 19.4219C20.9237 20.3682 17.5979 20.2232 16.4166 19.4784C15.939 19.1611 15.7332 18.5994 15.6495 18.0641C15.6402 17.8973 15.5059 17.7443 15.3248 17.757C14.8713 17.7516 14.4178 17.7528 13.9643 17.7564C13.8061 17.7431 13.6416 17.8557 13.6329 18.0172C13.5397 20.4689 15.7914 21.5377 17.9039 21.773C19.1108 21.888 20.3442 21.8814 21.5327 21.6224C22.4261 21.419 23.3219 21.0444 23.9369 20.3563C24.6953 19.52 24.8444 18.2749 24.5043 17.2332C24.2443 16.4559 23.5012 15.9573 22.7416 15.7008C21.7086 15.3466 20.4844 15.1562 19.5488 15.0671C18.1889 14.9376 16.5729 14.9905 16.188 14.0969C16.0345 13.629 16.1651 13.048 16.5951 12.7602C17.7328 11.9885 20.0483 12.091 21.2265 12.6675C21.7675 12.9384 22.081 13.4948 22.2104 14.0565C22.2344 14.2215 22.3454 14.3937 22.5364 14.3865C22.9868 14.3955 23.4372 14.3889 23.8875 14.3895C24.0422 14.4003 24.2116 14.313 24.2418 14.1546C24.2227 12.9806 23.6232 11.7788 22.5419 11.2062Z" fill="#8CC84B"/>
</svg></span>
            <p className="text-xs mt-2">NodeJS</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd"/><defs><linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#32B1C1"/><stop offset="1" stop-color="#14C6B7"/></linearGradient></defs></g></svg>            </span>
            <p className="text-xs mt-2">TailwindCSS</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg height="32" viewBox="8.738 -.036 14.517 32.038" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z" fill="#599636"/><path d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z" fill="#6cac48"/><path d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf"/></svg>
            </span>
            <p className="text-xs mt-2">MongoDB</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F03C2E" rx="60"/><g clip-path="url(#skillIconsGit0)"><path fill="#fff" d="m224.225 119.094l-87.319-87.319a12.87 12.87 0 0 0-14.035-2.793a12.9 12.9 0 0 0-4.177 2.793L100.569 49.9l23 23c5.35-1.875 11.475-.594 15.737 3.669a15.31 15.31 0 0 1 3.631 15.831l22.169 22.169c5.363-1.85 11.55-.657 15.831 3.637a15.32 15.32 0 0 1 3.321 16.706a15.333 15.333 0 0 1-20.029 8.293c-1.86-.771-3.55-1.9-4.973-3.324c-4.5-4.5-5.612-11.125-3.337-16.669l-20.675-20.675v54.407a15.6 15.6 0 0 1 4.062 2.9a15.326 15.326 0 0 1-21.675 21.675a15.32 15.32 0 0 1-3.326-16.704a15.3 15.3 0 0 1 3.326-4.971c1.481-1.475 3.125-2.594 5.019-3.344v-54.913a15.2 15.2 0 0 1-5.019-3.343a15.315 15.315 0 0 1-3.3-16.757L91.644 58.814l-59.875 59.812a12.88 12.88 0 0 0-2.795 14.04a12.9 12.9 0 0 0 2.795 4.179l87.325 87.312a12.9 12.9 0 0 0 4.177 2.793a12.9 12.9 0 0 0 9.858 0a12.9 12.9 0 0 0 4.177-2.793l86.919-86.781a12.88 12.88 0 0 0 3.776-9.109a12.88 12.88 0 0 0-3.776-9.11"/></g><defs><clipPath id="skillIconsGit0"><path fill="#fff" d="M28 28h200v200H28z"/></clipPath></defs></g></svg>            </span>
            <p className="text-xs mt-2">Git</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
<linearGradient id="__u04104Xr4WevsSMNpCfa_CLvQeiwFpit4_gr1" x1="7.773" x2="29.818" y1="6.952" y2="27.783" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#bec1c4"></stop><stop offset="1" stop-color="#939399"></stop></linearGradient><path fill="url(#__u04104Xr4WevsSMNpCfa_CLvQeiwFpit4_gr1)" d="M24,6C10.745,6,0,13.291,0,22.286s10.745,16.286,24,16.286s24-7.291,24-16.286S37.255,6,24,6 z M26.5,35C16.283,35,8,29.627,8,23s8.283-12,18.5-12S45,16.373,45,23S36.717,35,26.5,35z"></path><linearGradient id="__u04104Xr4WevsSMNpCfb_CLvQeiwFpit4_gr2" x1="25.124" x2="32.304" y1="14.251" y2="35.285" gradientUnits="userSpaceOnUse"><stop offset=".003" stop-color="#008ded"></stop><stop offset="1" stop-color="#0061a7"></stop></linearGradient><path fill="url(#__u04104Xr4WevsSMNpCfb_CLvQeiwFpit4_gr2)" d="M39.051,33.469 c-0.578-0.945-1.437-1.669-2.442-2.105c3.401-0.841,5.926-3.904,5.926-7.564c0-4.307-3.493-7.8-7.8-7.8H20.001v26h6.933V31.6h1.955 c0.967,0,1.856,0.525,2.321,1.373L36.175,42h8.093L39.051,33.469z M26.935,21.2h6.067c1.435,0,2.6,1.165,2.6,2.6 s-1.165,2.6-2.6,2.6h-6.067V21.2z"></path>
</svg>
  </span>
            <p className="text-xs mt-2">R</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
            <span className="text-4xl">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
<linearGradient id="I1Ls14S_9qH6lfzYnZ33la_F4uMFPZgS0gt_gr1" x1="20.837" x2="26.769" y1="4.234" y2="41.178" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#50d133"></stop><stop offset="1" stop-color="#3da126"></stop></linearGradient><path fill="url(#I1Ls14S_9qH6lfzYnZ33la_F4uMFPZgS0gt_gr1)" d="M11.575,8.758c1.128,0.177,2.553,0.46,4.074,0.892c-0.343,0.977-0.636,2.004-0.856,3.057 c-1.093-0.01-2.173,0.066-3.212,0.201C11.482,11.344,11.508,9.907,11.575,8.758z M10.082,13.144 c-0.086-1.246-0.092-2.411-0.06-3.435C9.969,9.761,9.91,9.805,9.857,9.858c-1.25,1.25-2.277,2.636-3.127,4.097 C7.717,13.663,8.842,13.373,10.082,13.144z M12.205,17.121c0.579-0.994,1.279-1.936,2.129-2.787 c0.045-0.045,0.094-0.082,0.139-0.126c-0.935,0.008-1.862,0.082-2.759,0.202C11.818,15.306,11.988,16.217,12.205,17.121z M10.929,18.242c-0.335-1.195-0.563-2.408-0.706-3.588c-1.763,0.336-3.316,0.797-4.461,1.189c-0.02,0.045-0.042,0.088-0.062,0.133 c0.502,1.124,1.236,2.597,2.204,4.132C8.84,19.432,9.852,18.793,10.929,18.242z M6.776,20.965c-0.716-1.122-1.297-2.2-1.77-3.162 c-0.593,1.827-0.915,3.719-0.969,5.621C4.795,22.666,5.717,21.813,6.776,20.965z M4.202,26.624 c0.252,1.922,0.784,3.808,1.593,5.604c0.371-1.03,0.848-2.205,1.45-3.425C6.083,28.069,5.056,27.31,4.202,26.624z M4.32,25.153 c0.907,0.765,2.102,1.686,3.489,2.571C8.361,26.718,9,25.715,9.732,24.763c-0.801-0.832-1.522-1.721-2.164-2.622 C6.243,23.212,5.127,24.298,4.32,25.153z M8.688,21.282c0.506,0.717,1.073,1.417,1.68,2.087c0.055-1.206,0.265-2.404,0.637-3.564 C10.193,20.258,9.413,20.754,8.688,21.282z M16.231,8.138c0.477-1.151,0.988-2.194,1.472-3.096 c-1.67,0.552-3.285,1.313-4.789,2.315C13.91,7.542,15.035,7.791,16.231,8.138z M17.774,8.625c0.919,0.321,1.849,0.705,2.762,1.151 c0.862-0.998,1.601-1.839,2.097-2.4c-0.72-0.597-1.862-1.515-3.063-2.385C19.007,5.977,18.364,7.222,17.774,8.625z M11.168,35.604 c-1.438-0.131-2.76-0.357-3.867-0.593c0.731,1.108,1.583,2.158,2.557,3.132c0.513,0.513,1.049,0.987,1.601,1.432 C11.307,38.432,11.184,37.07,11.168,35.604z M38.142,9.857C33.68,5.396,27.617,3.499,21.785,4.144 c1.581,1.206,2.84,2.294,2.932,2.375l0.767,0.667l-0.679,0.756c-0.016,0.018-0.896,1.001-2.17,2.466 c0.454-0.045,0.909-0.07,1.365-0.07c3.5,0,7.001,1.333,9.666,3.997c5.33,5.33,5.33,14.002,0,19.332 c-4.618,4.617-11.744,5.226-17.032,1.842c-1.014,0.147-2.034,0.214-3.031,0.214c-0.447,0-0.886-0.016-1.321-0.038 c0.027,1.87,0.233,3.567,0.436,4.817c3.389,2.319,7.333,3.492,11.283,3.492c5.122,0,10.243-1.95,14.142-5.848l0,0 C45.94,30.344,45.94,17.656,38.142,9.857z M15.296,34.535c-0.33-0.273-0.652-0.56-0.961-0.868c-0.671-0.671-1.257-1.396-1.759-2.16 c-0.169,1.027-0.26,2.057-0.286,3.06C13.268,34.62,14.282,34.611,15.296,34.535z M17.185,10.131 c-0.282,0.793-0.523,1.621-0.721,2.464c0.91-0.602,1.88-1.069,2.88-1.43c0.035-0.041,0.074-0.088,0.109-0.129 C18.703,10.69,17.941,10.391,17.185,10.131z M10.47,25.799c-0.606,0.824-1.151,1.685-1.624,2.554 c0.865,0.5,1.789,0.957,2.748,1.349C11.022,28.453,10.646,27.138,10.47,25.799z M11.541,30.983 c-1.146-0.437-2.237-0.972-3.252-1.553c-0.775,1.586-1.341,3.103-1.722,4.276c1.202,0.291,2.823,0.608,4.613,0.779 C11.214,33.341,11.324,32.161,11.541,30.983z"></path>
</svg>  </span>
            <p className="text-xs mt-2">Anaconda</p>
          </div>
        </div>
      </div>

  </div>
</section>

    </div>
</section>


<section>
<div className="shadow-2xl m-auto w-4/5 backdrop-blur-none text-white ">
<section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Conheça alguns de meus projetos</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Todos esse projetos foram criados inteiramente por mim, cada um com sua função especifica  </p>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <img src="https://1drv.ms/i/c/ccdb940572a31808/IQTTSbOtBiIoSZMRjJ4mQ0BoAWFnFXPpOPmfDj7bNjg0qHU?width=1024" alt="" />
             <a href='https://github.com/DayvisonPaz/frontend-movielist' ><h3 className="mb-2 text-center text-xl font-bold dark:text-white">Movielist</h3></a> 
             
          </div>
          <div>
            <img src="https://1drv.ms/i/c/ccdb940572a31808/IQQX3nAUMVDvTrCxtzgejFcPASE3jQvTvHsena9TA5hvCEM?width=1918&height=907" alt="" />
             <a href="/"><h3 className="mb-2 text-xl text-center font-bold dark:text-white">Portfolio</h3></a> 
             
          </div>
          
          <div>
            <img src="https://1drv.ms/i/c/ccdb940572a31808/IQSJS3uKYHoZSqETRIYJWVs0AdxrBAcwX6C_WCl-iw-IAIw?width=1024" alt="" />
              <a href="https://drive.google.com/drive/folders/1dUHtGPOU2TSh-gWvxD8jQzlMrH5aOjd3"><h3 className="mb-2 text-center text-xl font-bold dark:text-white">Replit</h3></a>
             
          </div>
        
          
          
      </div>
  </div>
</section>


</div>

</section>
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       <section className="shadow-2xl m-auto w-4/5 backdrop-blur-none flex flex-col items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meu Blog</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Aqui você encontra reflexões, tutoriais práticos e ideias que conectam razão e lógica .
<a className='text-blue-500' href="/vagante"> Veja Mais</a>

          </p>
      </div> 
     {posts.length>0?posts.slice(-2).map((e:any)=>(<a href={'/'+e.route} key={e.post} className="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img className="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={e.tumb} alt=""/>
<div className="flex w-[60vw] flex-col justify-between p-4 leading-normal">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.About}</p>
</div>
</a>
)):<h1>carregando</h1>


}
    
    </section>



<section className="shadow-2xl  text-white  backdrop-blur-sm mb-[-20px] mt-7">
<footer className="flex flex-col space-y-10 justify-center ">

  

    <div className="flex justify-center space-x-5">
        <ul className="flex justify-center mt-5 space-x-5">
   
    <li>
        <a href="https://www.instagram.com/dayv1son/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </li>
  
    <li>
        <a href="https://github.com/DayvisonPaz" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/dayvison-da-paz/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
</svg>
        </a>
    </li>
    <li>
        <a href="https://www.chess.com/member/dayv1son" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
<g fill="currentColor" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M22.07,21.034l-1.42,-1.42c-1.83,-1.83 -2.99,-4.19 -3.36,-6.72h2.04v-2.16l-2.15,-1.08h-0.01v-0.58c1.3,-0.75 2.16,-2.14 2.16,-3.74c0,-2.39 -1.93,-4.32 -4.32,-4.32c-2.39,0 -4.32,1.93 -4.32,4.32c0,1.6 0.86,2.99 2.16,3.74v0.58l-2.16,1.08v2.16h2.04c-0.37,2.53 -1.53,4.89 -3.36,6.72l-1.42,1.42c-1.01,1.01 -1.58,2.38 -1.58,3.81v2.09c5.5,1.47 11.25,1.48 17.28,0v-2.09c0,-1.43 -0.57,-2.8 -1.58,-3.81zM14.14,4.134c-0.83,0.83 -1.84,1.17 -2.25,0.76c-0.42,-0.42 -0.08,-1.43 0.75,-2.26c0.82,-0.82 1.83,-1.16 2.25,-0.74c0.41,0.41 0.07,1.42 -0.75,2.24z"></path></g></g>
</svg>
        </a>
    </li>
</ul>
    </div>
    <p className="text-center font-medium">&copy; 2025 Company Ltd. All rights reservered.</p>
</footer>
</section>


</div>

<Header></Header>


</>)
}

export default  Portfolio

