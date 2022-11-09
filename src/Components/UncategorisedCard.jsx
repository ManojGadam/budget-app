import { CardComponent } from "./CardComponent"
import {UNCATEGORISED_BUDGET_ID} from "../Contexts"
export const UncategorisedBudgetCard = (props)=>{
    if(props.amount===0)return <></>
    return <CardComponent {...props} currentBudget={{name:"UnCategorized",amount:props.amount,id:UNCATEGORISED_BUDGET_ID}} />
}