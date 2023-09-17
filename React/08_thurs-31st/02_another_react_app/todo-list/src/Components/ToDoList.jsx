import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { text: 'Go for a run', isCompleted: false },
    { text: 'Visit father', isCompleted: false },
    { text: 'Build this React app', isCompleted: true },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { text }]);
  };

  const removeTask = (index) => {
    // filter out just the index, showing the rest of the items
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const toggleTask = (index) => {
    const copyTasks = [...tasks];
    // Like the not keyword in Python, toggling true <> false values.
    copyTasks[index].isCompleted = !copyTasks[index].isCompleted;
    setTasks(copyTasks);
  };

  return (
    <section className='todo-list'>
      <ul className='tasks'>
        {tasks.map((task, idx) => (
          <li className='todo' key={idx}>
            <span
              onClick={() => {
                toggleTask(idx);
              }}
              className={
                task.isCompleted ? 'todo-text todo-completed' : 'todo-text'
              }>
              {task.text}
            </span>
            <button onClick={() => removeTask(idx)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddTaskForm addTask={addTask} />
    </section>
  );
};

export default ToDoList;
