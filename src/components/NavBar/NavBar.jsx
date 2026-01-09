import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu,} from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
  const [open, setOopen]= useState(false)
    const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/blog", name: "Blog" },
  { id: 5, path: "/contact", name: "Contact" }
];

    return (
        <nav className="text-black bg-yellow-200 p-6">
          <div className="md:hidden text-2xl" onClick={() => setOopen(!open)}>
            {
              open === true ? <AiOutlineClose></AiOutlineClose> : <IoIosMenu className=" "></IoIosMenu>
            }
            
          </div>
          <ul className={`md:flex duration-1000
            ${open ?'top-30':'-top-60'}
            absolute md:static bg-yellow-200 px-6`}>
            {
             routes.map(route => <Link key={route.id} route={route}></Link> )
          }
          </ul>

        </nav>
    );
};

export default NavBar;