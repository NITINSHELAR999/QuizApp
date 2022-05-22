import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Quiz from "../../Pages/Quiz/Quiz";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [timer,setTimer] = useState(30)

  const history = useHistory();


 
  
var quiz;

  useEffect(() => {
  
    if (currQues > 8) {
      history.push("/result");
    } else{
     quiz = setInterval(() => {
     
       
        setCurrQues(currQues + 1);
        setTimer(30)
       }, 30000);
       
       return () =>{clearInterval(quiz)}
    }
}, [currQues])




var intervaltimer;

useEffect(() =>{
  intervaltimer = setInterval(() => {
    setTimer(timer-1)
  }, 1000 );
  return () =>{clearInterval(intervaltimer)}
})

  

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues > 8) {
      history.push("/result");
    } else if (selected) {
      setTimer(30)
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };

  return (
    <div className="question">
      
      <div className="question-header">
        <h1 className="questiondetail">Question {currQues + 1} of {questions.length}</h1>
        <h3 className="showtimer">Time Left : <span className={`timer ${timer >10 ? "green" : "red"}`} >{timer}</span></h3>
      </div>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
