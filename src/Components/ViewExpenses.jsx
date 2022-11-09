import { Button, Modal, Stack } from "react-bootstrap"
import {useContext} from "react"
import { BudgetContext,deleteExpensesFromBudget, setUncategorizedBudget, UNCATEGORISED_BUDGET_ID } from "../Contexts"
export const ViewExpenses = ({budgetId,setBudgetId})=>{
    const {state,dispatch} = useContext(BudgetContext)
    const currentBudget = state.budgets.find(x=>x.id===budgetId)
    const currentExpenses = state.expenses.filter(x=>x.budgetId === budgetId)
    const deleteExpense = (description,Id) =>{
        const i =state.expenses.splice(state.expenses.findIndex(x=>x.description === description),1)
        var bud =  state.budgets.find(x=>x.id === Id)
        if(!bud)return
        bud.amount = bud.amount-i[0].amount 
        setBudgetId(0)
    }
    const DeleteBudget =() =>{
        let unCategorizedAmount =0 
        state.expenses =state.expenses.map(x=>{
            if(x.budgetId !== budgetId)return x
            unCategorizedAmount += x.amount 
            return {...x,budgetId:UNCATEGORISED_BUDGET_ID}
        })
        dispatch(setUncategorizedBudget(unCategorizedAmount))
        state.budgets = state.budgets.filter(x=>x.id !== budgetId)
        setBudgetId(0)
        console.log(state)
    }
    if(!(currentBudget && budgetId))return<></>
    return(
        <Modal show={currentBudget && budgetId} onHide={()=>setBudgetId(0)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal">
                        <div>Expenses - {currentBudget.name}</div>
                        <Button variant="outline-danger" className="ms-3" onClick={()=>DeleteBudget()}>Delete</Button>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack>
                    {
                        currentExpenses.map((expense,i)=>{
                            return(
                                <>
                                <Stack direction="horizontal" key={i} className="justify-content-between">
                                    <div className="me-auto fs-4">{expense.description}</div>
                                    <div className="fs-5">
                                        ${expense.amount}
                                        <Button variant="outline-danger" className="ms-2" size="sm" onClick={()=>deleteExpense(expense.description,expense.budgetId)}>X</Button>
                                    </div>
                                </Stack>
                               
                                </>
                            )
                        })
                    }
                </Stack>
            </Modal.Body>
        </Modal>
    )
}