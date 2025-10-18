"use client"

import {useEffect, useState} from "react";

export default function Home() {

  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(     // calling api and getting data
      response => response.json()
    ).then(
      data => {
        // message = 'Loading'
        // once data is retrieved
        // message = data.message
        setMessage(data.message);
        setPeople(data.people);
      }
    )
  }, [])

  
  return (
    <div>
      <div>{message}</div>

{
  people.map((person, index) => (
    <div key={index}>{person}</div>
  ))
}

    </div>
  )
}
