import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const[input,setInput]=new useState(
        
        {
            "subject":" ",
            "duration":" ",
            "modules":" ",
            "revision":" ",
            "status":" "
        }
        
    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/study/add",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfully added!")
                    setInput(
                        {
                            "subject":" ",
                            "duration":" ",
                            "modules":" ",
                            "revision":" ",
                            "status":" "
                        }
                       

                    )
                }
                else{
                    alert("something went wrong!try again")
                }

            }

        )
    }
  return (
    <div>
        <NavBar/>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">subject</label>
                            <input type="text" className="form-control" name="subject" value={input.subject} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">duration</label>
                            <input type="text" className="form-control" name="duration" value={input.duration} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">modules</label>
                        <input type="text" className="form-control" name="modules" value={input.modules} onChange={InputHandler} />
                            
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">revision</label>
                            <input type="text" className="form-control" name="revision" value={input.revision} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">status</label>
                            <input type="text" className="form-control" name="status" value={input.status} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Add