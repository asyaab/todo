import { React, useState } from 'react';
import Task from './Task';
import TaskInput from './TaskInput';

function App() {

  const [tasks, setTasks] = useState([
    { id: 0, title: 'Create app', done: false },
    { id: 1, title: 'Shopping', done: false },
    { id: 2, title: 'Cooking', done: false },
  ]);

  const [value, setValue] = useState('');

  const activeTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const doneTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, done: !task.done} : {...task}))
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addNewTask = (value) => {
    setTasks((tasks) => {
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: value,
        done: false,
      })
      return tasks;
    });
  };


  const editTask = (id) => {
    setValue(tasks.find(task => task.id === id).title)
  };


  return (
    <div className="main_container">
      <div className="greeting">
        <h1>Hey! What's the plan for today?</h1>
        <TaskInput 
          addNewTask={addNewTask} 
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="App">
        {activeTasks.length ? (
          <h2 className="main_title">Active tasks: {activeTasks.length}</h2>
        ) : (
          <h2 className="main_title">Good job!</h2>
        )}
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            className="task_list"
            task={task}
            key={task.id}
            editTask = {() => editTask(task.id)}
            deleteTask = {() => deleteTask(task.id)}
            doneTask={() => doneTask(task.id)}
          />
        ))}
      </div>
      <div className="bg" />
    </div>
  );
}

export default App;
