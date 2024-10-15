import Link from "next/link";


export default function Header(){
    return(
        <div>

<header className="text-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0">
     <img src="https://thumbs.dreamstime.com/z/natural-product-logo-natural-product-logo-design-vector-template-leaf-icon-125866847.jpg?w=768" className="h-16 w-18 rounded-full"/>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      
      <span className="ml-3 text-xl">ProductCard</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href={''} className="mr-5 hover:text-green-600 font-bold">Home</Link>
      <Link href={'/cards'} className="mr-5 hover:text-green-600 font-bold">Cards</Link>
      <Link href={'/contact'} className="mr-5 hover:text-green-600 font-bold">Contact</Link>
      <Link href={'/about'} className="mr-5 hover:text-green-600 font-bold">About</Link>
    </nav>
    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0 text-white font-bold">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
      </div>
    )
}
