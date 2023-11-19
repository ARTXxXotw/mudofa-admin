import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Zakaz() {
    const [data,setData]=useState([])
    const [dataiD,setDataiD]=useState([])
    const [data1iD,setData1iD]=useState([])
    useEffect(()=>{
        axios.get(`https://salonca.onrender.com/api/zakaz`).then(res=>{
            setData(res.data)

        })
    },[])



    function putmetod(){

        var data = new FormData;
        data.append(`time_end`, document.querySelector("#fil1").value)
        data.append(`time_start`, document.querySelector("#fil2").value)
        data.append(`day_zakaz`, document.querySelector("#fil3").value)
        data.append(`mutahasis_id`, document.querySelector("#fil4").value)
    
        axios.post(`https://salonca.onrender.com/api/zakaz`,data).then(res=>{
          alert("Успешно")
          window.location.reload()
        }).catch(err=>{
          alert("error")
        })

    }
function deleteData(){
    
    axios.delete(`https://salonca.onrender.com/api/zakaz/${dataiD}`).then(res=>{
        alert("Вы удалили ")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
}
function deletemalumot(id){
    setDataiD(id)
    document.querySelector(".bu-filyal-deletee").style=`display:block`
}
function editmalumot(id){
setData1iD(id)
document.querySelector(".bu-filyal-2saw11").style=`display:block`
}

function editmetod(){
    var data = new FormData;
    data.append(`time_end`, document.querySelector("#xa1").value)
    data.append(`time_start`, document.querySelector("#xa2").value)
    data.append(`day_zakaz`, document.querySelector("#xa3").value)
    data.append(`mutahasis_id`, document.querySelector("#xa4").value)

    axios.put(`https://salonca.onrender.com/api/zakaz/${data1iD}`,data).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}


  return (
    <div>
        <div className="all-btn">
            <button onClick={()=>document.querySelector(".bu-filyal-2saw").style=`display:block`}>dabavit</button>
        </div>
          <table id="customers">
  <tr>
    <th>id</th>
    <th>time_end</th>
    <th>time_start</th>
    <th>day_zakaz</th>
    <th>mutahasis_id</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
  {data.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.time_end}</td>
            <td>{item.time_start}</td>
            <td>{item.day_zakaz}</td>
            <td>{item.mutahasis_id}</td>
            <td><button onClick={()=>deletemalumot(item.id)}>delete</button></td>
            <td><button onClick={()=>editmalumot(item.id)}>edit </button></td>
        </tr> 
        
        </>
    )
  })}

</table>


<div className="bu-filyal-2saw">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-2saw").style=`display:none`}>
  X 
</div>
</div>
        <span>time_end</span><br />
        <input type="time" id='fil1' /><br />
        <span>time_start</span><br />
        <input type="time" id='fil2' /><br />
        <span>day_zakaz</span> <br />
        <input type="date" id='fil3' /> <br />
        <span>mutahasis_id</span> <br />
        <input type="number" id='fil4' /> <br />
        <button onClick={()=>putmetod()} >добавить</button>
    </div>
</div>
</div>

<div className="bu-filyal-2saw11">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-2saw11").style=`display:none`}>
  X 
</div>
</div>
        <span>time_end</span><br />
        <input type="time" id='xa1' /><br />
        <span>time_start</span><br />
        <input type="time" id='xa2' /><br />
        <span>day_zakaz</span> <br />
        <input type="date" id='xa3' /> <br />
        <span>mutahasis_id</span> <br />
        <input type="number" id='xa4' /> <br />
        <button onClick={()=>editmetod()} >izmenit</button>
    </div>
</div>
</div>


<div className="bu-filyal-deletee">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить </p>
      <div className="btn-modal">
      <button onClick={()=>deleteData()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyal-deletee").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>


    </div>
  )
}
