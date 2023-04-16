import React from 'react';
import { useState } from 'react';


export default function DiabetesPredictor() {

  const [form, setform] = useState({});
  function handleForm(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const submitform = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form))
    const response = await fetch('http://localhost:7000/diabites', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.text();
    alert(data);
  }

  return (
    <>
        <form className='overflow-hidden' onSubmit={submitform}>
        <p className='invisible'>{JSON.stringify(form)}</p>
        <div className='flex flex-col m-24'>
      <label for="aaa">Enter the number of pregnancies</label>
        <input className='bg-sl' id="aaa" type="text" name="a" onChange={handleForm}></input>
        <label for="bbb">Enter the glucose level</label>
        <input id="bbb" type="text" name="b" onChange={handleForm}></input>
        <label for="ccc">Enter the blood pressure:</label>
        <input id="ccc" type="text" name="c" onChange={handleForm}></input>
        <label for="ddd">Enter the skin thickness:</label>
        <input id="ddd" type="text" name="d" onChange={handleForm}></input>
        <label for="eee">Enter the insulin level:</label>
        <input id="eee" type="text" name="e" onChange={handleForm}></input>
        <label for="fff">Enter the BMI:</label>
        <input id="fff" type="text" name="f" onChange={handleForm}></input>
        <label for="ggg">Enter the diabetes pedigree function</label>
        <input id="ggg" type="text" name="g" onChange={handleForm}></input>
        <label for="hhh">Enter the age</label>
        <input id="hhh" type="text" name="h" onChange={handleForm}></input>

        <button type="submit" >Submit</button>
        </div>
        </form>
    </>
  )
}