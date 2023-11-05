import React from 'react'

const NavBar = () => {
    return (
        <nav className='bg-black'>
            <div className='text-white bg-blue px-20 py-4'>
                <div>
                    <ul className='flex gap-10 active:text-blue cursor-pointer'>
                        <li>
                            <a href="./">Dashboard</a>
                        </li>
                        <li>
                            <a href="/team">Team</a>
                        </li>
                        <li>
                            <a href="/assign">Assign</a>
                        </li>
                        <li>
                            <a href="/syllabus">Syllabus</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar