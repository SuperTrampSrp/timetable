'use client';
import { classSchedule } from "@/Data/ClassSchedule"
import { useState } from "react";
const ClassTable = () => {
    const [data, setData] = useState(classSchedule)
    console.log(data)
    return (

        <div className="flex flex-col">
            <div className="flex bg-slate-800 text-white py-5 justify-center">
                <h1 className="font-bold text-xl">Class Weekly Schedule</h1>
            </div>
            <table className="table-auto bg-white w-full text-center border-collapse border border-slate-400">
                <thead >
                    <tr >
                        <th className='border-solid border-2 border-slate-400 bg-violet-200 w-10' rowSpan={2}>No</th>
                        <th className='border-solid border-2 border-slate-400 bg-violet-300 w-20' rowSpan={2}>Class</th>
                        <th className='border-solid border-2 border-slate-400 bg-rose-400 w-28' rowSpan={2}>Day</th>
                        <th className='border-solid border-2 border-slate-400 bg-pink-400' colSpan={8}>Periods</th>
                    </tr>
                    <tr>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>1</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>2</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>3</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>4</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>5</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>6</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>7</td>
                        <td className='border-solid border-2 border-slate-400 bg-slate-300 font-semibold'>8</td>

                    </tr>
                </thead>
                {
                    data.map((item, index) => (
                        <tbody className='' key={index}>
                            <tr>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300' rowSpan={5}>{index + 1}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300' rowSpan={5}>{item.class}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].name}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][1]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][2]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][3]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][4]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][5]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][6]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][7]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[0].periods[0][8]}</td>
                            </tr>
                            <tr>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].name}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][1]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][2]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][3]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][4]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][5]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][6]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][7]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[1].periods[0][8]}</td>
                            </tr>
                            <tr>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].name}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][1]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][2]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][3]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][4]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][5]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][6]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][7]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[2].periods[0][8]}</td>
                            </tr>
                            <tr>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].name}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][1]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][2]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][3]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][4]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][5]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][6]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][7]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[3].periods[0][8]}</td>
                            </tr>
                            <tr>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].name}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][1]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][2]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][3]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][4]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][5]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][6]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][7]}</td>
                                <td className='border-solid border-2 border-slate-400 bg-slate-300'>{item.day[4].periods[0][8]}</td>
                            </tr>
                        </tbody>
                    ))
                }

            </table>
        </div>
    )
}

export default ClassTable