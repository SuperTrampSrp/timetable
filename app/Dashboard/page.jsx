'use client';

import ClassTable from '@/components/ClassTable';
import WeekTable from '@/components/WeekTable'
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [table, setTable] = useState()
  const [radioValue, setRadioValue] = useState('teacher63')
  const [radioBg1, setRadioBg1] = useState('')
  const [radioBg2, setRadioBg2] = useState('')


  const handleChange = (e) => {
    const value = e.target.value
    setRadioValue(value)
    value == 'teacher' ? (setRadioBg1('bg-red-500'), setRadioBg2('bg-green-500')): 'class' ? (setRadioBg2('bg-red-500'), setRadioBg1('bg-green-500')) : (setRadioBg1('bg-green-500'), setRadioBg2('bg-green-500'))
  }

  // console.log(radioValue)
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center m-5'>
        <form action="">
        <ul className='flex flex-row justify-center relative bg-slate-50 p-1 border rounded-full border-none'>
          <li className={`${radioBg1} bg-green-500 p-3 border rounded-full w-28 border-none flex justify-center`}>
            <input id='teacher' type="radio" name='selection' value="teacher" className='hidden' onChange={handleChange}/>
            <label htmlFor="teacher">Teacher</label>
          </li>
          <li className={`${radioBg2} bg-green-500 p-3 border rounded-full w-28 border-none flex justify-center`}>
            <input id='class' type="radio" name='selection' value="class" className='hidden' onChange={handleChange}/>
            <label htmlFor="class">Class</label>
          </li>
        </ul>
        </form>
      </div>
      <div>
        {
          radioValue == 'teacher' ? <WeekTable/> : <ClassTable/>
        }
      </div>
    </div>
  )
}

export default Dashboard