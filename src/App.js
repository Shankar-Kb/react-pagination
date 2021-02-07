import React, { useState } from "react";
import "./style.css"


const App = () => {

    const initState = {
      todos: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      currentPage: 1,
      todosPerPage: 5
    };


   const [pages, setPages] = useState(initState);
   
   const displayContent = (id) => {
       if(id < 1) id = 1;
       if(id > Math.ceil(todos.length / todosPerPage)) id = Math.ceil(todos.length / todosPerPage);
       setPages({...pages, currentPage: +id});
   }


   const { todos, currentPage, todosPerPage } = pages;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const RenderTodos = () => (currentTodos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    }));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const RenderPageNumbers = () => (
      <>
      <button className="btn btn-secondary" onClick={() => {displayContent(currentPage-1)}}>Previous</button> 
      {pageNumbers.map( elem => {
      return (
        <button className="btn btn-secondary"
          key={elem}
          id={elem}
          onClick={() => {displayContent(elem)}}
        >
          {elem}
        </button>
      );
      })}
      <button className="btn btn-secondary" onClick={() => {displayContent(currentPage+1)}}>Next</button>
      </>
    );

    return (
      <div className="pagination-box">
        <h1 className="text-center">React Pagination</h1>
        <ul className="todo-list">
          <RenderTodos />
        </ul>
        <ul>
          <RenderPageNumbers />
        </ul>
      </div>
    );
  
}

export default App;
