import Link from 'next/link';
import React from 'react'
import { useState } from 'react';



let d;
export default function HeartDiseasePredictor() {
  const [form, setform] = useState({});
  function handleForm(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  
  const submitform = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(form))
    const response = await fetch('http://localhost:7000/heartdis', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.text();
    alert(data);
    d=data;
  }
  
  return (
    <>
    <div >
      <form onSubmit={submitform}>
        <p className='invisible'>{JSON.stringify(form)}</p>
        <div className='m-48 flex flex-col'>
        <label for="aaa">Enter the number of pregnancies: </label>
        <input   id="aaa" type="text" name="a" onChange={handleForm}></input>
        <label for="bbb">Enter the glucose level: </label>
        <input id="bbb" type="text" name="b" onChange={handleForm}></input>
        <label for="ccc">Enter the blood pressure</label>
        <input id="ccc" type="text" name="c" onChange={handleForm}></input>
        <label for="ddd">Enter the skin thickness: </label>
        <input id="ddd" type="text" name="d" onChange={handleForm}></input>
        <label for="eee">Enter the insulin level: </label>
        <input id="eee" type="text" name="e" onChange={handleForm}></input>
        <label for="fff">Enter the BMI: </label>
        <input id="fff" type="text" name="f" onChange={handleForm}></input>
        <label for="ggg">Enter the diabetes pedigree function: </label>
        <input id="ggg" type="text" name="g" onChange={handleForm}></input>
        <label for="hhh">Enter </label>
        <input id="hhh" type="text" name="h" onChange={handleForm}></input>
        <label for="iii">Enter </label>
        <input id="iii" type="text" name="i" onChange={handleForm}></input>
        <label for="jjj">Enter </label>
        <input id="jjj" type="text" name="j" onChange={handleForm}></input>
        <label for="kkk">Enter </label>
        <input id="kkk" type="text" name="k" onChange={handleForm}></input>
        <label for="lll">Enter </label>
        <input id="lll" type="text" name="l" onChange={handleForm}></input>
        <label for="mmm">Enter </label>
        <input id="mmm" type="text" name="m" onChange={handleForm}></input>


        <button type="submit" >Sign in</button>
    </div>

      </form>
      </div>
    </>
    )
}