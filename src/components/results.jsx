import { use } from "react";


function Results({ questionBank, userAnswers, restartQuiz}) {
    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((ans, i) => {
            if (ans === questionBank[i].answer) {
                finalScore++;
            }
        })

        return finalScore;
    }

    const score = getScore();

    return (
        <div>
            <h2>Quiz Completed!!!</h2>
            <p className="score">Your score: {score}/{questionBank.length}</p>
            <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}



export default Results;