import Header from './header'

import Particlebackground from './pages/particlesbackground'
import Typewriter from "typewriter-effect"

function Portfolio(){
return(< >
<Particlebackground></Particlebackground>

<div className='w-full h-screen z-10'>


{/*precisa colocar o typewriter */}

<section className="px-10 pt-32 w-4/5 m-auto backdrop-blur-none mb-20">

    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-1 shadow-2xl ">
            <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] " src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxtYW58ZW58MHwxfHx8MTcxMzA4OTE0OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
        </div>
        <div className="order-2 lg:order-2  flex flex-col justify-center lg:items-start text-center sm:text-left ">
            <p className="mt-2 text-3xl md:text-lg sm:text-sm text-white">Seja Bem vindo </p>
            <p className="text-4xl font-bold md:text-7xl  text-white ">Eu sou
                <span className="text-orange-600"> Dayvison</span>.
            </p>
            <p className="text-3xl  md:text-6xl text-white">E tambem sou {
                <Typewriter
                options={{
                  strings: ['Programador', 'Escritor',"Youtuber"],
                  autoStart: true,
                  loop: true,
                  delay:100
                }}
              />} <span>
                            
                        </span></p>
            <p className="mt-2 lg:text-3xl md:text-lg sm:text-sm  text-white "></p>
           

          
        </div>

    </div>
</section>


<div className="shadow-2xl m-auto w-4/5 backdrop-blur-sm py-20 mt-10 mb-20">
    <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                     <br className="hidden md:block" />
                    <span className="text-indigo-500">Day Techno</span> Blog e Youtube             </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Day Techno  é um espaço para divulgar conteúdo relacionado a programação, Tecnologia e outros assuntos. Nosso blog tem como objetivo auxiliar no desenvolvimento de projetos e soluções, ensinando técnicas e dicas úteis. Nosso canal Youtube é um espaço para divulgar tutoriais, dicas, e conteúdos relacionados  
                </p>
                <div className="flex gap-2">
                    <a href="/daytechno" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Conheça o Blog
                    </a>
                    <a href="https://www.youtube.com/@DayTechno" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"> Conheça o Canal

                    </a>
                </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img  src="https://onedrive.live.com/embed?resid=CCDB940572A31808%2177573&authkey=%21AOLqsCH3_sVp0h8&width=490&height=480" alt="Hero Image" className="rounded-full shadow-lg" />
            </div>
        </div>
    </div>
</div>

<div className="shadow-2xl m-auto w-4/5 backdrop-blur-sm py-20 mt-10 mb-20">
    <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 lg:w-2/3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">                    
                    <span className="text-indigo-500">Vagante</span> Blog e Youtube
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                Vagante é um espaço para divulgar conteúdo relacionado a Ideias, Filosofias e maneiras de pensar sobre o mundo e as pessoas. Ambos os meio de comunicação tem como objetivo trazer de forma clara essa ideias.
                </p>
                <div className="flex gap-2">
                    <a href="/vagante" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md">Conheça o Blog
                    </a>
                    <a href="https://www.youtube.com/@Umvagante" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md"> Conheça o Canal

                    </a>
                </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src="https://onedrive.live.com/embed?resid=CCDB940572A31808%2167195&authkey=%21APuMS8sEa4Kh_ZA&width=330&height=336" alt="Hero Image" className="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>

<section>
	<div className="shadow-2xl m-auto w-4/5 backdrop-blur-none text-white py-20">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Github</h1>
				<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Veja Outros Projetos meus 
				</h2>
				<p className="text-sm md:text-base text-gray-50 mb-4">
                   Conheça outros projetos que crie além dos expostos aqui no site  
                </p>
				<a href="https://www.github.com/DayvisonPaz"
					className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Veja </a>
			</div>
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div>
						</div>
						<div>
							<img className=" inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"/></div>
							<div>
								</div>
							</div>
						</div>
					</div>
				</div>
</section>

<section className="shadow-2xl m-auto w-4/5 backdrop-blur-sm mb-20">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Mais sobre mim</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Sou programador frontend e backend, estudando javascript e React a mais de 2 anos, também tendo conhecimento em nodejs e mongodb, todas essa caracterisicas podem ser vista nesse site criado inteiramente por mim, veja o codigo fonte no github.</p>
        <div className=" mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
Python        
            </div>  
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
R        
            </div>  
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
SQL        
            </div>  
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
Analise de Dados        
            </div>  
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
Linux        
            </div>  
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
TailwindCSs        
            </div>
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
MongoDB 
            </div>  

        </div>
        
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-around">
                
                    <a className='w-1/6' href="https://www.linkedin.com/in/dayvison-da-paz/">
                        <img className='rounded-xl' onClick={()=>{}} src="https://w7.pngwing.com/pngs/46/539/png-transparent-linkedin-logo-media-sns-social-social-links-icon.png" alt="" />                     
                        
                        </a>
                
                    <a className='w-1/6' href="https://www.instagram.com/dayv1son/">
                    <img className='rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png" alt="" />                     
                    </a>
               
                
               
                     
            </div>
        </div> 
    </div>
</section>
  
</div>

<Header></Header>
<div className='h-2/5 w-screen'>end</div>

</>)
}

export default  Portfolio