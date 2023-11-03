import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React,{useState} from "react";

const INITIAS_COSTS = [
  {

    id:'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id:'c2',
    date: new Date(2021, 11, 25),
    description: "MacBook",
    amount: 1234.56,
  },
  {
    id:'c3',
    date: new Date(2020, 7, 16),
    description: "tent",
    amount: 200.0,
  },
];


const App = () => {
  
  const[costs, setCosts] = useState(INITIAS_COSTS);
  
  const addCostHandler =(cost) =>{
    setCosts(prevCosts =>{
      return [cost,...prevCosts]
    });
  };


  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs 
      costs={costs}
      className='costs'></Costs>
    </div>
  );
}

export default App;
