import './App.css';
import {Button, Container, Stack} from "react-bootstrap"
import {CardComponent,AddBudgetModal,AddExpensesModal,UncategorisedBudgetCard,TotalBudgetCard,ViewExpenses} from "./Components"
import { useContext, useState } from 'react';
import {BudgetContext} from "./Contexts"
function App() {
  let {state,dispatch} = useContext(BudgetContext)
  const [show,setShow]=useState(false)
  const [showExpenses,setShowExpenses]=useState(false)
  const [currentBudget,setCurrentBudget]=useState("uncategorisedId")
  const [viewBudgetId,setViewBudgetId]=useState(0)
  let budgets= state.budgets
  const handleExpenseClick=(id)=>{
    setCurrentBudget(id)
    setShowExpenses(true)
  }
 return( 
  <>
 <Container className="my-4">
    <Stack direction='horizontal' gap="2" className='mb-4' style={{alignItems:"baseline"}}>
      <h1 className='me-auto'>Budgets</h1>
      <Button variant="primary" onClick={()=>setShow(true)}>Add Budget</Button>
      <Button variant="outline-primary" onClick={()=>setShowExpenses(true)}>Add Expense</Button>
    </Stack>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"1rem"}}>
    {
     budgets.map((x,i)=>
    {
      return(
      <CardComponent 
      currentBudget={x}
      key={i}
      handleExpenseClick={(id)=>handleExpenseClick(id)}
      setViewBudgetId={setViewBudgetId}
      />
      )
    })
    }
    <UncategorisedBudgetCard
    amount={state.uncategorisedBudget}
    handleExpenseClick={(id)=>handleExpenseClick(id)}
    setViewBudgetId={setViewBudgetId}
     />
     <TotalBudgetCard
     state={state} 
     />
    </div>
  </Container>
  <AddBudgetModal
  show={show}
  setShow={setShow}
  dispatch={dispatch}
  />
  <AddExpensesModal
  show={showExpenses}
  setShow={setShowExpenses}
  defaultBudgetId={currentBudget}
   />
  <ViewExpenses
  setBudgetId={setViewBudgetId} 
  budgetId={viewBudgetId}
  /> 
  </>
 )
}

export default App;
