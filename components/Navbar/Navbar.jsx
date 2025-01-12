"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { Model, TokenList } from '..';
const logo = require("@/assests/logo.png")

const Navbar = () => {
    const menuItems = [
        {
            name : "Swap",
            link : "/"
        },
        {
            name : "Tokens",
            link : "/"
        },
        {
            name : "Pools", 
            link : "/"
        },
    ]

    const [openModel, setOpenModel] = useState(false)
    const [openTokenBox, setOpenTokenBox] = useState(false)
  return (
    <div>
        <div className='flex flex-row justify-between items-center p-4'>
            <div className='flex flex-row items-center gap-7'>
                <div>
                    <Image src={logo} alt="logo" width={70} height={70} />
                </div>
                <div className='flex flex-row items-center gap-12 text-xl font-semibold'>
                    {menuItems.map((el,index) => (
                        <Link key={index + 1} href={{pathname : `${el.name}`, query : `${el.link}`}}>
                            <p>
                                {el.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-row items-center gap-4 bg-gray-200 p-2 rounded-lg'>
                    <div>
                        <CiSearch/>
                    </div>
                    <input type="text" placeholder='Search Tokens' className='bg-gray-200 rounded-lg '/>
                </div>
            </div>
            <div className='flex flex-row items-center gap-12 text-lg font-semibold'>
                <div className='flex flex-row items-center gap-2 '>
                    <div>
                        <FaEthereum/>
                    </div>
                    <p>Network Name</p>
                </div>
                <button onClick={() => setOpenModel(true)}>Address</button>

                {openModel && (
                    <Model setOpenModel={setOpenModel} connectWallet="Connect"/>
                )}
            </div>
        </div>
        {openTokenBox && (
            <TokenList setOpenTokenBox={setOpenTokenBox} tokenDate = "hey" />
        )}
    </div>
  )
}

export default Navbar