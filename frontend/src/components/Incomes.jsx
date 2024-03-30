import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../styles/incomes.scss";
import Form from "./Form";
import IncomeItem from "./IncomeItem";

const Incomes = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <div className="incomes inner-layout">
      <h1>Incomes</h1>
      <h2 className="total-income">
        Total Income: <span>${totalIncome()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="incomes-container">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description } = income;
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
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Incomes;
