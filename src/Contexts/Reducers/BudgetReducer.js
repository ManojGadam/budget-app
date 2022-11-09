import { UNCATEGORISED_BUDGET_ID } from "../BudgetContext"
import {SET_BUDGETS,SET_EXPENSES,UPDATE_BUDGET_AMOUNT,SET_UNCATEGORIZED_BUDGET,DELETE_EXPENSES_OF_BUDGET} from "./BudgetActions"

export const BudgetReducer = (state,action)=>{
    const {payload,type} =action
    switch(type)
    {
        case SET_BUDGETS:
           return{
            ...state,
            budgets:[...state.budgets,payload]
           }
        case SET_EXPENSES:
            return{
            ...state,
            expenses:[...state.expenses,payload]
            }
        case UPDATE_BUDGET_AMOUNT:
           { 
            let reqBudgetInd = state.budgets.findIndex(x=>x.id === payload.id)
            state.budgets[reqBudgetInd].amount += payload.amount
            return{
                ...state,
            }}
        case SET_UNCATEGORIZED_BUDGET:
            {
                var check = state.budgets.find(x=>x.id === UNCATEGORISED_BUDGET_ID)
                if(!check)state.budgets.push({name:'UnCategorized',amount:payload,id:UNCATEGORISED_BUDGET_ID})
                else check.amount += payload
                return{
                ...state,
            }}
        case DELETE_EXPENSES_OF_BUDGET:
            return{
                ...state,
            }              
        default:
            return   
    }
}