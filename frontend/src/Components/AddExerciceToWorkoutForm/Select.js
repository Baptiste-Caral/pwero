import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md"
import './Select.scss';

function Select({options, size}) {
  
  if (options === undefined) {
    options = []
  }

  // State 
  const [selectedValue, setSelectedValue] = useState('Choisir un exercice')
  const [openList, setOpenList] = useState(false)
  
  
  // Open and close Select div
  const handleOpenList = () => {
    if (openList === false) {
      setOpenList(true)
    } else if (openList === true)
      setOpenList(false)
  }
  const handleChange = (e) => {
    
    setSelectedValue(e.target.value)
  }
  // create an input for each item in listValues array
  const list = options.map((option, i) => <label key={i} className='label' htmlFor={option}> {option}<input id={option} key={i} type="checkbox" value={option} name="name" onChange={handleChange} onClick={handleOpenList}/></label> )
  
  return (
    <div className={`select-wrapper-${size}`}>
      <div className="select-container">
        <div className="select" onClick={handleOpenList}>
          <div>
            {selectedValue}
          </div>
          <div>
            <MdKeyboardArrowDown size={21}/>
          </div> 
        </div>
        <div className="select-form-container">
          <div className={`select-form ${openList ? "select-form" : "select-form-open"}`}>
            {list}
          </div>
        </div>
      </div>  
    </div>
  );
}
export default Select;