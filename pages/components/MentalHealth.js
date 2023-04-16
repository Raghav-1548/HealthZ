import React from 'react'
import axios from 'axios';

function fetchAPI() {
  axios.get('http://localhost:8080/heartdisease')
    .then(response => console.log(response.data))
}

function MentalHealth() {
  return (
    <>
    <div>MentalHealth</div>
    {fetchAPI}
    </>
  )
}

export default MentalHealth