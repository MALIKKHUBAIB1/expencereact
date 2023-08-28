import React from "react";
import "./ExpeneseItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "./Card";
function ExpeneseItem(props) {
  // const expenceDate = new Date(2021, 2, 4);
  // console.log(expenceDate);
  // const expenceTitle = "Car Insurance";
  // const expenceAmount = 294.34;
  const { amount, title, date } = props;

  return (
    <Card className="expense-item ">
      <ExpenceDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpeneseItem;
