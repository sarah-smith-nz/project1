import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "./auth-service";

const useFetch = (url) => {
  const user = AuthService.getCurrentUser();
  console.log(user)
  

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  const token = user? user.Token : 1

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url,  {headers: {
        "Content-Type" : "application/json",
        "Authorization": `Bearer ${token}`
      }}, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url, token])

  return { data, isPending, error };

}

 
export default useFetch;