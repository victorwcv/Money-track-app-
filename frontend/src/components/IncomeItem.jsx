import "../styles/incomeItem.scss";
import icons from "../utils/icons";
import Button from "./Button";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) => {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return icons.money;
      case "freelancing":
        return icons.freelance;
      case "investiments":
        return icons.stocks;
      case "stocks":
        return icons.users;
      case "bitcoin":
        return icons.bitcoin;
      case "bank":
        return icons.card;
      case "youtube":
        return icons.yt;
      case "other":
        return icons.piggy;
      default:
        return "NA";
    }
  };

  return (
    <div className="icon-item">
      <div className="icon">{type === "expense" ? "" : categoryIcon()}</div>
      <div className="content">
        <h5 className="title" style={{ "--indicator-color": indicatorColor }}>
          {title}
        </h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {icons.dollar}
              {amount}
            </p>
            <p>
              {icons.calendar} {date}
            </p>
            <p>
              {icons.comment}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={icons.trash}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--secondary-color)"}
              color={"#fff"}
              onClick={() => deleteItem(id)}
              hover={'var(--color-green)'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
