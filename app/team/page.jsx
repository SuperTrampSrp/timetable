'use client';
import teacherData from '@/Data/Teachers'
import NavBar from '@/components/NavBar'
import { useState } from 'react';

const Team = () => {
    const [data, setData] = useState(teacherData)
    const [addData, setAddData] = useState({name:'', subject:'', class:'', days:'',})
    const subjects = ['Islamic', 'Arabic','English','Business','Maths','SS','Physics','Biology','Science','Chemistry','CCDI','SK','FRA', 'Sport', 'Drama', 'Music', 'Art', 'SN', 'JJ']
    const classes = ['9A', '9B', '9C', '10A', '10B', '10C', '10D', '11A', '11B', '11C', '12A', '12B', '12C' ]
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]
    const addTeacher = (e) => {
        e.preventDefault()
    }
    return (
        <div className="bg-slate-600 min-h-screen w-full font-popi">
            <NavBar />
            <div className='flex flex-col justify-center px-20 mt-5'>
                <div className='flex justify-center py-5 mt-5 bg-slate-800'>
                    <h1 className='text-white text-xl'>Our Team</h1>
                </div>
                <div className='flex justify-center mb-10'>
                    <table className='w-full'>
                        <thead>
                            <tr className='bg-teal-500 h-10 text-center text-white'>
                                <td className='border border-white w-20'>Ser No</td>
                                <td className='border border-white'>Name</td>
                                <td className='border border-white'>Subject</td>
                                <td className='border border-white'>Classes </td>
                                <td className='border border-white'>Available Days</td>
                                <td className='border border-white'>Lessons</td>
                            </tr>
                        </thead>
                        <tbody className='bg-cyan-500'>
                            {
                                data.map((item, index) => (

                                    <tr className='h-10 text-center text-slate-800' key={item.id}>
                                        <td className='border border-white'>{index + 1}</td>
                                        <td className='border border-white'>{item.name}</td>
                                        <td className='border border-white'>{item.subjects}</td>
                                        <td className='border border-white'>aaa</td>
                                        <td className='border border-white'>aaaa</td>
                                        <td className='border border-white'>aaaa</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-slate-500 py-5 mb-20'>
                    <div className='flex flex-row justify-around p-5'>

                        <div className='flex flex-row'>
                            <label htmlFor="name" className='text-white p-3'>Name</label>
                            <input type="text" name="name" id="name" className='border border-none rounded-lg p-2' placeholder='Enter the name'/>
                        </div>
                        <div>
                            <label htmlFor="subjects" className='text-white p-3'>Subjects</label>
                            <select name="subjects" id="subjects" className='p-3 border border-none rounded-lg'>
                                <option value="">Select Subjects</option>
                                {
                                    subjects.map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="classes" className='text-white p-3'>Classes</label>
                            <select name="classes" id="classes" className='p-3 border border-none rounded-lg'>
                                <option value="">Select Classes</option>
                                {
                                    classes.map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="days" className='text-white p-3'>Days</label>
                            <select name="days" id="days" className='p-3 border border-none rounded-lg'>
                                <option value="">Select Days</option>
                                {
                                    days.map((i) => (
                                        <option key={i} value={i}>{i}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='bg-cyan-500 w-20 border border-none rounded-lg flex justify-center text-white font-bold hover:bg-red-600'>
                            <button onClick={addTeacher}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team