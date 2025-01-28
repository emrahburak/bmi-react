import React, { useContext, useState } from "react";
import BodyHeightCard from "./components/BodyHeightCard";
import CardCounter from "./components/CardCounter";
import Header from "./components/Header";
import { AppContext } from "./components/Provider";
import "./main.css";
import { bmiCalculator } from "./utils/bmi";


function App() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error("useContext must be used within a CountProvider");
  }

  const { weightValue, heightValue, result, setResult } = context;


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("clicked ", heightValue, weightValue)
    const response = bmiCalculator(heightValue, weightValue)
    setResult(
      response
    )
  }

  return (
    <>
      <header>
        <Header className="font-inter-bold font-italic text-30 font-white font-700 text-center" >
          BMIDO
        </Header>
      </header>
      <main >

        <form onSubmit={handleSubmit}>
          <section className="wrapper-cls mx-auto" >
            <h2>BMI CALCULATOR</h2>
            <div className="flex items-center justify-between gap-10 w-100">
              <CardCounter className="font-inter-regular  font-normal title-02  bg-white px-10 counter-card px-15p" cardType="weight">Weight (KG)</CardCounter>
            </div>
            <div>
              <BodyHeightCard className="body-height-card" >
                Height (CM)
              </BodyHeightCard >
            </div>

            <button type="submit" className="btn">
              Calculate BMI
            </button>
            {result && (
              <div className='result-card'>
                <p>BMI Results</p>
                <span>{result}</span>
              </div>
            )
            }
          </section>
        </form>

      </main>


    </>
  );
}

export default App;
