import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

import { useState } from "react"


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputID, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputID]: +newValue //+ is a unary operator that converts a string to a number
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a valid duration (years) greater than zero</p>}
      {inputIsValid && <ResultsTable userInput={userInput} />}
    </>
  )
}

export default App
