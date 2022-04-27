
import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addTodo: (parent, { addTodoInput }, { db, pubsub }, infos) => {
        
        const user = db.users.find((user) => user.id ===addTodoInput.userId);
        if (!user) {
          throw new Error(`Le user d'id ${addTodoInput.userId} n'existe pas`);
        } else {
          const newTodo = {
            id: db.todos.length +1,
            status: "WAITING",
            ...addTodoInput,
          };
          db.todos.push(newTodo);
          pubsub.publish("todo", { todo: { todo: newTodo, mutation: "ADD" } });
          return newTodo;
        }
     
      },
      updateTodo: (parent, { id, updateTodoInput }, { db, pubsub }, infos) => {
        const user = db.users.find((user) => user.id ===addTodoInput.userId);
        if (
          !user
        ) {
          throw new Error(`Le user d'id ${updateTodoInput.userId} n'existe pas`);
        } else {
          const todo = db.todos.find((todoItem) => todoItem.id === id);
          if (!todo) {
            throw new Error(`Le todo d'id ${id} n'existe pas`);
          } else {
            for (let key in updateTodoInput) {
              todo[key] = updateTodoInput[key];
            }
            pubsub.publish("todo", { todo: { todo, mutation: "UPDATE" } });
            return todo;
          }
        }
      },
      deleteTodo: (parent, { id }, { db, pubsub }, infos) => {
        const todo = db.todos.find(id);
        if (!todo) {
          throw new Error("Todo innexistant");
        } else {
          const newTodo = db.todo.filter((todo)=>(todo.id!= id));
          pubsub.publish("todo", { todo: { newTodo, mutation: "DELETE" } });
          return newTodo;
        }
      },
}