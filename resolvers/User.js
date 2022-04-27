import { db } from "../data/db.js";

export const User = {
    todos: ({id}, args, info) => {
     
        const todos = db.todos.filter((todo) => todo.userId === id);
        return todos
    }
  };