import React from 'react';
import { NavLink} from 'react-router-dom'

function NavBarComp(props) {
    return (
        <React.Fragment>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
        <header className="text-gray-700 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            
            </svg>
            <span className="ml-3 text-xl">Flourish Consulting</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink className="mr-5 hover:text-gray-900" exact to="/FlourishConsulting">Home</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" exact to="/projects">Projects</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" exact to="/aboutUs">About Us</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" exact to="/contact">Contact</NavLink>
          </nav>
         </div>
      </header>
        </React.Fragment>
    );
}

export default NavBarComp;