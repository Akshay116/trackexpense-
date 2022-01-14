import React,{useState} from 'react';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_DATA = [
    { 
      id: 'a1',
      title:  'mobile1',
      amount: 2001,
      date: new Date(2020,1,10),
      },
    { 
      id: 'a2',
      title:  'mobile2',
      amount: 2002,
      date: new Date(2020,2,10),
      },
    { 
      id: 'a3',
      title:  'mobile3',
      amount: 2003,
      date: new Date(2020,3,10),
      },
    { 
      id: 'a4',
      title:  'mobile4',
      amount: 2004,
      date: new Date(2020,4,10),
      },


  ];



const  App = () => {
  const [expenses,setExpenses] = useState(DUMMY_DATA);
 
  const addExpenseHandler = expense =>{
       setExpenses((prevExpenses) =>{
         return [expense, ...prevExpenses];

       });
  };
  return (
    <div className="App">
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
