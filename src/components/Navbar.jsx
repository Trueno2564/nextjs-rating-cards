import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-700'>
            <ul className='flex gap-10 container mx-auto flex p-4 gap-10 items-center'>
                <li><Link className='text-slate-300 hover:text-slate-400 text-3xl font-bold' href="/">Next CRUD</Link></li>
                <li><Link className='text-slate-300 hover:text-slate-400' href="/new">New</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar