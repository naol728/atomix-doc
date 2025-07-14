# 🧮 Counter Example

This is a minimal example showing how to use Atomix with React to build a simple counter component.

It demonstrates how to:

- Create an atom
- Read and update state
- Use `useAtom` for selective rendering

---

## 🧱 1. Define the Atom

Create a file like `atoms/counter.ts`:

```ts
// atoms/counter.ts
import { createAtom } from "atomix-core";

export const counterAtom = createAtom({ count: 0 }, (set) => {
  increment: () => set((state) => ({ count: state.count + 1 }));
  decrement: () => set((state) => ({ count: state.count - 1 }));
});
```

## ⚛️ 2. Provide to your componets

```ts
// App.jsx
import { AtomixProvider } from "atomix-react";
import { counterAtom } from "./atoms/counter";
import { Counter } from "./components/Counter";
export default function App() {
  return (
    <AtomixProvider store={counterAtom}>
      <Counter />
    </AtomixProvider>
  );
}
```

## ⚛️ 3. Use It in a Component

Create your component:

```tsx
// components/Counter.tsx
import { useAtom, useAction } from "atomix-react";

export function Counter() {
  const count = useAtom((state) => state.count);
  const { increment, decrement } = useAction();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

## 🧪 4. Render the Component

In your app entry:

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
```

## ✅ Key Points

createAtom stores the state and actions.

AtomixProvider provide the state and actions to componet tree.

useAtom( selector) return a part of the state.

useAction return the Defined Actions .

No context provider required — atoms are self-contained.
