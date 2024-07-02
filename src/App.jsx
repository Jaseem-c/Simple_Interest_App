import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
function App() {
  // state
  const [PrincipleAmount, setPrincipleAmount] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);
  // for rendering p conditionaly
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  // for validate input
  const validate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name ,value);
    // console.log(!!value.match(/^[0-9]*$/));
    if (!!value.match(/^[0-9]*$/)) {
      if (name == "principle") {
        setPrincipleAmount(value);
        setIsPrinciple(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(true);
      } else {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name == "principle") {
        setPrincipleAmount(value);
        setIsPrinciple(false);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(false);
      } else {
        setYear(value);
        setIsYear(false);
      }
    }
  };
  const reset = () => {
    setPrincipleAmount(0);
    setRate(0);
    setYear(0);
    setIsPrinciple(true);
    setIsRate(true);
    setIsYear(true);
    setInterest(0)
  };

  const calculate = (e) => {
    e.preventDefault();
    if (PrincipleAmount == "" || Rate == "" || Year == "") {
      alert("Please Fill the Form Completely ");
    }
    else{
      setInterest((PrincipleAmount*Rate*Year)/100)
      // console.log(interest);
    }
  };

  return (
    <>
      <div
        style={{ backgroundColor: "black", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{ backgroundColor: "white", width: "500px" }}
          className="p-5 rounded "
        >
          <h1>Simple Interest App</h1>
          <p>Calculate Your Simple Interest Easily</p>
          <div
            style={{ height: "150px", backgroundColor: "orange" }}
            className="p-3 mt-5 rounded shadow d-flex justify-content-center align-items-center flex-column"
          >
            <h1 className="fw-bold">₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <form className="mt-5" onSubmit={calculate}>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="₹ Principle Amount"
                variant="outlined"
                className="w-100"
                onChange={(e) => validate(e)}
                name="principle"
                value={PrincipleAmount || ""}
              />
              {!isPrinciple && <p className="text-danger">*Invalid Input</p>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Rate Of Interest(p.a)%"
                variant="outlined"
                className="w-100"
                onChange={(e) => validate(e)}
                name="rate"
                value={Rate || ""}
              />
              {!isRate && <p className="text-danger">*Invalid Input</p>}
            </div>
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Year(Yr)"
                variant="outlined"
                className="w-100"
                onChange={(e) => validate(e)}
                name="year"
                value={Year || ""}
              />
              {!isYear && <p className="text-danger">*Invalid Input</p>}
            </div>
            <div className="mb-3 mt-4 d-flex">
              <Button
                variant="contained"
                className="w-50 me-3 p-3"
                color="success"
                disabled={isPrinciple && isRate && isYear ? false : true}
                type="submit"
              >
                Calculate
              </Button>
              <Button
                variant="outlined"
                className="w-50 fw-bold"
                color="primary"
                onClick={reset}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
