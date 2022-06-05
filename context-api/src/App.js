import logo from './logo.svg';
import './App.css';
import { Provider } from './components/store';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider>
     <TodoList />
    </Provider>
  );
}

export default App;
