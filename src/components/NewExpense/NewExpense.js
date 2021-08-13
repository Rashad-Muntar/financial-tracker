import '../ExpenseItem.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expenses) => {
        const data = {
            ...expenses,
            id: Math.random()
        }
        props.onAddExpense(data)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense