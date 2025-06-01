import { useState } from 'react';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAddTask();
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="bg-purple-50 flex flex-col items-center gap-4 p-4 rounded-lg shadow-md m-4 max-w-1/2 mx-auto">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">Add New Task</h1>
      
      <div className="flex flex-row items-center gap-4 mb-3 w-full">
        <input
          type="text"
          className="todo border rounded-md px-3 py-1 flex-1"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="cursor-pointer bg-purple-700 px-4 py-1 text-white rounded-2xl hover:bg-purple-600 transition-all duration-300 ease-in-out"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-purple-700">Your Tasks</h2>
          {totalTasks > 0 && (
            <div className="text-sm bg-purple-100 px-2 py-1 rounded-full">
              <span className="text-green-600 font-semibold">{completedCount}</span>
              <span className="text-gray-600"> / {totalTasks} completed</span>
            </div>
          )}
        </div>

        {tasks.length === 0 ? (
          <p className="text-gray-500 italic">No tasks yet. Add one above!</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-3 rounded-md shadow-sm transition-all duration-300 ${
                  task.completed 
                    ? 'bg-green-50 border-l-4 border-green-400 opacity-90' 
                    : 'bg-white border-l-4 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleComplete(index)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      task.completed
                        ? 'bg-green-500 border-green-500 scale-110'
                        : 'border-purple-500 hover:border-green-400'
                    }`}
                  >
                    {task.completed && (
                      <span className="text-white text-sm font-bold">✓</span>
                    )}
                  </button>
                  <span
                    className={`transition-all duration-300 ${
                      task.completed 
                        ? 'line-through text-gray-500' 
                        : 'text-gray-800'
                    }`}
                  >
                    {task.text}
                  </span>
                  {task.completed && (
                    <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium animate-pulse">
                      DONE
                    </span>
                  )}
                </div>
                <button
                  className="cursor-pointer bg-red-500 px-3 py-0.5 text-white rounded-2xl hover:bg-red-600 transition-all duration-300 ease-in-out text-sm"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}

        {totalTasks > 0 && completedCount === totalTasks && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-lg text-center">
            <span className="text-green-700 font-semibold text-lg">🎉 All tasks completed! Great job!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;