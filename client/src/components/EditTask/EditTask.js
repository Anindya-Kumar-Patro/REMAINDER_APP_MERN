import React,{useState, useEffect} from 'react'
import {useLocation} from 'react-router'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './EditTask.css'

const EditTask = () => {
    var location = useLocation()
    const [updatetask, setUpdatetask] = useState('')
    const [updatedate, setUpdatedate] = useState('')
    var id = location.pathname.split('/')[2]
    console.log(location,id)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
          const res = await axios.put('/tasks/'+id,{
            task:updatetask, date:updatedate
          })
          
          console.log(res)
        }catch (err){
            console.log(err)
        }
  }
    useEffect(()=>{
        

    },[])
    return (
        <div>
            <div className="head-container text-center">
                <h3>Remainder App</h3>
                <form className="formstyle" onSubmit={handleSubmit} >
                    <div className="labelinput">
                        <label className="label">Task Name: </label>
                        <input type="text" placeholder="Enter Task" className="input-style form-label" onChange={(e)=>setUpdatetask(e.target.value)} value={updatetask}/>
                    </div>
                    
                    <div className="labelinput">
                        <label className="label">Due Date: </label>
                        <input type="date" placeholder="Due Date" className="input-style duedate form-label" onChange={(e)=>setUpdatedate(e.target.value)} value={updatedate}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btnsubmit"> Update Task</button>
                   
                    
                </form>
                <Link to="/" className="btn btn-danger btnback">Get Back to task Page</Link>
            </div>
        </div>
    )
}

export default EditTask
