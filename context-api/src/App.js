import logo from './logo.svg';
import './App.css';
import { Provider } from './components/store';
import TodoList from './components/TodoList';
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import Toggle from './components/Toggle';
function App() {
  return (
   <>
   <div className="App">
     <div className="toggle">
     <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <CSSReset />
      <Toggle />  
    </ColorModeProvider>
  </ThemeProvider>
     </div>
     <div className="todo">

     <Provider>
     <TodoList />
    </Provider>
  
   
     </div>

   </div>
    </>
   
  );
}

export default App;
