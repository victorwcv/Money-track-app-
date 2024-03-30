import { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../styles/dashboard.scss";
import icons from "../utils/icons";
import Chart from "./Chart";
import History from "./History";

const Dashboard = () => {
  const { balance, totalExpense, totalIncome, transactionHistory, incomes, expenses } = useGlobalContext();


  return (
    <div className="dashboard inner-layout">
      <h1>All Transctions</h1>
      <div className="stats-con">
        <div className="chart-con">
          <Chart />
          <div className="amount-con">
            <div className="income">
              <h2>Total Income</h2>
              <p>{icons.dollar}
                  {totalIncome()}
              </p>
            </div>
            <div className="expense">
              <h2>Total Expenses</h2>
              <p>
                {icons.dollar}
                {totalExpense()}
              </p>
            </div>
            <div className="balance">
              <h2>Total Balance</h2>
              <p>
                {icons.dollar} 
                {balance()}
              </p>
            </div>
          </div>

        </div>
        <div className="history-con">
          <History />
          <h2 className="salary-title">Min <span>Incomes</span> Max</h2>
          <div className="salary-item">
            <p>
              {Math.min(0, ...incomes.map(item=> item.amount)) }
            </p>
            <p>
              {Math.max(0,...incomes.map(item=> item.amount)) }
            </p>
          </div>
          <h2 className="salary-title">Min <span>Expenses</span> Max</h2>
          <div className="salary-item">
            <p>
              {Math.min(0,...expenses.map(item=> item.amount)) }
            </p>
            <p>
              {Math.max(0,...expenses.map(item=> item.amount)) }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
