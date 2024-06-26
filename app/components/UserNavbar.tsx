"use client";
import { UserLinks } from "@/constants";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Navbar } from "react-daisyui";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const UserNavbar = () => {


    const [open, setOpen] = useState<boolean>(false)
    const currentPathname = usePathname()
    return (
        <>
            <Navbar className='grid grid-flow-col-dense gap-3 shadow-sm py-4 px-5 w-full  top-0'>
                <div className='flex items-center max-md:w-full'>
                    <Link href='/' className="logo-font text-3xl">Gango Rechishona</Link>
                </div>


                <div className='flex items-center space-x-6  max-md:hidden max-md:flex-1'>
                    {UserLinks.map((link, index) => (
                        <Link className={classNames({
                            'hover:font-semibold font-normal pb-2': true,
                            'font-semibold border-b-[1.5px] border-b-primary': link.href.includes(currentPathname) 
                        }
                        )}
                            href={link.href}
                            key={index}
                        >
                            {link.title}
                        </Link>
                    ))}

                </div>


                <div className="flex justify-end w-full ">
                    <div className="flex items-center ">
                        <span className='flex space-x-3 items-center'>
                            <Link href='/sign-in/' className='text-primary hover:font-semibold'>Sign in</Link>
                            <span className='text-xl font-light max-md:hidden'>|</span>
                            <span className="md:hidden text-xl" onClick={() => setOpen(true)}><AiOutlineMenu /></span>
                            <Link href="/sign-up/" className='hover:font-semibold max-md:hidden'>Sign up</Link>
                        </span>

                    </div>
                </div>


                <div className={classNames({
                    'md:hidden w-[80%] bg-white  shadow-xl z-10 fixed top-0 -right-2 p-2 h-screen rounded-lg': true,
                    'max-md:block transition': open === true,
                    'max-md:hidden': open === false
                })}>

                    <div className="flex">
                        <span onClick={() => setOpen(!open)} className='font-semibold text-2xl cursor-pointer'> <AiOutlineClose /></span>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="grid grid-flow-row-dense justify-end space-y-3 px-3">
                            {UserLinks.map((link, index) => (
                                <Link className='hover:font-semibold font-thin' href={link.href} key={index}>{link.title}</Link>
                            ))}

                            <Link href="/sign-up/" className='hover:font-semibold'>Sign up</Link>

                        </div>
                    </div>


                </div>





            </Navbar >

        </>
    )
}

export default UserNavbar;