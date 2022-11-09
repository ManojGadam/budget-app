import React, { useReducer } from "react"
import {BudgetReducer} from "./Reducers/BudgetReducer"
export const BudgetContext = React.createContext()
export const UNCATEGORISED_BUDGET_ID="uncategorisedId"
export const BudgetProvider = ({children})=>{
    const [state,dispatch] = useReducer(BudgetReducer,{budgets:[],expenses:[],uncategorisedBudget:0})
    const context = {state,dispatch}
    return <BudgetContext.Provider value={context}>
        {children}
    </BudgetContext.Provider>
} 