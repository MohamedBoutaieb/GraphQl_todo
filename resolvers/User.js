import { db } from "../data/db.js";

export const User = {
    todos: ({id}, args, info) => {
        // obtenir toutes les todo d'un user
        const todos = db.todos.filter((todo) => todo.userId === id);
        return todos
    }
  };