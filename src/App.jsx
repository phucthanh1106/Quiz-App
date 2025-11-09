import "./index.css";
import Quiz from "./components/quiz";
import Results from "./components/results.jsx";
import FunkyTitle from "./components/funkytitle.jsx";
import MusicPlayer from "./components/musicplayer.jsx";


function App() {

  return (
    <>
      <FunkyTitle text="Thanh's facts"/>
      <MusicPlayer />

      <div className="app-container">
        <Quiz/>
      </div>
    </>
  )
}

export default App
