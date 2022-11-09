import { useRef } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import {setBudgets} from "../Contexts/Reducers/BudgetActions"
import { v4 as uuidv4 } from 'uuid'
export const AddBudgetModal = ({show,setShow,dispatch}) =>{
    const maxRef=useRef(0)
    const nameRef=useRef("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(new Date().getTime())
        dispatch(setBudgets({
            name:nameRef.current.value,
            max:parseFloat(maxRef.current.value,10),
            amount:0,
            id:new Date().getTime().toString()
        }))
        setShow(false)
      }
    return(<Modal show={show} onHide={()=>setShow(false)}>
        <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
            <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label>Name </Form.Label>
                <Form.Control
                type="text"
                ref={nameRef}
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Maximum Spending </Form.Label>
                <Form.Control
                type="text"
                ref={maxRef}
                min={0}
                step={1}
                 />
            </Form.Group>
            <div  className="d-flex justify-content-end">
        <Button variant="primary" type="submit" size="sm">Add</Button>
        </div>
        </Modal.Body>
        </Form>
    </Modal>)
}