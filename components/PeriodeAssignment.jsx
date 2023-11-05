"use client";
import teacherData from "@/Data/AssignedTeachers"
import { useEffect, useState } from "react";
const PeriodeAssignment = () => {
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
        <div className='text-white'>
            <div className='flex px-10 py-3 gap-2'>
                <div className="basis-1/6">
                    <div className="">
                        <span>Class</span>
                    </div>
                    <div className="flex flex-row justify-between gap-2 py-2 px-2">
                        <select name="division" id="division" className="text-black" onChange={classChangeHandler}>
                            <option value="">Select Class</option>
                            <option value="9A">9A</option>
                            <option value="9B">9B</option>
                            <option value="9C">9C</option>
                            <option value="10A">10A</option>
                            <option value="10B">10B</option>
                            <option value="10C">10C</option>
                            <option value="10D">10D</option>
                            <option value="11A">11A</option>
                            <option value="11B">11B</option>
                            <option value="11C">11C</option>
                            <option value="12A">12A</option>
                            <option value="12B">12B</option>
                            <option value="12C">12C</option>
                        </select>
                    </div>
                </div>
                <div className="basis-1/6">
                    <div className="px-2 ">
                        <span>Day</span>
                    </div>
                    <div className="flex flex-row justify-between py-2 gap-2 px-2">
                        <select name="day" id="day" className="text-black" onChange={classChangeHandler}>
                            <option value="">Select Day</option>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                        </select>
                    </div>
                </div>
                <div className="basis-5/6 ">
                    <div className="px-2 ">
                        <span>Periodes</span>
                    </div>
                    <div className="flex flex-row justify-between gap-2 px-2">
                        <div className="flex flex-col py-2 text-black" >
                            <select name="periode" id="periode" onChange={periodeChangeHandler}>
                                <option value="">Select Periode</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="flex flex-col py-2 text-black" >
                            <select name="subject" id="subject" onChange={periodeChangeHandler}>
                                <option value="">Select Subject</option>
                                <option value="Math">Math Subject</option>
                                <option value="Phy">PHy Subject</option>
                                <option value="Cham">Cham Subject</option>
                            </select>
                        </div>
                        <div className="flex flex-col py-2 text-black" onChange={periodeChangeHandler}>
                            <select name="teacher" id="teacher">
                                <option value="John">John Teacher</option>
                                <option value="Marry">Marry Teacher</option>
                                <option value="Thomas">Thomas Teacher</option>
                                <option value="Kevin">Kevin Teacher</option>
                            </select>
                        </div>
                        <div className="flex flex-col py-2 text-black" onChange={periodeChangeHandler}>
                            <button type="button" onClick={submitHandler}>Assign</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table className="table-auto w-full border border-slate-500">
                    <thead>
                        <tr >
                            <th className="w-20 border border-slate-400">Class</th>
                            <th className="w-20 border border-slate-400">Day</th>
                            <th className="border border-slate-400">1</th>
                            <th className="border border-slate-400">2</th>
                            <th className="border border-slate-400">3</th>
                            <th className="border border-slate-400">4</th>
                            <th className="border border-slate-400">5</th>
                            <th className="border border-slate-400">6</th>
                            <th className="border border-slate-400">7</th>
                            <th className="border border-slate-400">8</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            assignment ? assignment.map((item, index) => (
                                <tr key={index} >
                                    <td className="border border-slate-400">{item.division}</td>
                                    <td className="border border-slate-400">
                                        {item.day}
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 1 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 1 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 2 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 2 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 3 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 3 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 4 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 4 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 5 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 5 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 6 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 6 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 7 ? item.periodes.subject : ''}</h1>
                                            <h1>{item.periodes.periode == 7 ? item.periodes.teacher : ''}</h1>
                                        </div>
                                    </td>
                                    <td className="border border-slate-400">
                                        <div>
                                            <h1>{item.periodes.periode == 8 ? item.periodes.subject : ''}</h1>
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
    )
}

export default PeriodeAssignment