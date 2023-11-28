'use client';
import { classSchedule } from "@/Data/ClassSchedule"
import { useState } from "react";
const ClassTable = () => {
  const [data, setData] = useState(classSchedule)
  const periods = [1, 2, 3, 4, 5, 6, 7, 8]
  // console.log(data)
  const dayBgChange = (day) => {
    switch (day) {
      case 'Monday':
        return 'bg-rose-600'
        break;
      case 'Tuesday':
        return 'bg-rose-500'
        break;
      case 'Wednesday':
        return 'bg-rose-400'
        break;
      case 'Thursday':
        return 'bg-rose-300'
        break;
      case 'Friday':
        return 'bg-rose-200'
        break;

    }
  }
  const subjectColorChange = (subject) => {
    switch (subject) {
      case 'Islamic':
        return 'bg-red-300'
        break;
      case 'Arabic':
        return 'bg-green-300'
        break;
      case 'English':
        return 'bg-blue-300'
        break;
      case 'Business':
        return 'bg-pink-300'
        break;
      case 'Maths':
        return 'bg-violet-500'
        break;
      case 'SS':
        return 'bg-purple-300'
        break;
      case 'Physics':
        return 'bg-yellow-300'
        break;
      case 'Biology':
        return 'bg-green-400'
        break;
      case 'Science':
        return 'bg-blue-400'
        break;
      case 'Chemistry':
        return 'bg-yellow-400'
        break;
      case 'CCDI':
        return 'bg-green-500'
        break;
      case 'SK':
        return 'bg-pink-400'
        break;
      case 'FRA':
        return 'bg-violet-400'
        break;
      case 'Sport':
        return 'bg-purple-400'
        break;
      case 'Drama':
        return 'bg-red-400'
        break;
      case 'Music':
        return 'bg-green-600'
        break;
      case 'Art':
        return 'bg-blue-500'
        break;
      case 'SN':
        return 'bg-violet-300'
        break;
      case 'JJ':
        return 'bg-red-500'
        break;

    }
  }

  return (

    <div className="flex flex-col" id="classTable">
      <div className="flex bg-slate-800 text-white py-5 justify-center ">
        <h1 className="font-bold text-xl">Class Weekly Schedule</h1>
      </div>
      <div className="flex flex-col bg-slate-200">
        <div className="flex flex-row justify-between border border-slate-50 font-bold">
          <div className="border border-slate-50 w-1/12 flex justify-center items-center bg-indigo-200">
            <span>No</span>
          </div>
          <div className="border border-slate-50 w-1/12 flex justify-center items-center bg-indigo-300">
            <span>Class</span>
          </div>
          <div className="w-10/12 flex flex-row">
            <div className="border border-slate-50 w-2/12 flex justify-center items-center bg-indigo-400">
              <span>Day</span>
            </div>
            <div className="flex flex-col border border-slate-50 w-10/12 justify-center">
              <div className="flex justify-center bg-cyan-800">
                <span>Periods</span>
              </div>
              <div className="flex justify-around">
                {
                  periods.map((i, index) => (
                    <div key={index} className="flex justify-center border border-slate-50 w-full bg-cyan-500">
                      <span className="">{i}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {
          data.map((item, index) => (
            <div key={index} className="flex flex-row justify-between border border-slate-50">
              <div className="border border-slate-50 w-1/12 flex justify-center items-center bg-pink-300">
                <span>{index + 1}</span>
              </div>
              <div className="border border-slate-50 w-1/12 flex justify-center items-center bg-pink-400">
                <span>{item.class}</span>
              </div>
              <div className="border border-slate-50 flex flex-col justify-center w-10/12">
                {
                  item.day.map((days, index) => (
                    <div key={index} className="flex flex-row justify-between">
                      <div className={`${dayBgChange(days.name)} border w-2/12 border-slate-50 flex justify-center`}>
                        <span>{days.name}</span>
                      </div>
                      <div className="flex flex-row justify-between w-10/12">
                        {
                          days.periods.map((per, index) => (
                            <div key={index} className={`${subjectColorChange(per.subject)}    border border-slate-50 w-full flex justify-center`}>
                              <span>{per.subject}</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClassTable