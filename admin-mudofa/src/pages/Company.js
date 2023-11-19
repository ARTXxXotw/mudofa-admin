import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Company() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://new-uzbek.onrender.com/api/v1/company/`).then(res=>{
            setData(res.data)
        })
    },[])

    function postmetod(){
        var data = new FormData;
        data.append(`image`, document.querySelector("#post1").value)
        data.append(`phone1`, document.querySelector("#post2").value)
        data.append(`phone2`, document.querySelector("#post3").value)
        data.append(`instagram`, document.querySelector("#post4").value)
        data.append(`facebook`, document.querySelector("#post5").value)
        data.append(`telegram`, document.querySelector("#post6").value)
        data.append(`youtobe`, document.querySelector("#post7").value)
        data.append(`app_store`, document.querySelector("#post8").value)
        data.append(`play_market`, document.querySelector("#post9").value)
        data.append(`twitter`, document.querySelector("#post10").value)
        data.append(`email`, document.querySelector("#post11").value)
      
           axios.post(`https://new-uzbek.onrender.com/api/v1/company/`,data,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}}).then(res=>{
          alert("Успешно")
          window.location.reload()
        }).catch(err=>{
          alert("error")
        })
    }

  return (
    <div>
        <div className="all-btn">
            <button onClick={()=>document.querySelector(".bu-filyal-omagadasdessd1").style=`display:flex`}>dabavit</button>
        </div>

              <table id="customers">
  <tr>
    <th>id</th>
    <th>image</th>
    <th>phone1</th>
    <th>phone2</th>
    <th>instagram</th>
    <th>facebook</th>
    <th>telegram</th>
    <th>youtobe</th>
    <th>app_store</th>
    <th>play_market</th>
    <th>twitter</th>
    <th>email</th>
    <th>edit</th>
    <th>delete</th>
  </tr>
    {data.map((item)=>{
        return(
            <>
            <tr>
                <td>{item.id}</td>
                <td>{item.image}</td>
                <td>{item.phone1}</td>
                <td>{item.phone2}</td>
                <td>{item.instagram}</td>
                <td>{item.facebook}</td>
                <td>{item.telegram}</td>
                <td>{item.youtobe}</td>
                <td>{item.app_store}</td>
                <td>{item.play_market}</td>
                <td>{item.twitter}</td>
                <td>{item.email}</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
</tr>
            </>
        )
    })}
     
</table>



<div className="bu-filyal-omagadasdessd1" style={{display:"none"}}>
    <div className="modal-delete" >
    <div className="modal-ichi-inp">
      <div className="x-dv">
<div className="xx"  onClick={()=>document.querySelector(".bu-filyal-omagadasdessd1").style=`display:none`}>
  X 
</div>
</div>
        <span>image</span><br />
        <input type="text"  id='post1' /><br />
        <span>phone1</span><br />
        <input type="text" id='post2' /><br />
        <span>phone2</span><br />
        <input type="text" id='post3'/><br />
        <span>instagram</span><br />
        <input type="text" id='post4' /><br />
        <span>facebook</span><br />
        <input type="text" id='post5'  /><br />
        <span>telegram</span><br />
        <input type="text" id='post6' /><br />
        <span>youtobe</span><br />
        <input type="text"  id='post7' /><br />
        <span>app_store</span><br />
        <input type="text"   id='post8' /><br />
        <span>play_market</span><br />
        <input type="text"  id='post9' /><br />
        <span>twitter</span><br />
        <input type="text"  id='post10' /><br />
        <span>email</span><br />
        <input type="email"  id='post11'  /><br />
        <button onClick={()=>postmetod()} >dabavit</button>
    </div>
</div>

</div>






    </div>
  )
}
