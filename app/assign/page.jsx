"use client";
import teacherData from "@/Data/AssignedTeachers"
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

const Assign = () => {
    const [assignment, setAssignment] = useState([])
    const [assign, setAssign] = useState([])
    const [divisionDay, setDivisionDay] = useState({ division: "", day: "" })
    const [periode, setPeriode] = useState({ subject: "", teacher: "", periode: '' })
    const [division, setDivision] = useState()
    const [day, setDay] = useState()
    // console.log(periode)

    const classChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDivisionDay({ ...divisionDay, [name]: value })
    }
    const periodeChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPeriode({ ...periode, [name]: value })
    }

    const submitHandler = () => {
        const dataSet = [{ ...divisionDay, periodes: periode }]
        setAssign(dataSet)
    }
    useEffect(() => {
        console.log(assign)
        assign.map((item) => {
            const div = item.division
            console.log(div)
            setAssignment([...assignment, item])
        })
    }, [assign])
    console.log(assignment)
    return (
        <div className="bg-slate-600 min-h-screen w-full font-popi">
            <NavBar />
            <div className="px-20 py-10">
                <div className="flex justify-center py-5 mt-5 bg-slate-800">
                    <h1 className="text-white text-xl">Assign Teachers</h1>
                </div>
                <div className='text-white '>
                    <div className="bg-white p-3 mb-10 ">


                        <div className='flex flex-row justify-around bg-cyan-500 px-10 py-5 border rounded-lg border-none gap-2'>
                            <div className="flex flex-col justify-center align-middle bg-cyan-300 p-3 border rounded-l-lg border-none ml-5 w-1/3">
                                <div className="flex justify-center">
                                    <span>Class</span>
                                </div>
                                <div className="flex flex-row justify-center gap-2 py-2 px-2">
                                    <select name="division" id="division" className="text-slate-700 border rounded border-red-500 bg-cyan-50" onChange={classChangeHandler}>
                                        <option className="bg-violet-200 self-center text-center" value="">Select Class</option>
                                        <option className="bg-violet-300 text-center self-center" value="9A">9A</option>
                                        <option className="bg-violet-300 text-center self-center" value="9B">9B</option>
                                        <option className="bg-violet-300 text-center self-center" value="9C">9C</option>
                                        <option className="bg-violet-300 text-center self-center" value="10A">10A</option>
                                        <option className="bg-violet-300 text-center self-center" value="10B">10B</option>
                                        <option className="bg-violet-300 text-center self-center" value="10C">10C</option>
                                        <option className="bg-violet-300 text-center self-center" value="10D">10D</option>
                                        <option className="bg-violet-300 text-center self-center" value="11A">11A</option>
                                        <option className="bg-violet-300 text-center self-center" value="11B">11B</option>
                                        <option className="bg-violet-300 text-center self-center" value="11C">11C</option>
                                        <option className="bg-violet-300 text-center self-center" value="12A">12A</option>
                                        <option className="bg-violet-300 text-center self-center" value="12B">12B</option>
                                        <option className="bg-violet-300 text-center self-center" value="12C">12C</option>
                                    </select>
                                </div>

                            </div>
                            <div className="flex flex-col justify-center align-middle bg-cyan-300 p-3 border border-none w-1/3">
                                <div className="flex justify-center ">
                                    <span>Day</span>

                                </div>
                                <div className="flex flex-row justify-center gap-2 py-2 px-2">

                                    <select name="day" id="day" className="text-slate-700 border rounded border-red-500 bg-cyan-50" onChange={classChangeHandler}>
                                        <option className="bg-violet-200 text-center self-center" value="">Select Day</option>
                                        <option className="bg-violet-300 text-center self-center" value="monday">Monday</option>
                                        <option className="bg-violet-300 text-center self-center" value="tuesday">Tuesday</option>
                                        <option className="bg-violet-300 text-center self-center" value="wednesday">Wednesday</option>
                                        <option className="bg-violet-300 text-center self-center" value="thursday">Thursday</option>
                                        <option className="bg-violet-300 text-center self-center" value="friday">Friday</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center align-middle bg-cyan-300 p-3 border rounded-r-lg border-none mr-5 w-full">
                                <div className="flex justify-center ">
                                    <span>Periodes</span>
                                </div>
                                <div className="flex flex-row justify-between gap-2 px-5">

                                    <div className="flex flex-col py-2 text-black" >
                                        <select name="periode" id="periode" className="text-slate-700 border rounded border-red-500 bg-cyan-50" onChange={periodeChangeHandler}>
                                            <option className="bg-violet-200 text-center self-center" value="">Select Periode</option>
                                            <option className="bg-violet-300 text-center self-center" value="1">1</option>
                                            <option className="bg-violet-300 text-center self-center" value="2">2</option>
                                            <option className="bg-violet-300 text-center self-center" value="3">3</option>
                                            <option className="bg-violet-300 text-center self-center" value="4">4</option>
                                            <option className="bg-violet-300 text-center self-center" value="5">5</option>
                                            <option className="bg-violet-300 text-center self-center" value="6">6</option>
                                            <option className="bg-violet-300 text-center self-center" value="7">7</option>
                                            <option className="bg-violet-300 text-center self-center" value="8">8</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col py-2 text-black" >
                                        <select name="subject" id="subject" className="text-slate-700 border rounded border-red-500 bg-cyan-50" onChange={periodeChangeHandler}>
                                            <option className="bg-violet-200 text-center self-center" value="">Select Subject</option>
                                            <option className="bg-violet-300 text-center self-center" value="Math">Math Subject</option>
                                            <option className="bg-violet-300 text-center self-center" value="Phy">PHy Subject</option>
                                            <option className="bg-violet-300 text-center self-center" value="Cham">Cham Subject</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col py-2 text-black" onChange={periodeChangeHandler}>
                                        <select name="teacher" id="teacher" className="text-slate-700 border rounded border-red-500 bg-cyan-50">
                                            <option className="bg-violet-200 text-center self-center" value="John">John Teacher</option>
                                            <option className="bg-violet-300 text-center self-center" value="Marry">Marry Teacher</option>
                                            <option className="bg-violet-300 text-center self-center" value="Thomas">Thomas Teacher</option>
                                            <option className="bg-violet-300 text-center self-center" value="Kevin">Kevin Teacher</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col py-2 text-black bg-yellow-500 p-3 border rounded-lg border-none" onChange={periodeChangeHandler}>
                                        <button className=" p-1" type="button" onClick={submitHandler}>Assign</button>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div>
                        <table className="w-full border border-slate-500">
                            <thead>
                                <tr className="bg-teal-400">
                                    <th className="w-20 border border-white">Class</th>
                                    <th className="w-32 border border-white">Day</th>
                                    <th className="w-32 border border-white">1</th>
                                    <th className="w-32 border border-white">2</th>
                                    <th className="w-32 border border-white">3</th>
                                    <th className="w-32 border border-white">4</th>
                                    <th className="w-32 border border-white">5</th>
                                    <th className="w-32 border border-white">6</th>
                                    <th className="w-32 border border-white">7</th>
                                    <th className="w-32 border border-white">8</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    assignment ? assignment.map((item, index) => (
                                        <tr className="bg-sky-400 text-slate-800 text-center h-10 " key={index} >
                                            <td className="border border-white  ">{item.division}</td>
                                            <td className="border border-white ">
                                                {item.day}
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 1 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 1 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 2 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 2 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 3 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 3 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 4 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 4 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 5 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 5 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 6 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 6 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 7 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 7 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                            <td className="border border-white ">
                                                <div>
                                                    <h1 className="text-slate-300">{item.periodes.periode == 8 ? item.periodes.subject : ''}</h1>
                                                    <h1>{item.periodes.periode == 8 ? item.periodes.teacher : ''}</h1>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : null
                                }
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Assign