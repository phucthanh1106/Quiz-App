import "./index.css";
import Quiz from "./components/quiz";
import Results from "./components/results.jsx";
import FunkyTitle from "./components/funkytitle.jsx";


function App() {

  return (
    <>
      <FunkyTitle text="Thanh's facts"/>

      <div className="app-container">
        <Quiz/>
      </div>
    </>
  )
}

export default App
