function Header() {
return(
<>
<header>
    <nav className="text-white absolute w-screen mt-[-100vh] bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
                <img src="https://ik.imagekit.io/yfgcubiem1/blog/11602236_21004063-removebg-preview.png?updatedAt=1753783748172" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dayvison</span>
            </a>
            <a href="/">
                <div >Home</div>
                </a>
            <div className="w-1/5 flex justify-around"> <a href="/vagante">Vagante/Blog</a>
      
            </div>
        </div>
    </nav>
</header>
</>
)
}

export default Header
