
import { db } from "../data/db.js";
export const Todo = {
    user: ({ userId }, args, info) => {
        // obtenir le user d'une todo
        const user = db.users.find((user) => user.id === userId);
        if (!user) {
            throw new Error(`ce todo est sans user!`);
        }
        return user
    }
  };