import React from 'react';
import './App.scss';
import ThemeSetter from "./components/ThemeSetter/ThemeSetter.tsx";
import Button from '@mui/material/Button';

function App() {
  return (
    <>
     <ThemeSetter />
      <div className="app">
      <Button variant="contained" size="large">Hello World</Button>
      </div>
    </>
  );
}

export default App;
