export const SET_BUDGETS = "SET_BUDGETS"
export const SET_EXPENSES = "SET_EXPENSES"
export const UPDATE_BUDGET_AMOUNT="UPDATE_BUDGET_AMOUNT"
export const SET_UNCATEGORIZED_BUDGET = "SET_UNCATEGORIZED_BUDGET"
export const DELETE_EXPENSES_OF_BUDGET = "DELETE_EXPENSES_OF_BUDGET"
export const setBudgets = (payload)=>({
    type:SET_BUDGETS,
    payload
})

export const setExpenses = (payload) =>({
    type:SET_EXPENSES,
    payload
})

export const updateBudget = (payload) =>({
    type:UPDATE_BUDGET_AMOUNT,
    payload
})

export const setUncategorizedBudget = (payload) =>({
    type:SET_UNCATEGORIZED_BUDGET,
    payload
})

export const deleteExpensesFromBudget = (payload)=>({
    type:DELETE_EXPENSES_OF_BUDGET,
    payload
})
