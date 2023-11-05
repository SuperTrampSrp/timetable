export const changeBgColor = (a) => {
    switch (a) {
      case 1 :
        return 'bg-red-500'
        break;
      case 2 :
        return 'bg-green-500'
        break;
      case 3 :
        return 'bg-emerald-500'
        break;
      case 4 :
        return 'bg-teal-500'
        break;
      case 5 :
        return 'bg-cyan-500'
        break;
      case 6 :
        return 'bg-sky-500'
        break;
      case 7 :
        return 'bg-blue-500'
        break;
      case 8 :
        return 'bg-indigo-500'
        break;
      default: 
      console.log('not workig')
        
    }
}
export const subjectColorChange = (subject) =>  {
  switch (subject) {
    case 'Islamic' :
      return 'bg-red-300'
      break;
    case 'Arabic' :
      return 'bg-green-300'
      break;
    case 'English' :
      return 'bg-blue-300'
      break;
    case 'Business' :
      return 'bg-pink-300'
      break;
    case 'Maths' :
      return 'bg-violet-500'
      break;
    case 'SS' :
      return 'bg-purple-300'
      break;
    case 'Physics' :
      return 'bg-yellow-300'
      break;
    case 'Biology' :
      return 'bg-green-400'
      break;
    case 'Science' :
      return 'bg-blue-400'
      break;
    case 'Chemistry' :
      return 'bg-yellow-400'
      break;
    case 'CCDI' :
      return 'bg-green-500'
      break;
    case 'SK' :
      return 'bg-pink-400'
      break;
    case 'FRA' :
      return 'bg-violet-400'
      break;
    case 'Sport' :
      return 'bg-purple-400'
      break;
    case 'Drama' :
      return 'bg-red-400'
      break;
    case 'Music' :
      return 'bg-green-600'
      break;
    case 'Art' :
      return 'bg-blue-500'
      break;
    case 'SN' :
      return 'bg-violet-300'
      break;
    case 'JJ' :
      return 'bg-red-500'
      break;
    
  }
}
export const lessonBgChange = (lesson) => {
  if(lesson > 30){
    return 'bg-red-500'
  }else if (lesson > 25){
    return 'bg-green-500'

  }
  else{
    return 'bg-yellow-500'

  }
}