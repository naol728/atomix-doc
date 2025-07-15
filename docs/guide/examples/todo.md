# ✅ Todo List Example

This example demonstrates how to build a fully reactive todo list with Atomix and React. You'll see how to:

- Store and update a list of items
- Add, remove, and toggle todos
- Automatically re-render based on subscriptions

---

## 🧱 1. Define the Atom

```ts
// atoms/todo.ts
import { createAtom } from "atomix-core";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export interface InitalStat {
  todos: Todo[];
}
export interface Actions {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
let nextId = 1;
export const todoAtom = createAtom<InitalStat, Actions>(
  {
    todos: [] as Todo[],
  },
  (set) => ({
    addTodo: (text: string) =>
      set((s) => ({
        todos: [...s.todos, { id: nextId++, text, completed: false }],
      })),
    toggleTodo: (id: number) =>
      set((s) => ({
        todos: s.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
    removeTodo: (id: number) =>
      set((s) => ({ todos: s.todos.filter((el) => el.id !== id) })),
  })
);
```

## ⚛️ 2. Provide to Your Componet Tree

```ts
// App.jsx
import { AtomixProvider } from "atomix-react";
import { todoAtom } from "./atoms/todo";
import { TodoList } from "./components/TodoList";
export default function App() {
  return (
    <AtomixProvider store={todoAtom}>
      <TodoList />
    </AtomixProvider>
  );
}
```

## ⚛️ 3. Use It in a React Component

```tsx
// components/TodoList.tsx
import { useAtom, useActions } from "atomix-react";
import type { Actions, InitalStat, Todo } from "./atom/todo";
import { useState } from "react";

export function TodoList() {
  const [text, setText] = useState("");
  const todos: Todo[] = useAtomx((s: InitalStat) => s.todos);
  const { addTodo, removeTodo, toggleTodo }: Actions = useActions();

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo} disabled={!text}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{ marginLeft: "1rem" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 🔍 Notes

Every mutation is handled through Actions recived from useActions hook.

useAtom ensures minimal re-renders.
