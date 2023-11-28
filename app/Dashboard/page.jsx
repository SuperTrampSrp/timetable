'use client';

import ClassTable from '@/components/ClassTable';
import WeekTable from '@/components/WeekTable'
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';


const Dashboard = () => {
  const [table, setTable] = useState()
  const [radioValue, setRadioValue] = useState('teacher')
  const [radioBg1, setRadioBg1] = useState('')
  const [radioBg2, setRadioBg2] = useState('')
  const [loader, setLoader]  = useState(false)


  const handleChange = (e) => {
    const value = e.target.value
    setRadioValue(value)
    value == 'teacher' ? (setRadioBg1('bg-red-500'), setRadioBg2('bg-green-500')) : 'class' ? (setRadioBg2('bg-red-500'), setRadioBg1('bg-green-500')) : (setRadioBg1('bg-green-500'), setRadioBg2('bg-green-500'))
  }

  const downloadPDF = () => {
    const content = document.getElementById('teacherTable');
    const pdfOptions = {
      margin: 10,
      filename: 'timetable.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' },
    };
    html2pdf(content, pdfOptions);
  }

  // console.log(radioValue)
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center m-5'>
        <form action="">
          <ul className='flex flex-row justify-center relative bg-slate-50 p-1 border rounded-full border-none'>
            <li className={`${radioBg1} bg-green-500 p-3 border rounded-full w-28 border-none flex justify-center`}>
              <input id='teacher' type="radio" name='selection' value="teacher" className='hidden' onChange={handleChange} />
              <label htmlFor="teacher">Teacher</label>
            </li>
            <li className={`${radioBg2} bg-green-500 p-3 border rounded-full w-28 border-none flex justify-center`}>
              <input id='class' type="radio" name='selection' value="class" className='hidden' onChange={handleChange} />
              <label htmlFor="class">Class</label>
            </li>
          </ul>
        </form>
      </div>
      <div id='timetable'>
        {
          radioValue == 'teacher' ? <WeekTable id = "teacherTable"/> : <ClassTable  id = "class_table"/>
        }
      </div>
      <div className='flex justify-center m-5'>
        <button className='bg-cyan-500 p-3 border border-none rounded-2xl text-white font-bold' onClick={downloadPDF}>
        Download
        </button>
      </div>
    </div>
  )
}

export default Dashboard