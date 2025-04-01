import React from 'react';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import { AudioProvider } from './context/AudioContext';

function App() {
  const songs = [
    {
      id: 1,
      title: "Caspian Tern Call 1",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    },
    {
      id: 2,
      title: "Caspian Tern Call 2",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    }
  ];

  return (
    <AudioProvider>
      <div className="app">
        <header className="app-header">
          <h1>Bird Song Player</h1>
          <p>Listen to different Caspian Tern calls</p>
        </header>
        <main className="app-main">
          <div className="songs-container">
            {songs.map(song => (
              <AudioPlayer
                key={song.id}
                id={song.id}
                audioUrl={song.url}
                title={song.title}
              />
            ))}
          </div>
        </main>
      </div>
    </AudioProvider>
  );
}

export default App;
