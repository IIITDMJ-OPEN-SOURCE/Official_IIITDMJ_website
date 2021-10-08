import React from 'react';
import './App.scss';
import ThemeSetter from "./components/ThemeSetter/ThemeSetter.tsx";
function App() {
  return (
    <>
     <ThemeSetter />
      <div className="app">
        Hi there
      </div>
    </>
  );
}

export default App;
