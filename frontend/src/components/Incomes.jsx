import { useGlobalContext } from "../context/globalContext";
import "../styles/incomes.scss";
import Form from "./Form";

const Incomes = () => {
  const { addIncome } = useGlobalContext();

  return (
    <div className="incomes inner-layout">
      <h1>Incomes</h1>
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="incomes"></div>
      </div>
    </div>
  );
};

export default Incomes;
