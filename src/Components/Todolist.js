import React,{useState} from 'react';
import Todoform from './Todoform';
import Todo from './Todo';

function Todolist() {
    const [todos, setTodos] = useState([]);
     
     const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.test)) {
            return;
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);   
     };



    const updateTodo = (todoId,newvalue )  =>{
        if(!newvalue.text || /^\s*$/.test(newvalue.test)) {
            return;
        }
       
            setTodos(prev => prev.map(item => (item.id===todoId ? newvalue : item ))
            );
    };



     const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
     };

 
     const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
     };

  return (
    <div>
    <h1>What's the Plan for Today?</h1>
    <Todoform onSubmit={addTodo} />
    <Todo todos={todos}completeTodo={completeTodo}
     removeTodo={removeTodo}
     updateTodo={updateTodo} />
    </div>
  );
}

export default Todolist;