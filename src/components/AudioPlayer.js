import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';
import { useAudio } from '../context/AudioContext';

const AudioPlayer = ({ id, audioUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioUrl));
  const { currentlyPlaying, playAudio, stopAudio } = useAudio();

  useEffect(() => {
    // Si otro audio está reproduciéndose, pausar este
    if (currentlyPlaying && currentlyPlaying !== id) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, id]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      stopAudio();
    } else {
      audioRef.current.play();
      playAudio(id);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <button 
        className={`play-button ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <span className="song-title">{title}</span>
    </div>
  );
};

export default AudioPlayer; 