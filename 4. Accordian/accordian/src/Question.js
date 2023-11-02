import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({question}) => {
 const {id, title, info} = question
 const [showInfo, setShowInfo] =useState(false)

 const show = () =>{

 }

 const remove = ()=>{

 }
  return (
    <div className='question-container'>
    <div className='question'>
      <h3>{title}</h3>
      {showInfo?<AiOutlineMinus className='icon' onClick={()=>{
        setShowInfo(!showInfo)
      }}/>:<AiOutlinePlus className='icon' onClick={()=>{
        setShowInfo(!showInfo)
      }}/>}
      
        
    </div>
     <span>{showInfo && info}</span>
    </div>

  )
}

export default Question
