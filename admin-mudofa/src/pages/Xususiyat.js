import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../pages/Admin.css'

export default function Xususiyat() {
    const [data,setData]=useState([]);
    const [data1,setData1]=useState([]);
    const [set,setSet1]=useState([]);
    const [set1,setSet2]=useState([]);
    const [data2,setData2]=useState([]);
    const [xMutaxasis,setxMutaxasis]=useState([])
    useEffect(()=>{
        axios.get("https://salonca.onrender.com/api/xususiyatlar/").then(res=>{
            setData(res.data)
        })
        axios.get(`https://salonca.onrender.com/api/mutahasis/`).then(res=>{
          setData1(res.data)
        })
        axios.get(`https://salonca.onrender.com/api/filyal/`).then(res=>{
          setData2(res.data)
        })
        axios.get(`https://salonca.onrender.com/api/xususiyat_mutahasis/`).then(res=>{
          setxMutaxasis(res.data)
          console.log(res.data,"salom");
        })
    },[])

    function postmalumot(){
      var data = new FormData;
      data.append(`title`, document.querySelector("#post").value)
    
         axios.post(`https://salonca.onrender.com/api/xususiyatlar/`,data).then(res=>{
        alert("Успешно")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
    }
    function mutahasis_id(id){
      setSet1(id)
      document.querySelector(".bu-filyal-omagad-2ss22").style=`display:block`
    }
    function filyal_id(id){
      setSet2(id)
      document.querySelector(".bu-filyal-omagad-2ss23").style=`display:block`
    }

    function izmenit(){
      var data = new FormData;
       data.append(`mutahasis_id`, document.querySelector("#category1").value)
       data.append(`xususiyat_id`, set)
  
      axios.post(`https://salonca.onrender.com/api/xususiyat_mutahasis/`,data).then(res=>{
        alert("Успешно")
       
      }).catch(err=>{
        alert("error")
      })
    }
    function izmenit1(){
      var data = new FormData;
       data.append(`filyal_id`, document.querySelector("#category2").value)
       data.append(`xususiyat_id`, set1)
  
      axios.post(`https://salonca.onrender.com/api/xususiyat_filyal/`,data).then(res=>{
        alert("Успешно")
       
      }).catch(err=>{
        alert("error")
      })

    }

const [selete,setSelete]=useState({})
const [selete1,setSelete1]=useState({})


    function deletexusisiyat(id){
      setSelete(id)
      document.querySelector(".bu-filyalas-xusisiyat").style=`display:block`
    }
    function editxusisiyat(id){
      setSelete1(id)
      document.querySelector(".bu-filyal-omagad-2a2ssa").style=`display:block`
    }


    function seletemalumot(){
      axios.delete(`https://salonca.onrender.com/api/xususiyatlar/${selete}`).then(res=>{
        alert("Вы удалили этот товар")
        window.location.reload()
      })
    }
    function editmalumot(){
      var data = new FormData;
      data.append(`title`, document.querySelector("#malumot").value)
    
         axios.put(`https://salonca.onrender.com/api/xususiyatlar/${selete1}`,data).then(res=>{
        alert("Успешно")
        window.location.reload()
      }).catch(err=>{
        alert("error")
      })
    }

  return (
    <div>


      <div className="all-btn">
        <button onClick={()=>document.querySelector(".bu-filyal-omagad-2ss2").style=`display:block`}>dabavit</button>
      </div>
 <table id="customers">
    <tr>
    <th>id</th>
    <th>title</th>
    <th>mutahasis_id</th>
    <th>filyal_id</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
  {data.map((item)=>{
    return(
      <>
        <tr>
         <td>{item.id}</td>
         <td>{item.title}</td>
         <td><button onClick={()=>mutahasis_id(item.id)}>mutahasis_id</button></td>
         <td><button onClick={()=>filyal_id(item.id)}>filyal_id</button></td>
         <td><button onClick={()=>deletexusisiyat(item.id)}>delete</button></td>
         <td><button onClick={()=>editxusisiyat(item.id)}>edit</button></td>
     </tr>
      </>
    )
  })}


</table>

<div className="bu-filyal-omagad-2ss2">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad-2ss2").style=`display:none`}>
  X 
</div>
</div>
        <span>title</span><br />
        <input type="text" id='post' /><br />
        <br />
        <button onClick={()=>postmalumot()} >dabavit</button>
    </div>
</div>
</div>
<div className="bu-filyal-omagad-2ss22">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad-2ss22").style=`display:none`}>
  X 
</div>
</div>
<select id='category1'><br />
  {data1.map((item)=>{
    return(
      <>
      <option value={item.id}>{item.tavsif}</option>
      </>
    )
  })}
</select><br />
<div className='height'></div>
<button onClick={()=>izmenit()}>izmenit</button>
    </div>
</div>
</div>

<div className="bu-filyal-omagad-2ss23">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad-2ss23").style=`display:none`}>
  X 
</div>
</div>
<select id='category2'><br />
  {data2.map((item)=>{
    return(
      <>
      <option value={item.id}>{item.name}</option>
      </>
    )
  })}
</select><br />
<div className='height'></div>
<button onClick={()=>izmenit1()}>izmenit</button>
    </div>
</div>
</div>
<div className="bu-filyalas-xusisiyat">
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот </p>
      <div className="btn-modal">
      <button onClick={()=>seletemalumot()} >ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyalas-xusisiyat").style=`display:none`}>Нет</button>
      </div>
    </div>
</div>
</div>

<div className="bu-filyal-omagad-2a2ssa">

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagad-2a2ssa").style=`display:none`}>
  X 
</div>
</div>
         <span>title</span><br />
        <input type="text" id='malumot' /><br />
        <button onClick={()=>editmalumot()} >edit</button>
    </div>
</div>
</div>




    </div>
  )
}
