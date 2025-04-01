import React, { createContext, useState, useContext } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const playAudio = (audioId) => {
    setCurrentlyPlaying(audioId);
  };

  const stopAudio = () => {
    setCurrentlyPlaying(null);
  };

  return (
    <AudioContext.Provider value={{ currentlyPlaying, playAudio, stopAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}; 