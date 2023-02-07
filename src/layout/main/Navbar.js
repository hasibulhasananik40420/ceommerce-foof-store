import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav
                className={`h-14 fixed w-full z-[999] "bg-white"
        }`}
            >
                <ul className='max-w-7xl mx-auto flex gap-3 h-full items-center'>
                    <li className='flex-auto font-semibold text-2xl'>
                        <Link to='/'>JobBox</Link>
                    </li>
                    <li>
                        <Link className='hover:text-primary' to='/'>
                            Home
                        </Link>
                    </li>


                </ul>
            </nav>
        </div>
    );
};

export default Navbar;