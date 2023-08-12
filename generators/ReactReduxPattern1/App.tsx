import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const [userName, setUserName] = React.useState('Default User');
  const [datesToIncludeRatio, setDatesToIncludeRatio] = React.useState(0.3);

  const handleClick = () => {
    alert('Value of userName:' + userName);
  }

  return (
    <div className="App">
      <h1>The Assistant !</h1>
      <TextField id="username" label="User Name" value={userName} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(event.target.value);
        }} />
      <TextField id="datesToIncludeRatio" label="datesToIncludeRatio" value={datesToIncludeRatio} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setDatesToIncludeRatio(Number(event.target.value));
        }} />
      <br/>
      <Button variant="contained" color="primary" onClick={handleClick}>Push Me</Button>

      <Counter />


    </div>
  );
}

export default App;
