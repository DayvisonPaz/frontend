import Header from "./header"

function Vagante(data: any) {
  const posts = data.data[0]

  return (
    <>
   
      <div className="bg-[#323C59] w-screen h-screen">

        
        <div className="pt-20 w-screen h-full overflow-x-hidden flex flex-col items-center">
        <div>

        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>

        </div>
        {posts.length>0?posts.map((e:any)=>(<a href={'/'+e.route} key={e.post} className="m-5 w-[60vw] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img className="object-cover  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={e.tumb} alt=""/>
<div className="flex w-[60vw] flex-col justify-between p-4 leading-normal">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.title}</h5>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{e.About}</p>
</div>
</a>
)):<h1>carregando</h1>


}
        </div>
         <Header></Header>
      </div>
    </>
  )
}

export default Vagante