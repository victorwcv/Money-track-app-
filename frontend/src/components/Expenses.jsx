import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../styles/incomes.scss";
import Form from "./Form";
import IncomeItem from "./IncomeItem";
import ExpenseForm from "./ExpenseForm";

const Expenses = () => {
  const { expenses, getExpenses, deleteExpense, totalExpense } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="incomes inner-layout">
      <h1>Expenses</h1>
      <h2 className="total-income">
        Total Expense: <span>${totalExpense()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <ExpenseForm />
        </div>
        <div className="incomes-container">
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description, type } = expense;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                amount={amount}
                date={date}
                category={category}
                description={description}
                indicatorColor="var(--color-green)"
                deleteItem={deleteExpense}
                type={type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
