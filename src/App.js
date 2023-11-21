import './App.css';
import AddTache from './components/AddTache';
import DeleteTasks from './components/DeleteTasks';
import ListTasks from './components/ListTasks';
import StatsTasks from './components/StatsTasks';

function App() {
  return (
    <div className="container">
      <div className='todo'>
        <AddTache />
        <ListTasks />
        <DeleteTasks />
        <StatsTasks />
      </div>
    </div>
  );
}

export default App;
