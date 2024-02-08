import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const[data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/study/view").then(
            (response)=>{
                setData(response.data)

            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavBar/>

      
        
        <table className="table table-info table-striped-columns table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">subject</th>
      <th scope="col">duration</th>
      <th scope="col">modules</th>
      <th scope="col">revision</th>
      <th scope="col">status</th>
     
      
     
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
                <th scope="row">{value.subject}</th>
                <td>{value.duration}</td>
                <td>{value.modules}</td>
                <td>{value.revision}</td>
                <td>{value.status}</td>
              
                
              </tr>
            }
        )
    }
   
  </tbody>
</table>

    </div>
  )
}

export default View