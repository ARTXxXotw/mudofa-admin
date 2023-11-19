import React, { useEffect, useState } from 'react'
import './Admin.css'
import url from '../Host'
import axios from 'axios'

export default function Product() {
  const [data,setData]=useState([]);
  const [dataiD,setDataiD]=useState([]);
  const [data1iD,setData1iD]=useState([]);
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
    data.append(`news_id`,1)
  
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
  function postmetod(){
    var data = new FormData;
    data.append(`image`, document.querySelector("#post1").value)
    data.append(`desc`, document.querySelector("#post2").value)
    data.append(`news_id`, document.querySelector("#post3").value)
  
       axios.post(`https://new-uzbek.onrender.com/api/v1/new_action/`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
  }
  function deltemetodId(id){
    setData1iD(id)
    document.querySelector(".bu-filyala-assdde").style=`display:block`
  }
  function detelmetod(){
    axios.delete(`https://new-uzbek.onrender.com/api/v1/new_action/${data1iD}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
      alert("Вы удалили ")
      window.location.reload()
    })
  }
  return (
    <div>
      <div className="all-btn">
        <button onClick={()=>document.querySelector(".bu-filyal-omagadasdessd1").style=`display:block`}>dabavit</button>
      </div>
      
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
        <td><img className='table-img' src={item.image} alt="" /></td>
        <td>{item.desc}</td>
        <td>{item.time_create.slice(0,10)}</td>
        <td><button onClick={()=>deltemetodId(item.id)}>delete</button></td>
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

<div className="bu-filyal-omagadasdessd1" style={{display:"none"}}>

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessd1").style=`display:none`}>
  X 
</div>
</div>
        <span>image</span><br />
        <input type="text"  id='post1' /><br />
        <span>desc</span><br />
        <input type="text" id='post2' /><br />
        <span>news_id</span><br />
        <input type="number" id='post3'/><br />
        <button onClick={()=>postmetod()} >dabavit</button>
    </div>
</div>
</div>

<div className="bu-filyala-assdde">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот</p>
      <div className="btn-modal">
      <button onClick={()=>detelmetod()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-assdde").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>


    </div>
  )
}
