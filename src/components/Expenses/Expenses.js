import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }; 

  const filteredExpense = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpense.map((expenses) => 
           <ExpenseItem
           key={expenses.id}
           title={expenses.title}
           amount={expenses.amount}
           date={expenses.date}
         />
      )}
    </Card>
  );
}

export default Expenses;