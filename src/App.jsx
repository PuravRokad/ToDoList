import React, { useState } from 'react';

const ToDoList = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim() || !dueDate.trim()) {
      alert('Please fill out all fields');
      return;
    }
    setMainTask([...mainTask, { title, desc, dueDate, completed: false }]);
    setTitle('');
    setDesc('');
    setDueDate('');
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setMainTask(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Daily To Do List</h1>
      <form onSubmit={submitHandler} className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full mt-3 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
        ></textarea>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full mt-3 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
        />
        <button type="submit" className="w-full mt-3 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200">Add Task</button>
      </form>
      <hr className="mb-6" />
      <div className="space-y-4">
        {mainTask.length > 0 ? (
          mainTask.map((task, index) => (
            <div key={index} className={`border p-4 rounded-md ${task.completed ? 'bg-green-100' : ''}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.desc}</p>
                  <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
                </div>
                <div>
                  <button onClick={() => toggleComplete(index)} className={`px-3 py-1 rounded-md ${task.completed ? 'bg-gray-200' : 'bg-green-500 text-white'} focus:outline-none`}>
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={() => deleteTask(index)} className="ml-2 px-3 py-1 bg-red-500 text-white rounded-md focus:outline-none">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks available. Add some tasks above.</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
