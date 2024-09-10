import React, { useState } from 'react';
import './TaskMage.css'; // Import CSS file for styling

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-manager">
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No tasks available. Add a task!</p>
        )}
      </div>
    </div>
  );
}

export default TaskManager;
