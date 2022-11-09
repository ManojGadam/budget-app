import { Button, Card, ProgressBar, Stack } from "react-bootstrap"

export const CardComponent = ({currentBudget,handleExpenseClick,showButtons=true,setViewBudgetId})=>{
    const {amount,max,name,id}=currentBudget
    console.log("in")
    if(max)console.log("in")
    var bckgrnd = max && amount>max ? "bg-danger bg-opacity-10" :"bg-light" ;
    return(
    <Card className={bckgrnd}>
       <Card.Body>
            <Card.Title className="d-flex fw-normal mb-3" style={{justifyContent:"space-between",alignItems:"baseline"}}>
                    <div>{name}</div>
                    <div className="d-flex align-items-baseline">
                    ${amount}
                    {max &&    
                    <span className="fs-6 text-muted ms-1">/ ${max}</span>}
                    </div>
            </Card.Title>
            {max && <ProgressBar 
            className="rounded-pill" 
            variant={getVariant(amount,max)}
            min={0}
            max={max}
            now={amount}
            />}
            {showButtons && <Stack direction="horizontal" gap="2" className="mt-4">
                <Button variant="outline-primary" className="ms-auto" size="sm" onClick={()=>handleExpenseClick(id)}>Add Expense</Button>
                <Button variant="outline-secondary" size="sm" onClick={()=>setViewBudgetId(id)}>View Expenses</Button>
            </Stack>}
       </Card.Body>
    </Card>
    )
}

const getVariant = (amount,max)=>{
    const ratio = amount/max
    if(ratio < 0.5)return "primary"
    else if(ratio < 0.75)return "warning"
    return "danger"
}