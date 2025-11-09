import React, { useState } from "react";
import Results from "./results";
import questionBank from "./questionbank";

function Quiz() {
    /* Handling user's options */
    const initialAns = Array(questionBank.length).fill(null);

    const [userAns, setUserAns] = useState(initialAns);
    const [curQues, setCurQues] = useState(0);
    const [isQuizFinishied, setIsQuizFinished] = useState(false);

    const selectedAns = userAns[curQues];

    function handleSelectOption(option) {
        const newUserAns = [...userAns];
        newUserAns[curQues] = option;

        setUserAns(newUserAns);
    }

    /* Handling prev and next question */
    function goToNext() {
        if (curQues < questionBank.length - 1) {
            setCurQues(curQues + 1);
        } else {
            setIsQuizFinished(true);
        }
    }

    function goToPrev() {
        if (curQues > 0) {
            setCurQues(curQues - 1);
        }
    }

    /* Handling when the quiz is finished */
    if (isQuizFinishied) {
        return <Results userAnswers={userAns} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }

    /* Restarting the quiz 
    => Returning all of the states to their initial values
    */

    function restartQuiz() {
        setUserAns(initialAns);
        setCurQues(0);
        setIsQuizFinished(false);
    }

    return (
        <div>
            <h2 className="question"> {questionBank[curQues].question}</h2> 

            {questionBank[curQues].options.map((option) => (
                <button className={"option" + (selectedAns === option ? " selected" : "")} onClick={() => handleSelectOption(option)}>{option}</button>
            ))}

            {/* <p>Option Selected: {optionSelected}</p> */}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={curQues === 0}> Previous</button>
                <button onClick={goToNext} disabled={!selectedAns}> 
                    {curQues === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                </button>
            </div>

        </div>
    );
}

export default Quiz;