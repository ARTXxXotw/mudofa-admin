import React, { useEffect, useState } from 'react'
import './Admin.css'
import url from '../Host'
import axios from 'axios'

export default function Product() {
  const [data,setData]=useState([]);
  const [dataiD,setDataiD]=useState([]);
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/new_action/`).then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])
  function editmetod(){
    var data = new FormData;
    data.append(`image`, document.querySelector("#bir").value)
    data.append(`desc`, document.querySelector("#ikki").value)
    data.append(`time_create`,"")
    data.append(`time_update`, "")
  
       axios.put(`https://new-uzbek.onrender.com/api/v1/new_action/${dataiD}`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
  }
  function editmalumot(id){
    setDataiD(id)
    document.querySelector(".bu-filyal-omagadasdessd").style=`display:block`
  }
  return (
    <div>
      
      <table id="customers">
  <tr>
    <th>id</th>
    <th>image</th>
    <th>desc</th>
    <th>time_create</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
    
    {data.map((item)=>{
      return(
        <>
        <tr>
        <td>{item.id}</td>
        <td><img src={item.image} alt="" /></td>
        <td>{item.desc}</td>
        <td>{item.time_create}</td>
        <td><button>delete</button></td>
        <td><button onClick={()=>editmalumot(item.id)}>edit</button></td>
       </tr>
        </>
      )
    })}

  
     
</table>

<div className="bu-filyal-omagadasdessd">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessd").style=`display:none`}>
  X 
</div>
</div>
        <span>image</span><br />
        <input type="text"  id='bir' /><br />
        <span>desc</span><br />
        <input type="text" id='ikki' /><br />
        <button onClick={()=>editmetod()} >edit</button>
    </div>
</div>
</div>

    </div>
  )
}
