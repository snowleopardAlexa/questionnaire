import React, {useState} from 'react';

function Food() {

const [italianFood, setCheckedItalianFood] = useState(false);
const [polishFood, setCheckedPolishFood] = useState(false);
const [frenchFood, setCheckedFrenchFood] = useState(false);
const [indianFood, setCheckedIndianFood] = useState(false);

  return (
      <div className="food-type">
          <h2>What is your favorite food?</h2>
          <div class="option-one">
              <p>Italian food</p>
              <input 
                 type="checkbox"
                 value={italianFood}
                 onChange={() => setCheckedItalianFood((italianFood) => !italianFood)}
              />
              <p>{italianFood ? "Pizza and Pasta! Mniam!" : ""}</p>
          </div>

          <div class="option-two">
              <p>Polish food</p>
              <input 
                 type="checkbox"
                 value={polishFood}
                 onChange={() => setCheckedPolishFood((polishFood) => !polishFood)}
              />
              <p>{polishFood ? "Pierogies" : ""}</p>
          </div>

          <div class="option-three">
              <p>French food</p>
              <input 
                 type="checkbox"
                 value={frenchFood}
                 onChange={() => setCheckedFrenchFood((frenchFood) => !frenchFood)}
              />
              <p>{frenchFood ? "Elegant and neat!" : ""}</p>
          </div>

          <div class="option-two">
              <p>Indian food</p>
              <input 
                 type="checkbox"
                 value={indianFood}
                 onChange={() => setCheckedIndianFood((indianFood) => !indianFood)}
              />
              <p>{indianFood ? "Naan Bread" : ""}</p>
          </div>
      </div>
  )
}

export default Food;