import React, { useEffect, useState } from 'react'
import '../pages/Admin.css'
import axios from 'axios'


export default function Zakaz() {
    const [data,setData] = useState([]);
    const [editID,setEditID]=useState([])
    const [dataiD,setDataiD]=useState([])

    useEffect(()=>{
        axios.get(`https://salonca.onrender.com/api/mutahasis/`).then(res=>{
            setData(res.data)
          console.log(res.data)  
        })
    })


    function ozgartir(id){
        setEditID(id)
        document.querySelector(".bu-uch-la").style='display:block'
    }

    function ozgardimi(){
        var data = new FormData;
        data.append(`category`, document.querySelector("#op").value)
        data.append(`tavsif`, document.querySelector("#op2").value)
        data.append(`description`, document.querySelector("#op3").value)
        data.append(`filial_id`, document.querySelector("#op4").value)
        data.append(`price`, document.querySelector("#op5").value)
    
           axios.put(`https://salonca.onrender.com/api/mutahasis/${editID}`,data).then(res=>{
          alert("Успешно")
          window.location.reload()
        }).catch(err=>{
          alert("error")
        })
    }

function omina(){
    document.querySelector(".bu-uch-la").style='display:none'
}
function min(id){
    setDataiD(id)
    document.querySelector(".bu-filyala").style='display:block'
}
function malumotoch(){
    document.querySelector(".bu-filyala").style='display:none'
    axios.delete(`https://salonca.onrender.com/api/mutahasis/${dataiD}`).then(res=>{
    alert("Вы удалили этот товар")
    window.location.reload()
  }).catch(err=>{
    alert("error")
  })
}
function qoshush(){
document.querySelector(".bu-filyal-24").style='display:block'
}
function slm(){
    document.querySelector(".bu-filyal-24").style='display:none'
}
    
function qoshisihss(){
    var data = new FormData;
    data.append(`category`, document.querySelector("#nim").value)
    data.append(`tavsif`, document.querySelector("#nim2").value)
    data.append(`description`, document.querySelector("#nim3").value)
    data.append(`filial_id`, document.querySelector("#nim4").value)
    data.append(`price`, document.querySelector("#nim5").value)
   
    
      axios.post(`https://salonca.onrender.com/api/mutahasis/`,data).then(res=>{
        alert("Успешно")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
}

  return (
    <div>
        <div className="bt">
            <button onClick={()=>qoshush()}>Добавить</button>
        </div>
         <table id="customers">
  <tr>
    <th>id</th>
    <th>category</th>
    <th>tavsif</th>
    <th>description</th>
    <th>filial_id</th>
    <th>price</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
  {data.map((item)=>{
    return(
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.tavsif}</td>
            <td>{item.description}</td>
            <td>{item.filial_id}</td>
            <td>{item.price}</td>
            <td><button onClick={()=>min(item.id)}>delete</button></td>
            <td><button onClick={()=>ozgartir(item.id)}>edit</button></td>
        </tr>
        </>
    )
  })}
</table>

<div className="bu-uch-la">
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx"onClick={()=>omina()} >
          X
        </div>
      </div>
      <span>category</span> <br />
      <input type="text" id='op' /><br />
      <span>tavsif</span><br />
      <input type="text" id='op2' /><br />
      <span>description</span><br />
      <input type="text" id='op3' /><br />
      <span>filial_id</span><br />
      <input type="text" id='op4' /><br />
      <span>price</span><br />
      <input type="text" id='op5' /><br />
      <button onClick={()=>ozgardimi()}>go</button>
    </div>
</div>
</div>

<div className="bu-filyala">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот filyal</p>
      <div className="btn-modal">
      <button onClick={()=>malumotoch()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala").style=`display:none`}>Нет</button>
      
      </div>
    </div>
</div>
</div>


<div className="bu-filyal-24">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx" onClick={()=>slm()} >
  X 
</div>
</div>
<span>category</span> <br />
<input type="number" id='nim' /> <br />
<span>tavsif</span> <br />
<input type="text" id='nim2' /> <br />
<span>description</span> <br />
<input type="text" id='nim3' /> <br />
<span>filial_id</span> <br />
<input type="number" id='nim4' /> <br />
<span>price</span> <br />
<input type="number" id='nim5' /> <br />
<button onClick={()=>qoshisihss()}>qoshish</button>
    </div>
</div>
</div>



    </div>
  )
}
