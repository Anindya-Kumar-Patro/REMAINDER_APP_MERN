import React,{useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle,id,tasks, duedate}) => {
    const [task, setTask] = useState(tasks)
    const [date, setDate] = useState(duedate)
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <form className="formstyle">
                    <div className="labelinput">
                        <label className="label">Task Name: </label>
                        <input type="text" placeholder="Enter Task" className="input-style form-label" onChange={(e)=>setTask(e.target.value)} value={task}/>
                    </div>
                    
                    <div className="labelinput">
                        <label className="label">Due Date: </label>
                        <input type="date" placeholder="Due Date" className="input-style duedate form-label" onChange={(e)=>setDate(e.target.value)} value={date}/>
                    </div>
                    {/* <button type="submit" className="btn btn-primary btnsubmit"> Add Task</button> */}
                </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Add Task</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default EditTask
