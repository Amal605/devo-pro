import React from 'react'
import { Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
import Counte from './../Counte/Counte';

export default function Nav() {
    return (
        <div className=''>

            <Flowbite>
                <Navbar fluid>
                    <Navbar.Brand>
                        <Link className="self-center whitespace-nowrap text-4xl font-semibold dark:text-white pl-5">DevFolio</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <li><NavLink to={'/home'} className=" dark:text-white relative after:block after:absolute  after:bg-black after:m-[0,0,0,10%] after:h-[3px] after:w-0 after:transition-all after:duration-300  after:left-0  hover:after:w-[90%] dark:after:bg-white">Home</NavLink></li>
                        <li><NavLink to={'/about'} className=" dark:text-white relative after:block after:absolute  after:bg-black after:m-[0,0,0,10%] after:h-[3px] after:w-0 after:transition-all after:duration-300  after:left-0  hover:after:w-[100%] dark:after:bg-white">About</NavLink></li>
                        <li><NavLink to={'/services'} className=" dark:text-white relative after:block after:absolute  after:bg-black after:m-[0,0,0,10%] after:h-[3px] after:w-0 after:transition-all after:duration-300  after:left-0  hover:after:w-[100%] dark:after:bg-white">Services</NavLink></li>
                        <li><NavLink to={'/counte'} className=" dark:text-white relative after:block after:absolute  after:bg-black after:m-[0,0,0,10%] after:h-[3px] after:w-0 after:transition-all after:duration-300  after:left-0  hover:after:w-[100%] dark:after:bg-white">Counter</NavLink></li>
                        <li><NavLink to={'/work'} className=" dark:text-white relative after:block after:absolute  after:bg-black after:m-[0,0,0,10%] after:h-[3px] after:w-0 after:transition-all after:duration-300  after:left-0  hover:after:w-[100%] dark:after:bg-white">work</NavLink></li>
                    </Navbar.Collapse>
                    <div className='my-3 md:my-0'>

                    <DarkThemeToggle />
                    </div>
                </Navbar>
            </Flowbite>
        </div>
    )
}
