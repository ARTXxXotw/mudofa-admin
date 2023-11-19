import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Mutahasis_time() {
    const [data,setData]=useState([]);
    const [dataiD,setDataiD]=useState([]);
    const [editiD,setEditiD]=useState([]);
    useEffect(()=>{
        axios.get(`https://salonca.onrender.com/api/mutahasis_time/`).then(res=>{
            setData(res.data)
            console.log(res.data)
        })
    })
    function tezoch(id){
        setDataiD(id)
        document.querySelector(".bu-filyalas").style=`display:block`
    }
    function ovda(){
        axios.delete(`https://salonca.onrender.com/api/mutahasis_time/${dataiD}`).then(res=>{
            alert("Вы удалили этот товар")
            window.location.reload()
          }).catch(err=>{
            alert("error")
          })
    }

function edit(id){
    setEditiD(id)
    document.querySelector(".bu-filyal-4").style=`display:block`
}
function ozgard(){

    var data = new FormData;
    data.append(`time`, document.querySelector("#fil").value)
    data.append(`mutahasis_id`, document.querySelector("#fil1").value)

       axios.put(`https://salonca.onrender.com/api/mutahasis_time/${editiD}`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function dabavit(){

    var data = new FormData;
    data.append(`time`, document.querySelector("#filp").value)
    data.append(`mutahasis_id`, document.querySelector("#filp1").value)
       axios.post(`https://salonca.onrender.com/api/mutahasis_time/`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

  return (
    <div>
<div className="all-butnnon">
    <button onClick={()=>document.querySelector(".bu-filyal-6").style=`display:block`}>dabavit</button>
</div>
<table id="customers">
  <tr>
    <th>id</th>
    <th>time</th>
    <th>mutahasis_id</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
{data.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.time}</td>
            <td>{item.mutahasis_id}</td>
            <td><button onClick={()=>tezoch(item.id)}>delete</button></td>
            <td><button onClick={()=>edit(item.id)}>edit</button></td>
        </tr> 
        </>
    )
})}
     
</table>

<div className="bu-filyalas">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот </p>
      <div className="btn-modal">
      <button onClick={()=>ovda()} >ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyalas").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>



<div className="bu-filyal-4">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-4").style=`display:none`}>
  X 
</div>
</div>
        <span>time</span><br />
        <input type="number" id='fil' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='fil1' /><br />
        <button onClick={()=>ozgard()} >изменить</button>
    </div>
</div>
</div>


<div className="bu-filyal-6">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-6").style=`display:none`}>
  X 
</div>
</div>
        <span>time</span><br />
        <input type="number" id='filp' /><br />
        <span>mutahasis_id</span><br />
        <input type="text" id='filp1' /><br />
        <button onClick={()=>dabavit()} >dabavit</button>
    </div>
</div>
</div>



    </div>
  )
}
