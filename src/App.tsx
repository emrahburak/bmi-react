import BodyHeightCard from "./components/BodyHeightCard";
import Button from "./components/Button";
import CardCounter from "./components/CardCounter";
import GenderCard from "./components/GenderCard";
import Header from "./components/Header";
import "./main.css";

function App() {


  const handleClick = () => {
    console.log("clicked")
  }

  return (
    <>
      <header>
        <Header className="font-inter-bold font-italic text-30 font-white font-700 text-center" >
          BMIDO
        </Header>
      </header>
      <main >
        <section className="wrapper-cls mx-auto" >
          <h2>BMI CALCULATOR</h2>
          <div className="flex items-center justify-between gap-10 w-100">
            <CardCounter className="font-inter-regular  font-normal title-02  bg-white px-10 counter-card px-15p" cardType="age">Age</CardCounter>
            <CardCounter className="font-inter-regular  font-normal title-02  bg-white px-10 counter-card px-15p" cardType="weight">Weight (KG)</CardCounter>
          </div>
          <div>
            <BodyHeightCard className="body-height-card" >
            Height (CM)
            </BodyHeightCard >
          </div>
          <div>
            <GenderCard className="gender-card">
              Gender
            </GenderCard>
          </div>
          <Button className="btn" btnType="calculate" handleClick={handleClick}>
            Calculate BMI
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
