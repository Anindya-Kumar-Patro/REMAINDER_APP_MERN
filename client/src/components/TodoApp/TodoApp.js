import React,{useState,useEffect} from 'react'
import './TodoApp.css'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import axios from 'axios'
import {Link} from 'react-router-dom'
import qs from 'qs';
// import EditTask from '../../modals/EditTask'

const TodoApp = () => {
    const [tasklist, setTasklist] = useState([])
    const [task, setTask] = useState("")
    const [date, setDate] = useState("")
    const [number, setNumber]= useState("")
    const [arr, setArr] = useState([])
    const [array, setArray] = useState([])
    const [edit, setEdit] = useState("")
    const [deleting, setDeleting] = useState("")
    const [taskdue, setTaskdue] = useState(false)
    const [modal, setModal] = useState(false)
    const message = "Some of your tasks are due, its not good to procrastinate"

    var today = new Date()
    var booleanval = false
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
          const res = await axios.post('/tasks',{
            task,date
          })
          
          console.log(res)
        }catch (err){
            console.log(err)
        }
  }

//   const editfun = (id) =>{
//       console.log(id)
//   }

//   const toggle = () => setModal(!modal)
  


    useEffect(() => {
        const fetchTasks = async () => {
            const res = await axios.get('/tasks')
            setArr(res.data)
        }   
        fetchTasks()
        console.log(arr)

        const postTask = async () => {
            const res = await axios.post('/tasks',{
                task, date
            })
            window.location.reload()
        }
        postTask()

        array.includes('ddp')?setTaskdue(true):setTaskdue(false)
        setArray([])
        console.log(array)
        console.log(taskdue)


        if(taskdue===true){
            const kaleyra = axios.post(`https://api.kaleyra.io/v1/HXIN1709604395IN/voice/outbound?to=+91${number}&api-key=A7d9a93081fcd9840089b138b995e51c4&bridge=+918046983237&target=[{"message":{"text":"Call me Now"}}]`)
            .then((kaleyra)=>{
                console.log(kaleyra, "api called")
                setTaskdue(false);
            })

            .catch(err=>{
                console.log("API called")
            })
        }

    },[])
    const deleteTask = async (id) => {
        await axios.delete('/tasks/' + id)
        
        .then(()=>{
            console.log('deleted')
            window.location.replace('/')
        })
    }

    if(taskdue===true || taskdue===false){
        const kaleyra = axios.post(`https://api.kaleyra.io/v1/HXIN1709604395IN/voice/outbound?to=+91${number}&api-key=A7d9a93081fcd9840089b138b995e51c4&bridge=+918046983237&target=[{"message":{"text":"Some of your tasks are due, its not good to procrastinate"}}]`,{
            headers: {
              
              'content-type': 'application/x-www-form-urlencoded'
            }
          })
        .then(kaleyra=>console.log(kaleyra, "api called"))
        .catch(err=>{
            console.log(err)
        })
    }
  
    return (
        <div>
            <div className="head-container text-center">
                <h3>Remainder App</h3>
                
                <form className="formstyle" onSubmit={handleSubmit} >
                    <div className="labelinput">
                        <label className="label">Phone No. : </label>
                        <input type="number" placeholder="Enter Number" className="input-style form-label" onChange={(e)=>setNumber(e.target.value)}/>
                    </div>
                    <div className="labelinput">
                        <label className="label">Task Name: </label>
                        <input type="text" placeholder="Enter Task" className="input-style form-label" onChange={(e)=>setTask(e.target.value)}/>
                    </div>
                    
                    <div className="labelinput">
                        <label className="label">Due Date: </label>
                        <input type="date" placeholder="Due Date" className="input-style duedate form-label" onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btnsubmit"> Add Task</button>
                </form>
                
            </div>
            <div className="body-container">
                {
                    arr.map((a)=>{
                        return(
                            <div className="single-body" key={a._id}>
                            <h3 className="class-head">{a.task}</h3>
                            <h5 className="class-date">{a.date}</h5>
                            
                                
                             
                            {
                                    today>new Date(a.date)?array.push("ddp"):array.push("ndp")                                  
                                    
                            }
                            
                            <div className="icons">
                                <Link to={`/tasks/${a._id}`}><BiEdit className="icon-style" onClick={()=>setEdit(a._id)}/></Link>
                                <MdDelete className="icon-style" onClick={()=>deleteTask(a._id)}/>
                            </div>
                            </div>
                        )
                        
                    })
                }
                {/* <EditTask modal={modal} toggle={toggle} id={edit} tasks = {task} date={date} /> */}
                
            </div>
        </div>
    )
}

export default TodoApp
