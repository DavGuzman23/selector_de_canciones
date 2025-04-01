import './App.css';

function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
      bird2.pause();
    } else {
      bird1.pause();
    }
  };


  return (
    <div>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={() => {
        if (bird2.paused) {
          bird2.play();
          bird1.pause();
        } else {
          bird2.pause();
        }
      }}>Caspian Tern 2</button>
    </div>
  );
}

export default App;
