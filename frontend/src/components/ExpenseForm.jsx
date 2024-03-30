import { useState } from "react";
import "../styles/form.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../context/globalContext";
import Button from "./Button";
import icons from "../utils/icons";

function ExpenseForm() {
  const { addExpense} = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          name={"title"}
          // id=""
          value={title}
          placeholder="Expense Title"
          onChange={handleInput("title")}
        />
      </div>
      <div className="input-control">
        <input
          type="text"
          name={"amount"}
          // id=""
          value={amount}
          placeholder="Expense Amount"
          onChange={handleInput("amount")}
        />
      </div>
      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter a Date"
          selected={date}
          dateFormat="dd/MM/yy"
          onChange={(date) => setInputState({ ...inputState, date: date })}
        />
      </div>
      <div className="selects input-control">
        <select
          name="category"
          id="category"
          value={category}
          onChange={handleInput("category")}
        >
          <option value="">Select Option</option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">subscriptions</option>
          <option value="takeaways">Takeaways</option>
          <option value="clothing">Clothing</option>
          <option value="traveling">Traveling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          // id=""
          cols="30"
          rows="3"
          value={description}
          placeholder="Add a description"
          onChange={handleInput("description")}
        ></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name={"Add Expense"}
          icon={icons.plus}
          bPad={".8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--secondary-color)"}
          color={"#fff"}
        />
      </div>
    </form>
  );
}

export default ExpenseForm;
