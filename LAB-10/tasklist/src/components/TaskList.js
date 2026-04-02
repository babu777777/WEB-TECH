// src/components/TaskList.js
import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React Basics" },
    { id: 2, text: "Practice useState Hook" },
    { id: 3, text: "Build Dynamic List with map()" }
  ]);

  const [newTask, setNewTask] = useState('');

  // Add new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const newTaskItem = {
      id: Date.now(),
      text: newTask.trim()
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  // Remove task
  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter(task => task.id !== idToDelete));
  };

  return (
    <div className="task-container">
      <h1>Task List</h1>
      <p>Exercise 2 - Add and Remove Items Dynamically</p>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="add-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>

      {/* Dynamic List */}
      <div className="list-area">
        {tasks.length === 0 ? (
          <p className="empty-state">No tasks yet. Add some tasks above! 🎉</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>
                <button 
                  onClick={() => handleDeleteTask(task.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="task-count">Total Tasks: <strong>{tasks.length}</strong></p>
    </div>
  );
};

export default TaskList;