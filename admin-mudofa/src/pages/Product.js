import React, { useEffect, useState } from 'react'
import './Admin.css'
import url from '../Host'
import axios from 'axios'

export default function Product() {
  const [page,setPage]=useState(1)
  const [data,setData]=useState([]);
  const [date,setDate]=useState([]);
  const [dateID,setDateID]=useState([]);
  const [data1,setData1]=useState([]);
  const [dataiD,setDataiD]=useState([]);
  const [data1iD,setData1iD]=useState([]);
  const [newiD,setNewiD]=useState([]);
  const [new1iD,setNew1iD]=useState([]);
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/new/`).then(res=>{
      setData(res.data)
   
    })
  },[])
  useEffect(()=>{
    axios.get(`https://new-uzbek.onrender.com/api/v1/category/`).then(res=>{
      setData1(res.data)
      console.log(res.data)
    })
  },[])
  // useEffect(()=>{
  //   axios.get(`https://new-uzbek.onrender.com/api/v1/new_action`).then(res=>{
  //     setDate(res.data)
  //   })
  // },[])
  function editmetod(){
    var data = new FormData;
    data.append(`title`, document.querySelector("#ikki").value)
    data.append(`category_id`, 1)
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

    data.append(`title`, document.querySelector("#post2").value)
    // data.append(`category`, document.querySelector("#category").value)
    data.append(`category_id`, 1)
  
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


function newaction(id){
  setDateID(id)
    axios.get(`https://new-uzbek.onrender.com/api/v1/new_action/`).then(res=>{
    const Filter=res.data.filter(item=>item.news_id==id)
    setDate(Filter)
    console.log(Filter,"test");
   setPage(2)
  })
}

function newactionedit(id){
  setNewiD(id)
  document.querySelector(".bu-filyal-omagadasdessdas").style=`display:flex`
}

function editnew(){
   var data = new FormData;
    data.append(`image`, document.querySelector("#new1").value)
    data.append(`desc`, document.querySelector("#new2").value)
    data.append(`news_id`,dateID)


       axios.put(`https://new-uzbek.onrender.com/api/v1/new_action/${newiD}`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function postnew(){
  var data = new FormData;
    data.append(`image`, document.querySelector("#postnew1").value)
    data.append(`desc`, document.querySelector("#postnew2").value)
    data.append(`news_id`,dateID)


       axios.post(`https://new-uzbek.onrender.com/api/v1/new_action/`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
      alert("Успешно")
      window.location.reload()
    }).catch(err=>{
      alert("error")
    })
}

function deletee(id){
  setNew1iD(id)
  document.querySelector(".bu-filyala-assddeasas").style=`display:flex`
}

function detelnewactions(){
  axios.delete(`https://new-uzbek.onrender.com/api/v1/new_action/${new1iD}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
    alert("Вы удалили ")
    window.location.reload()
  })
}

  return (
    <div>
  
      
{page===1?(
  <div>
        <div className="all-btn">
        <button onClick={()=>document.querySelector(".bu-filyal-omagadasdessd1").style=`display:block`}>dabavit</button>
      </div>
          <table id="customers">
  <tr>
    <th>id</th>
    <th>image</th>
    <th>title</th>
    <th>time_create</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
    
    {data.map((item)=>{
      return(
        <>
        <tr>
        <td onClick={()=>newaction(item.id)}>{item.id}</td>
        <td onClick={()=>newaction(item.id)}><img className='table-img' src={item.image} alt="" /></td>
        <td onClick={()=>newaction(item.id)}>{item.title}</td>
        <td onClick={()=>newaction(item.id)}>{item.time_create.slice(0,10)}</td>
        <td><button onClick={()=>deltemetodId(item.id)}>delete</button></td>
        <td><button onClick={()=>editmalumot(item.id)}>edit</button></td>
       </tr>
        </>
      )
    })}

  
     
</table>
  </div>
):(
  <div>
    <div className="all-btn1">
      <button onClick={()=>setPage(1)}>nazad</button>
    </div>
    <div className="all-btn">
      <button onClick={()=>document.querySelector(".bu-filyal-omagadasdessdas1").style=`display:`}> dabavit</button>
    </div>
          <table id="customers">
  <tr>
    <th>id</th>
    <th>image</th>
    <th>title</th>
    <th>category_id</th>
    <th>delete</th>
    <th>edit</th>
  </tr>
  {date.map((item)=>{
    return(
      <>
      <tr>
        <td>{item.id}</td>
        <td><img  className='table-img'  src={item.image} alt="" /></td>
        <td>{item.desc}</td>
        <td>{item.news_id}</td>
        <td><button onClick={()=>deletee(item.id)} >delete</button></td>
        <td><button onClick={()=>newactionedit(item.id)}>edit</button></td>
      </tr>
      </>
    )
  })}
  
     
</table>
  </div>
)}




<div className="bu-filyal-omagadasdessdas" style={{display:"none"}}>

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessdas").style=`display:none`}>
  X 
</div>
</div>
        <span>image</span><br />
        <input type="text"  id='new1' /><br />
        <span>desc</span><br />
        <textarea id="new2" cols="30" rows="10"></textarea>
        <br />
        <button onClick={()=>editnew()} >edit1</button>
    </div>
</div>
</div>

<div className="bu-filyal-omagadasdessdas1" style={{display:"none"}}>

<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessdas1").style=`display:none`}>
  X 
</div>
</div>
        <span>image</span><br />
        <input type="text"  id='postnew1' /><br />
        <span>desc</span><br />
        <input type="text" id='postnew2' />
        <br />
        <button onClick={()=>postnew()} >dabavit</button>
    </div>
</div>
</div>









<div className="bu-filyala-assddeasas" style={{display:"none"}} >
<div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот</p>
      <div className="btn-modal">
      <button onClick={()=>detelnewactions()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-filyala-assddeasas").style=`display:none`}>Нет</button>
      
      </div>
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
        <input type="text" id='ikki' /><br />
        {/* <span>category</span><br /> */}
        {/* <select name="" id="category1"><br />
          {data1.map((item)=>{
            return(
              <>
                <option value={item.id}>{item.title}</option>
              </>
            )
          })}
        </select><br /> */}
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
        {/* <span>image</span><br />
        <input type="text"  id='post1' /><br /> */}
        <span>title</span><br />
        <input type="text" id='post2' /><br />
        {/* <span>category</span><br />
        <select name="" id="category"><br />
          {data1.map((item)=>{
            return(
              <>
                <option value={item.id}>{item.title}</option>
              </>
            )
          })}
        </select><br /> */}
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
