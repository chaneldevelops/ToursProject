import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project' //personal API setup

function App() {
  const [loading, setLoading] = useState(true); //This is so we'll see the loading component
  const [tours, setTours] = useState([]);
  if (loading){
    return <main>
       <Loading /> {/* becasue loading is set to true it is displayed */}
    </main>
  }
  return <h2>Tours Project Setup</h2>
}

export default App
