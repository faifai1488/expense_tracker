import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsGiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          year={selectedYear}
          onChangeYear={yearChangeHandler}
        ></CostsFilter>
        <CostsGiagram costs={filteredCosts}></CostsGiagram>
        <CostList costs={filteredCosts}></CostList>
        
      </Card>
    </div>
  );
};

export default Costs;
