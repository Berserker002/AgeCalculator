import React, {useRef, useState} from 'react'
import './AgeCalculator.css';

export const AgeCalculator = () => {


  const userInputRef = useRef();
  const [age, setAge] = useState('');

  const ageSubmitCalculator = (event) => {
    event.preventDefault();
    const dob = new Date(userInputRef.current.value)
     AgeCalculatorFunction(dob);
  }

  const AgeCalculatorFunction = (dob) => {
    const now = new Date();

    const yearNow = now.getFullYear()
    const monthNow = now.getMonth()
    const dayNow = now.getDate()

    const yearDob = dob.getFullYear();
    const monthDob = dob.getMonth();
    const dayDob = dob.getDate();


    let yearAge = yearNow - yearDob

    let monthAge
    
    if(monthNow >= monthDob){
      monthAge = monthNow - monthDob
    }else{
      yearAge--
      monthAge = 12 + monthNow - monthDob 
    }

    let dayAge 

    if(dayNow >= dayDob){
      dayAge = dayNow - dayDob
    }else{
      monthAge--
      dayAge = 31 + dayNow - dayDob

      if(monthAge < 0){
        monthAge = 11
        yearAge--
      }
    }

    const age = {
      year : yearAge,
      month : monthAge,
      day : dayAge
    }

    const yearString = (yearAge > 1) ? 'years' : 'year'
    const monthString = (monthAge > 1) ? 'months' : 'month'
    const dayString = (dayAge > 1) ? 'days' : 'day'

    let ageString;

    if((age.year > 0) && (age.month > 0) && (age.day > 0)){
      ageString = age.year + " "+ yearString + ", " + age.month + " " + monthString + ", and " + age.day + " "+ dayString + " old." 
    }else if((age.year > 0) && (age.month === 0) && (age.day === 0)){
      ageString = "Happy Birthday you are now " + age.year + " " + yearString + " old."
    }else if((age.year > 0) && (age.month > 0) && (age.day === 0)){
      ageString = age.year + " " + yearString + ", and " + age.month + " " + monthString +" old." 
    }else if((age.year === 0) && (age.month > 0) && (age.day === 0)){
      ageString = age.month + " " + monthString +" old." 
    }else if((age.year === 0) && (age.month > 0) && (age.day > 0)){
      ageString = age.month + " " + monthString+ ", and " + age.day + " " + dayString +" old." 
    }else if((age.year === 0) && (age.month === 0) && (age.day > 0)){
      ageString = "Only " + age.day + " " + dayString +" old." 
    }else if((age.year > 0) && (age.month === 0) && (age.day > 0)){
      ageString = age.year + " " + yearString + ", and " + age.day + " " + dayString +" old." 
    }else{
      ageString = "Not born yet."
    }
    
    
    setAge(ageString)
  }

  return (
    <form onSubmit={ageSubmitCalculator}>
      <div className='forms__controls'>
        <div className='forms__control'>
        <label htmlFor='dob'>Enter your Date Of Birth</label>
        <input type='date' id='dob' min='1900-01-01' max='2022-12-31' ref={userInputRef}></input>
        <button>Calculate Your Age</button>
        <p>{age}</p>
        </div>
      </div>
      <div className='forms__actions'>
        
      </div>
    </form>
  )
}

export default AgeCalculator