import React, { useState, useEffect} from 'react';

// https://api.github.com/users/snowleopardAlexa

function FetchData({ login }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        if(!login) return;
        fetch(`https://api.github.com/users/${login}`)
          .then((response) => response.json())
          .then(setData)
          .then(() => setLoading(false))
          .catch(setError);
    }, [login]);

    if (loading) return <h1>Loading...</h1>;
    if (error) 
       return <pre>{JSON.stringify(error, null, 2)}</pre>;
       if (!data) return null;
  
   return (
      <>
        <h2>{data.name}</h2>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </>
   );
 }




export default FetchData;