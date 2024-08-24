import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {

  const [state, setstate] = useState(false);

  const changeValue = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    console.log(scrollValue);
    
    if(scrollValue>3){
      setstate(true)
      
    }else{
      setstate(false)
    }
  }


  
    window.addEventListener('scroll', changeValue)
  



    return(
        <>
        
        <div className="relative z-50 " >
            <div className={state?'py2 fixed top-0 end-0 start-0  antialiased bg-gray-100 dark-mode:bg-gray-900 second-clr':'py fixed top-0 end-0 start-0  antialiased bg-gray-100 dark-mode:bg-gray-900 second-clr'   }  >
            <div className="container mx-auto  w-full text-gray-700 second-clr dark-mode:text-gray-200 dark-mode:bg-gray-800 paddingNav ">
              <div  className="flex flex-col max-w-screen-xl  mx-auto md:items-center md:justify-between md:flex-row ">
                <div className="flex flex-row items-center justify-between p-4 ps-28">
                  <Link to=""  className="text-lg font-semibold uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline fs-2 tracking-normal ">START FRAMEWORK</Link>
                </div>
                <nav  className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end pe-28 md:flex-row">
                  <NavLink to="about" className="px-2 py-2 mt-2  font-bold bg-transparent rounded-lg dark-mode:bg-transparent  dark-mode:focus:bg-teal-300 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-white  focus:bg-teal-500 focus:outline-none focus:shadow-outline" >ABOUT</NavLink>
                  <NavLink to="portfolio" className="px-2 py-2 mt-2  font-bold bg-transparent rounded-lg dark-mode:bg-transparent  dark-mode:focus:bg-teal-300 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-white  focus:bg-teal-500 focus:outline-none focus:shadow-outline" >PORTFOLIO</NavLink>
                  <NavLink to="contact" className="px-2 py-2 mt-2  font-bold bg-transparent rounded-lg dark-mode:bg-transparent  dark-mode:focus:bg-teal-300 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4  focus:text-white  focus:bg-teal-500 focus:outline-none focus:shadow-outline" >CONTACT</NavLink>

                </nav>
              </div>
            </div>
            </div>
        </div>
        
        </>
    )
    
}