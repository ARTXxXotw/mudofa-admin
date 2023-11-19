import axios from 'axios'
import React, { useEffect, useState } from 'react'
import url from '../Host'

export default function User() {
  const [user,setUser]=useState([])
  const [userId,setUserId]=useState([])

  useEffect(()=>{
    axios.get(`${url}/api/users`).then(res=>{
        setUser(res.data)
    }).catch(err=>{console.log(err)})
  },[])


  function userDeleteOpen(id){
  setUserId(id)
  document.querySelector(".bu-bir").style="display:block;"
  }

  function userDelete(){
    axios.delete(`${url}/api/users/${userId}`).then(res=>{
        alert("delete")
        window.location.reload()
    }).catch(err=>{
        alert("O'chirilmadi")
    })
  }

  function userPutOpen(item){
    document.querySelector("#phone_user").value=item.phone
    document.querySelector("#superadmin_username").value=item.username
    document.querySelector("#superadmin_user").value=item.superadmin
    document.querySelector("#email_user").value=item.email
    setUserId(item.id)
    document.querySelector(".bu-iki-2").style="display:block"
  }

  function userPut(){
    var formdata=new FormData()
    formdata.append("phone",document.querySelector("#phone_user").value)
    formdata.append("username",document.querySelector("#superadmin_username").value)
    formdata.append("superadmin",document.querySelector("#superadmin_user").value)
    formdata.append("email",document.querySelector("#email_user").value)

    axios.put(`${url}/api/users/${userId}`,formdata).then(res=>{
        alert("успешно")
        window.location.reload()
    }).catch(err=>{
        alert("ishlamdi")
    })
  }



  return (
    <div>
    <table id="customers">
    <tr>
      <th>id</th>
      <th>phone</th>
      <th>username</th>
      <th>superadmin</th>
      <th>email</th>
      <th>delete</th>
      <th >edit</th>
  </tr>
  {user.map((item)=>{
    return(
      <>
    <tr>
        <td>{item.id}</td>
        <td>{item.phone}</td>
        <td>{item.username}</td>
        <td>{item.superadmin}</td>
        <td>{item.email}</td>
        <td><button onClick={()=>userDeleteOpen(item.id)}>delete</button></td>
        <td><button onClick={()=>userPutOpen(item)}>edit</button></td>
  </tr>
      </>
    )
  })}
  </table>

  <div className="bu-bir">
  <div className="modal-delete">
    <div className="modal-ichi">
      <p>Вы действительно хотите удалить этот товар</p>
      <div className="btn-modal">
      <button onClick={()=>userDelete()}>ДА</button>
      <button onClick={()=>document.querySelector(".bu-bir").style=`display:none`}>Нет</button>
      </div>
    </div>
  </div>
  </div>
  <div className="bu-iki-2">
<div className="modal-delete">
    <div className="modal-ichi-inp">
      <div className="x-dv">
        <div className="xx" onClick={()=>document.querySelector(".bu-iki-2").style=`display:none`}>
          X
        </div>
      </div>
      <span>phone</span> <br />
      <input type="text" id='phone_user' /> <br />
      <span>username</span> <br />
      <input type="text" id='superadmin_username' /><br />
      <span>superadmin</span><br />
      <input type="text" id='superadmin_user' /><br />
      <span>email</span><br />
      <input type="text" id='email_user' /><br />
      <button onClick={()=>userPut()}>edit</button>
    </div>
</div>
  </div>
    </div>
  )
}
