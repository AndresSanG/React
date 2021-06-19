import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from './temaConfig';
import Contenedor from './components/Contenedor';

const App = () => 
{
  return (

    <div className="App">
    <ThemeProvider theme ={theme}>
    <Contenedor/>
    </ThemeProvider>


    </div>
  );
}

export default App;
