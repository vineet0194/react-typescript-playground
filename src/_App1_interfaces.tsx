/*
  React with TS - Introduction
*/

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  interface Todo{
    id: number,
    todo: string,
    completed: boolean,
    userId: number
  };

  const [ todos, setTodos ] = useState<Todo[]>([]);

  useEffect(()=>{
    const fetchData = async() => {
      const response = await axios.get("https://dummyjson.com/todos");
      setTodos(response.data.todos);
    }

    fetchData();
  }, []);

  return (
    <>
      {
        todos.map((item: Todo)=>{
        return <h3 key={item.id}>
          {item.todo}
        </h3>
        })
      }
    </>
  )

}

export default App
