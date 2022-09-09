import React,{Fragment} from 'react'

const Input = ({id,type, labelText, className,inputValue, onChange,min,max}) => {
  return (
    <Fragment>
            <label htmlFor={id}>{labelText}</label>
            <input
              type={type || "text"}
              name={id}
              id={id}
              className={className}
              value={inputValue}
              onChange={onChange}
              min={min || null}
              max={max|| null}
            />  
    </Fragment>
  )
}

export default Input