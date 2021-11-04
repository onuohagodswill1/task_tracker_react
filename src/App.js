// import './App.css';

import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  console.log('env: ', process.env.REACT_APP_PORT)
  const task_API_URL = 'http://localhost:5001/tasks'
  const [showTaskForm, setShowTaskForm] = useState(true)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()
      setTasks(tasks)
    }
    getTasks()
  }, [])

  // API calls
  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(task_API_URL)
    return await res.json()
  }

  // // Fetch a task
  // const fetchTask = (id) => {
  //   const 
  // }

  // Add task
  const addTask = async (task) => {
    const res = await fetch(`${task_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const addedTask = await res.json()
    setTasks([...tasks, addedTask])
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${task_API_URL}/${id}`, { method: 'DELETE' }) 
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const task = tasks.find(task => task.id === id)
    const res = await fetch(`${task_API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...task, reminder: !task.reminder})
    })
    const updatedTask = await res.json()
    setTasks(tasks.map(task => task.id === id? {...task, reminder: updatedTask.reminder} : task))
  }

  // Add Task From visibility
  const onShowTaskForm = () => {
    setShowTaskForm(!showTaskForm)
  }

  return (
    <div className="container">
      <Header onShowTaskForm={onShowTaskForm} />
      {showTaskForm && <AddTask onAddTask={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
