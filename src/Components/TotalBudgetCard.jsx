import { CardComponent } from "./CardComponent"

export const TotalBudgetCard = ({state})=>{
    const max = state.budgets.reduce((total,current)=>current.max?total+current.max:total,0)
    const amount = state.expenses.reduce((total,current)=>total+current.amount,0)
    if(!amount && !max)return <></>
   return <CardComponent  showButtons={false}  currentBudget={{name:"Total",amount:amount,max:max?max:''}}  />
}