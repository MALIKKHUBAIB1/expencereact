import React from "react";
import ExpeneseItem from "./ExpeneseItem";
import "./Expences.css";
import Card from "./Card";
function Expences({ item }) {
  return (
    <Card className="expenses">
      {item.map((expenseItem) => {
        return (
          <ExpeneseItem
            key={expenseItem.id}
            title={expenseItem.title}
            amount={expenseItem.amount}
            date={expenseItem.date}
          />
        );
      })}
    </Card>
  );
}

export default Expences;
