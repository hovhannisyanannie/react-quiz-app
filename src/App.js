import React, { useState } from "react";
import Start from "./components/Start";

  const App = () => {

  const Questions = [
    {
        question: 'Which of the following are closures in Javascript?',
        answers: [
            { answerText: 'Variables', isCorrect: false },
            { answerText: 'Functions', isCorrect: false },
            { answerText: 'Objects', isCorrect: false },
            { answerText: 'All of the above', isCorrect: true },
        ],
    },
    {
        question: 'What keyword is used to declare an asynchronous function in Javascript?',
        answers: [
            { answerText: 'async', isCorrect: true },
            { answerText: 'await', isCorrect: false },
            { answerText: 'setTimeout', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        question: 'Which object in Javascript doesn’t have a prototype?',
        answers: [
            { answerText: 'Base Object', isCorrect: true },
            { answerText: 'All objects have prototype', isCorrect: false },
            { answerText: 'None of the objects have a prototype', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        question: 'How to stop an interval timer in Javascript??',
        answers: [
            { answerText: 'clearINterval', isCorrect: true },
            { answerText: 'clearTimer', isCorrect: false },
            { answerText: 'intervalOver', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
];

  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [answersShown, setAnswersShown] = useState(false);
  const [score, setScore]=useState(0);
  const [username, setUsername] = useState(null);
  const [clicked, setClicked]=useState(false);

  const  handleAnswerClick=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1);
    }
    setClicked(true)
  }

  const handleNextQuestion=()=>{
    setClicked(false);
    if(currentQuestion<Questions.length-1){
      setCurrentQuestion(currentQuestion+1)
    }else{
      setAnswersShown(true)
    }
  }; 

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setAnswersShown(false);
  };

  return (
    <div className="App">
      <div className="container">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <> 
         <div className="quiz">
          {answersShown? (
            <div className="final-score">
              <p>You scored {score} out of {Questions.length}</p>
              <button onClick={() => handleRestartQuiz()}>Restart game</button>
             </div>
          ) : (       
            <div>
              <div className="questions">
                <div className="score">
                 <h1>Question {currentQuestion+1} /{Questions.length}</h1>
                <h2> Your Score: {score}</h2>
                <h3>  {Questions[currentQuestion].question}</h3>
                </div>
              </div>
              <div className="answers">
                {Questions[currentQuestion].answers.map((answer, index)=>(
                    <button 
                    key={index}
                    disabled={clicked}
                    className={`answer ${
                      clicked && answer.isCorrect ? "correct" :""
                    }`}
                    onClick={()=>handleAnswerClick(answer.isCorrect)}
                    > 
                    {answer.answerText}
                    </button>
                ))}
              </div>
         <div>  
        <div className="buttons">
            <button 
            className="next"
            onClick={handleNextQuestion} 
            disabled={!clicked}
            >Next</button>
            <button onClick={ handleRestartQuiz}>Quit</button>
        </div>
         </div>
        </div>
          )}
      </div>
      </>
      )}
      </div>
    </div>
  );
}
export default App;

