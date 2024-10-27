import React, { useState } from 'react';

const TodoList = ({ confirm }) => {
  const [todos, setTodos] = useState(['study react by sanket sir', 'solving leet code', 'exercise']);

  const handleDeleteTodo = async (index) => {
    try {
      await confirm({
        title: 'Delete Todo',
        message: `Are you sure you want to delete "${todos[index]}"?`,
      });
      setTodos(todos.filter((todo, idx) => idx !== index));
      console.log('Todo deleted');
    } catch {
      console.log('Delete canceled');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
