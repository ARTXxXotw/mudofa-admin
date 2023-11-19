import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../Host'

export default function Metro() {
    const [data,setData]=useState([])
    const [dataiD,setDataiD]=useState([])
    const [data1iD,setData1iD]=useState([])
    useEffect(()=>{
        axios.get(`${url}/api/metro/`).then(res=>{
            setData(res.data)
        })
    },[])
    function deletemalumot(){
        axios.delete(`${url}/api/metro/${dataiD}`).then(res=>{
          alert("Вы удалили этот metro")
          window.location.reload()
        })
      }
      function deletemodal(id){
        setDataiD(id)
        document.querySelector(".bu-filyala-assdde").style=`display:block`
      }
      function postmetod(){
            var data = new FormData;
            data.append(`title`, document.querySelector("#nnnaa").value)
          
               axios.post(`${url}/api/metro/`,data).then(res=>{
              alert("Успешно")
              window.location.reload()
            }).catch(err=>{
              alert("error")
            })
      }
      function qoshish(){
        document.querySelector(".bu-filyal-omagadasde").style=`display:block`
      }
      function editmalumot(id){
        setData1iD(id)
        document.querySelector('.bu-filyal-omagadasdessd').style=`display:block`
      }
      function editmetod(){
        var data = new FormData;
        data.append(`title`, document.querySelector("#nnnaa1").value)
      
           axios.put(`${url}/api/metro/${data1iD}`,data).then(res=>{
          alert("Успешно")
          window.location.reload()
        }).catch(err=>{
          alert("error")
        })
      }

  return (
    <div>
        <div className="all-btn">
            <button onClick={()=>qoshish()}>dabavit</button>
        </div>

              <table id="customers">
  <tr>
    <th>id</th>
    <th>title</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
    {data.map((item)=>{
        return(
            <>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td><button onClick={()=>deletemodal(item.id)}>delete</button></td>
            <td><button onClick={()=>editmalumot(item.id)}>edit</button></td>
        </tr>
            </>
        )
    })}
</table>

<div className="bu-filyala-assdde">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот</p>
      <div className="btn-modal">
      <button onClick={()=>deletemalumot()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-assdde").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>


<div className="bu-filyal-omagadasde">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasde").style=`display:none`}>
  X 
</div>
</div>
        <span>title</span><br />
        <input type="text" id='nnnaa' /><br />
        <button onClick={()=>postmetod()} >dabavit</button>
    </div>
</div>
</div>


<div className="bu-filyal-omagadasdessd">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessd").style=`display:none`}>
  X 
</div>
</div>
        <span>title</span><br />
        <input type="text" id='nnnaa1' /><br />
        <button onClick={()=>editmetod()} >edit</button>
    </div>
</div>
</div>

    </div>
  )
}
