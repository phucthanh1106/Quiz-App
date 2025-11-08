import React, { useState } from "react";
import Results from "./results";

function Quiz() {
    const questionBank = [
        {
            question: "When is Thanh's birthday?",
            options: ["11/06", "20/09", "30/12", "21/03"],
            answer: "11/06",
        },
        {
            question: "What is Thanh's favorite dish?",
            options: ["Thit kho", "Cua hoang de", "Thit cho", "Bun thang"],
            answer: "Thit kho",
        },
        {
            question: "Why does Thanh work?",
            options: [
            "Buy clothes", 
            "Get a fancy motorbike", 
            "To be able to live in NYC", 
            "All",
            ],
            answer: "All",
        },
        {
            question: "What is Thanh's major?",
            options: [
            "Business", 
            "Mechanical Engineer", 
            "Computer Science", 
            "Economics",
            ],
            answer: "Computer Science",
        },
    ];

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
        return <Results />
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