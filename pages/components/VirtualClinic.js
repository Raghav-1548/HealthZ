import React from "react";
import { useState } from "react";

let data="";
export default function VirtualClinic() {
  const [form, setform] = useState({});
  const [result, setResult] = useState();
  function handleForm(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  const submitform = async (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(form))
    const response = await fetch("http://localhost:7000/virtual", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

     data = await response.text();
    //  result = data.map((item,key) => {
    // <div>{item}</div>
    // console.log(key);
    // console.log(data)
    // })
    alert(data);
  };

  // console.log(rslt);
  return (
    <div className="border-2 m-64 py-20">
      <form className="flex-col" onSubmit={submitform}>
        <p className="invisible">{JSON.stringify(form)}</p>
        <div className=" flex flex-col">
          <label className="flex justify-center text-2xl" for="aaa">
            Enter Your age
          </label>
          <input className="mx-64 my-6 py-2 bg-slate-100" id="aaa" type="text" name="a" onChange={handleForm}></input>
          <label className="flex justify-center text-2xl" for="bbb">
            Please describe your current symptoms and pre-medical history in
            detail
          </label>
          <input className="mx-64 my-6 py-2  bg-slate-100" id="bbb" type="text" name="b" onChange={handleForm}></input>
          <button className="bg-slate-200 mx-96 my-6 py-3 " type="submit">Submit</button>
        </div>
      </form>
      {/* <div>
    {data.map((eachData,key) => (
      <>
      <div>{eachData}</div> 
      </>    

    ))}
       </div> */}
    </div>
  );
}
