import React, { useEffect, useState } from 'react'
import './Admin.css'
import url from '../Host'
import axios from 'axios'

export default function Product() {
  const [data,setData]=useState([]);
  const [data1,setData1]=useState([]);
  const [dataiD,setDataiD]=useState([]);
  const [data1iD,setData1iD]=useState([]);
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/new/`).then(res=>{
      setData(res.data)
      console.log(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/category/`).then(res=>{
      setData1(res.data)
      console.log(res.data)
    })
  },[])
  function editmetod(){
    var data = new FormData;
    data.append(`image`, document.querySelector("#bir").value)
    data.append(`title`, document.querySelector("#ikki").value)
    data.append(`category_id`, document.querySelector("#uch").value)
    data.append(`category`, document.querySelector("#category1").value)
    data.append(`look`,1 )


       axios.put(`https://new-uzbek.onrender.com/api/v1/new/${dataiD}`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
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
    data.append(`title`, document.querySelector("#post2").value)
    data.append(`category`, document.querySelector("#category").value)
    data.append(`category_id`, document.querySelector("#post3").value)
  
       axios.post(`https://new-uzbek.onrender.com/api/v1/new/`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
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
    axios.delete(`https://new-uzbek.onrender.com/api/v1/new/${data1iD}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
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
    <th>title</th>
    <th>category_id</th>
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
        <td>{item.title}</td>
        <td>{item.category_id}</td>
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
        <span>title</span><br />
        <input type="text" id='ikki' /><br />
        <span>category_id</span><br />
        <input type="text" id='uch' /><br />
        <span>category</span><br />
        <select name="" id="category1"><br />
          {data1.map((item)=>{
            return(
              <>
                <option value={item.id}>{item.title}</option>
              </>
            )
          })}
        </select><br />
        <br />
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
        <span>title</span><br />
        <input type="text" id='post2' /><br />
        <span>category_id</span><br />
        <input type="text" id='post3' /><br />
        <span>category</span><br />
        <select name="" id="category"><br />
          {data1.map((item)=>{
            return(
              <>
                <option value={item.id}>{item.title}</option>
              </>
            )
          })}
        </select><br />
        <br />
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
