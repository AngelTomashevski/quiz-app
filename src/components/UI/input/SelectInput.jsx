import React, {Fragment} from 'react'


const SelectInput = ({id, labelText, className,inputValue, onChange, optionValueOne, optionValueTwo, optionValueThree,optionValueFour, optionValueFive}) => {
   
  return (
     <Fragment>
            <label htmlFor={id}>{labelText}</label>
            <select
              name={id}
              id={id}
              className={className}
              value={inputValue}
              onChange={onChange}
            >
              <option value={optionValueOne}>{optionValueOne}</option>
              {optionValueTwo ? <option value={optionValueTwo}>{optionValueTwo}</option> : null }
              {optionValueThree ? <option value={optionValueThree}>{optionValueThree}</option> : null }
              {optionValueFour ? <option value={optionValueFour}>{optionValueFour}</option> : null }
              {optionValueFive ? <option value={optionValueFive}>{optionValueFive}</option> : null }
            </select>
</Fragment>
  )
}

export default SelectInput