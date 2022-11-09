import { useRef,useContext} from "react"
import { Button, Form, Modal } from "react-bootstrap"
import {setExpenses,BudgetContext,updateBudget,UNCATEGORISED_BUDGET_ID,setUncategorizedBudget} from "../Contexts"

export const AddExpensesModal = ({show,setShow,defaultBudgetId}) =>{
    const {state,dispatch} = useContext(BudgetContext)
    const descriptionRef=useRef(0)
    const amountRef=useRef("")
    const budgetIdRef=useRef("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setExpenses({
            amount:parseFloat(amountRef.current.value,10),
            description:descriptionRef.current.value,
            budgetId:budgetIdRef.current.value
        }))
        if(budgetIdRef.current.value===UNCATEGORISED_BUDGET_ID)
        dispatch(
            setUncategorizedBudget(parseFloat(amountRef.current.value,10))
        )
        else
        dispatch(updateBudget({
            id:budgetIdRef.current.value,
            amount:parseFloat(amountRef.current.value,10)
        }))
        setShow(false)
      }
    return(<Modal show={show} onHide={()=>setShow(false)}>
        <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
            <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label>Description </Form.Label>
                <Form.Control
                type="text"
                ref={descriptionRef}
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Amount </Form.Label>
                <Form.Control
                type="text"
                ref={amountRef}
                min={0}
                step={1}
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Budget </Form.Label>
                <Form.Select 
                ref={budgetIdRef}
                defaultValue={defaultBudgetId}
                >
                <option key={UNCATEGORISED_BUDGET_ID} value={UNCATEGORISED_BUDGET_ID}>Uncategorised</option>
                    {
                        state.budgets.map((bud)=>{
                            return(
                                <option key={bud.id} value={bud.id}>{bud.name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>
            <div  className="d-flex justify-content-end">
        <Button variant="primary" type="submit" size="sm">Add</Button>
        </div>
        </Modal.Body>
        </Form>
    </Modal>)
}