import { useState } from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";

function App() {

  const [tasks, setTasks] = useState([
    { id:0, title:'Create app', done: false,},
    { id:1, title:'Shopping', done: true,},
    { id:2, title:'Cooking', done: false,},
  ])

  const activeTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter(task => task.done)

  const doneTask = (id) => {
    const index = tasks.map(task => task.id).indexOf(id)
    setTasks(tasks => {
     tasks[index].done = true
     return [...tasks]
    })
  }

  const deleteTask = (id) => {
    const index = tasks.map(task => task.id).indexOf(id)
    setTasks(tasks => {
      tasks = tasks.filter(task => task.id !== id)
      return [...tasks]
    })
  }

  const addNewTask = (value) => {
    setTasks(tasks => {
      tasks.push({
        id:tasks.length !== 0 ? tasks.length : 0,
        title: value,
        done: false
      })
      return [...tasks]
    })
  }

  return (
    <div className="main_container">
      <div className="greeting">
        <h1>Hey! What's the plan for today?</h1>
        <TaskInput addNewTask={addNewTask}/>
      </div>
      <div className="App">
      {activeTasks.length
      ? <h2 className="main_title">Active tasks: {activeTasks.length}</h2>
      : <h2 className="main_title">Good job!</h2>}
      {[...activeTasks, ...doneTasks].map(task => (
        <Task 
          className='task_list'
          task={task} 
          key={task.id} 
          doneTask={() => doneTask(task.id)} 
          deleteTask={() => deleteTask(task.id)}/>
      ))}
      </div>
      <div className="bg"/>
    </div>
  );
}

export default App;
