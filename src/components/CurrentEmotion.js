import React, { useState, useEffect } from 'react';


function CurrentEmotion() {
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("crabby");

    useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion]);

    useEffect(() => {
        console.log(`It's ${secondary} around here`);
    }, [secondary]);

    return (
        <>
          <h1>Current emotion is {emotion} and {secondary}</h1>
          <button onClick={() => setEmotion("happy")}>
              Make Happy
          </button>
          <button onClick={() => setSecondary("crabby")}>
              Make Crabby
          </button>
          <button onClick={() => setEmotion("frustrated")}>
              Make Frustrate
          </button>
          <button onClick={() => setEmotion("enthusiastic")}>
              Make Enthuse
          </button>
        </>
    );
}

export default CurrentEmotion;

