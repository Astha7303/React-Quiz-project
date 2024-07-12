import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Quiz.css'
const Quiz = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  }

  const questions = [
    {
      id: 'q1',
      question: 'How many days in month?',
      answers: ['32', '30', '25', '24'],
      correctAnswer: '30'
    },
    {
      id: 'q2',
      question: 'How many months in year?',
      answers: ['10', '17', '12', '5'],
      correctAnswer: '12'
    },
    {
      id: 'q3',
      question: 'How many colors in rainbow?',
      answers: ['8', '7', '2', '3'],
      correctAnswer: '7'
    },
    {
      id: 'q4',
      question: 'How many players in cricket?',
      answers: ['10', '20', '30', '11'],
      correctAnswer: '11'
    },
    {
      id: 'q5',
      question: 'How many days in week?',
      answers: ['7', '3', '5', '1'],
      correctAnswer: '7'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
const [iscompleted,setiscompleted]=useState(false);


  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      console.log("true");
      // setSelectedAnswer(true)
      setScore(score + 1);
    }
    // else{
    //   setSelectedAnswer(false)
    // console.log('wrong')
    // }
    setSelectedAnswer(selectedAnswer);
    console.log(score, "score");
  };

console.log(currentQuestion < questions.length,"jjjjjjjjjjj");
  const handleNextClick = () => {
    if(!selectedAnswer && currentQuestion < questions.length){
      handleOpen()
    }
    else{
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }

    }
  };
  const handleModelOk = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    handleClose()
  }
  const handleModelcancel = () => {
    console.log("cancel");
    handleClose()
  }
  const resetquiz = () => {
    setScore(0)
    setShowScore(false)
    setSelectedAnswer(null)
  };

  return (

      <div className="quiz-container">
        <div className='Quiz'>QUIZ GAME</div>
        {showScore ? (
          <div className="score-container">
            <div>You have scored : {score}
            </div>
            <button onClick={resetquiz}>Reset Quiz</button>
          </div>
        )
        : (
        <div> 
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].answers.map((answer) => (
            <li>
              <button
                onClick={() => handleAnswerClick(answer)}
                className={`answer-button ${answer === selectedAnswer ? 'selected' : ''}`}>
                {answer}
              </button>
            </li>
          ))}
            <button onClick={handleNextClick} className="next-button">Next Question</button>
          </div>)
        }
        <Modal
        dialogClassName="popup-box"
        // onClose={handleClose}
        open={open}
        backdrop="static" // Add this line to prevent closing on click outside
        size="lg"
        scrollable="true"
        aria-labelledby="modal-modal-title"
        centered
      >
        
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ARE YOU SURE TO SKIP THIS QUESTION?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button onClick={handleModelOk} className="modal-button">YES</button><br />
            <button onClick={handleModelcancel} className="modal-button">NO</button>
          </Typography>
        </Box>
      </Modal>

    </div>

  );

};

export default Quiz;
//array of object-question+answer+correctanswer
//print all
//next button - onclick - next que
//answer match - 
//que length - submit test
//score