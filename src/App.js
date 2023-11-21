import './App.css';
import AddTache from './components/AddTache';
import ListTasks from './components/ListTasks';

function App() {
  return (
    <div className="container">
      <div className='todo'>
        <AddTache />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
