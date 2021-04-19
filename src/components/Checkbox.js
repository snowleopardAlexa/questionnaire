import React, { useReducer } from 'react';

function Checkbox() {
    const [checked, toggle] = useReducer(
         (checked) => !checked,
         false
    );

  return (
      <>
      <h2>Checkbox</h2>
        <input 
          type="checkbox" 
          value={checked} 
          onChange={(toggle)}
        />
          <p>{checked ? "checked" : "not checked"}</p>
      </>
  )
}


export default Checkbox;