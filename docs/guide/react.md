# React Integration

Atomix provides a first-class React integration via the `atomix-react` package. It uses `useSyncExternalStore` under the hood for reliable, concurrent-safe subscriptions.

---

## ⚛️ Installing React Bindings

Make sure you have both packages installed:

```bash
npm install atomix-core atomix-react
```

## 🪄 useAtom Hook

The useAtom hook subscribes your component to a specific slice of state and re-renders only when that slice changes.

```ts
import { createAtom } from "atomix-core";
import { useAtom } from "atomix-react";
```

## 🧠 Example: Counter with React

Atomix store

```ts
// atoms/counter.ts
import { createAtom } from "atomix-core";

export const counterAtom = createAtom({ count: 0 }, (set) => {
  increment: () => set((state) => ({ count: state.count + 1 }));
});
```

Provide Atomix Provider

```tsx
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

Counter Componet

```tsx
// components/Counter.tsx
import { useAtomx } from "atomix-react";
import { useActions } from "atomix-react";

export function Counter() {
  const count = useAtomx((state) => state.count);
  const { increment } = useActions();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

✅ The component re-renders only when count changes, thanks to Atomix’s selector-based subscription.

## 🧹 Cleaning Up (Optional)

You don’t need to manually unsubscribe — Atomix handles this automatically when using useAtom.

🧪 Try It Yourself
You can now integrate atoms anywhere in your app: counters, forms, todos, auth — it’s all the same pattern.
