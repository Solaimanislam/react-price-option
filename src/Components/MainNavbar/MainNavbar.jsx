import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const MainNavbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'ProductDetail', path: '/products/:id' },
        { id: 5, name: 'NotFound', path: '*' }
    ];


    return (
        <nav className=" container mx-auto text-black bg-yellow-300 p-6">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose className=" text-2xl"></IoMdClose> 
                    : 
                    <RiMenu2Line className=" text-2xl"></RiMenu2Line>
                }
                
            </div>
            <ul className={`md:flex absolute md:static 
            ${open ? ' top-14' : ' -top-60'} bg-yellow-300 px-6 duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default MainNavbar;