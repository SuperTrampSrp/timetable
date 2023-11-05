"use client";
import teacherData from "@/Data/Teachers"
import { useEffect, useState } from "react"
const WeekTable = () => {
  const [teacherWithPeriods, setTeacherWithPeriods] = useState([])
  // console.log(teacherWithPeriods)
  useEffect(() => {
    const teacherDataArray = teacherData.map(teacher => ({
      id: teacher.id,
      name: teacher.name,
      subjects: teacher.subjects,
      classes: teacher.classes,
      lessons: teacher.lessons,
      totalPeriods: countPeriodsWithName(teacher),
    }));
    setTeacherWithPeriods(teacherDataArray)
  }, [])

  const countPeriodsWithName = (teacher) => {
    let totalPeriods = 0;

    teacher.lessons.forEach(lesson => {
      lesson.periods.forEach(period => {
        if (period.division) {
          totalPeriods++;
        }
      });
    });

    return totalPeriods;
  }
  const changeBgColor = (a) => {
    switch (a) {
      case 1:
        return 'bg-red-500'
        break;
      case 2:
        return 'bg-green-500'
        break;
      case 3:
        return 'bg-emerald-500'
        break;
      case 4:
        return 'bg-teal-500'
        break;
      case 5:
        return 'bg-cyan-500'
        break;
      case 6:
        return 'bg-sky-500'
        break;
      case 7:
        return 'bg-blue-500'
        break;
      case 8:
        return 'bg-indigo-500'
        break;
      default:
        console.log('not workig')

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
  const lessonBgChange = (lesson) => {
    if (lesson > 30) {
      return 'bg-red-500'
    } else if (lesson > 25) {
      return 'bg-green-500'

    }
    else {
      return 'bg-yellow-500'

    }
  }
  const periods = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-800 text-white py-5 justify-center">
        <h1 className="font-bold text-xl">Teachers Weekly Schedule</h1>
      </div>
      <table className="table-auto bg-white w-full text-center border-collapse border border-slate-400">
        <tbody className=''>
          <tr>
            <th className='border-solid border-2 border-slate-400 bg-violet-200' rowSpan={2}>No</th>
            <th className='border-solid border-2 border-slate-400 bg-violet-300' rowSpan={2}>Name</th>
            <th className='border-solid border-2 border-slate-400 bg-violet-400' rowSpan={2}>Subject</th>
            <th className='border-solid border-2 border-slate-400 bg-violet-500' rowSpan={2}>Lessons</th>
            <th className='border-solid border-2 border-slate-400 bg-rose-400 ' colSpan={8}>Monday</th>
            <th className='border-solid border-2 border-slate-400 bg-pink-400' colSpan={8}>Tuesday</th>
            <th className='border-solid border-2 border-slate-400 bg-fuchsia-400' colSpan={8}>Wednesday</th>
            <th className='border-solid border-2 border-slate-400 bg-purple-500' colSpan={8}>Thursday</th>
            <th className='border-solid border-2 border-slate-400 bg-violet-400' colSpan={8}>Friday</th>
          </tr>
          <tr className="font-bold">
            {
              periods.map((p) => (
                <td key={p} className='border-solid border-2 border-slate-400 bg-slate-300'>{p}</td>
              ))
            }
            {
              periods.map((p) => (
                <td key={p} className='border-solid border-2 border-slate-400 bg-slate-300'>{p}</td>
              ))
            }
            {
              periods.map((p) => (
                <td key={p} className='border-solid border-2 border-slate-400 bg-slate-300'>{p}</td>
              ))
            }
            {
              periods.map((p) => (
                <td key={p} className='border-solid border-2 border-slate-400 bg-slate-300'>{p}</td>
              ))
            }
            <td className='border-solid border-2 border-slate-400 bg-slate-300'>1</td>
            <td className='border-solid border-2 border-slate-400 bg-slate-300'>2</td>
            <td className='border-solid border-2 border-slate-400 bg-slate-300'>3</td>
            <td className='border-solid border-2 border-slate-400 bg-slate-300'>4</td>
          </tr>
          {
            teacherWithPeriods.map((item, index) => (
              <tr className='' key={index}>
                <td className='border-solid border-2 border-slate-400 bg-pink-300' key={index + 1}>{index + 1}</td>
                <td className='border-solid border-2 border-slate-400 bg-pink-400' key={item.name}>{item.name}</td>
                <td className={`border-solid border-2 border-slate-400 ${subjectColorChange(item.subjects)}`} key={item.subjects}>{item.subjects}</td>
                <td className={`border-solid border-2 border-slate-400 ${lessonBgChange(item.totalPeriods)}`}>{item.totalPeriods}</td>
                {
                  item.lessons.map((days) => (
                    days.periods.map((per, index) => (

                      <td className={`border-solid border-2 border-slate-400 ${per.division == '' ? 'bg-rose-200' : changeBgColor(per.period)}`} key={`${index}${per.division}`}>{per.division}</td>

                    ))
                  ))
                }
              </tr>
            ))
          }


        </tbody>
      </table>
    </div>
  )
}

export default WeekTable