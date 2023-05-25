import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project' //personal API setup

function App() {
  const [loading, setLoading] = useState(true); //This is so we'll see the loading component
  const [tours, setTours] = useState([]);


  const fetchTours = async () => {
    setLoading(true) //Can be an extra precaution for loading to show when fetch the data
    const response = await fetch(url);
    const tours = await response.json(); //Run JSON since it has to be parsed
  }
  useEffect(() => {
    fetchTours();
  },[]) //Use Effect to only run once on intital render


  if (loading){
    return (
      <main>
        <Loading /> {/* becasue loading is set to true it is displayed */}
      </main>
    );
  }
  return (
    <main>
       <Tours /> {/*Need a return if we're not loading */}
    </main>
  )
}

export default App
