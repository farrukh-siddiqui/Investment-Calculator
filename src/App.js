import { React, useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";
import HereHeader from "./Components/HereHeader";
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <HereHeader />
      <Form onCalculate={calculateHandler} />

      {!userInput && <p>No Investment made to calculate!!</p>}
      {userInput && (
        <Table
          data={yearlyData}
          intialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
