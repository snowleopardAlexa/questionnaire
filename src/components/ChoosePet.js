import React, {useReducer} from 'react';

// initial state message
const initialState = {
    message: "Great choice!"
};

// switch statement
function reducer(state, action) {
    switch(action.type) {
        case "DOGS": 
           return {
               message: `Awesome, ${state.message}`
           };
        case "CATS":
            return {
                message: `I don't like cats, but ${state.message} anyway`
            };
    }
}

function ChoosePet() {
    const [state, dispatch] = useReducer (
        reducer, initialState
    );
    return (
      <div class="choose-pet">
          <h2>Which pet do you prefer?</h2>
          <p>Message: {state.message}</p>
          <button onClick={() => dispatch({ type: "DOGS" })}>DOGS</button>
          <button onClick={() => dispatch({ type: "CATS"})}>CATS</button>
      </div>
    );
}

export default ChoosePet;