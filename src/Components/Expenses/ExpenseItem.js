import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  
  
  // const titl = props.title; can be used
  const[title, setTitle] = useState(props.title);
  // console.log("current title :" + titl); 
  

  const clickHandler = () => {
    setTitle("after-Update");
  };
  // console.log("title updated at:" + title);


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
