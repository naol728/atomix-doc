# Usage Basics

After installing `atomix-core`, you can start managing state using **atoms** — simple units of state that hold your data and notify subscribers on change.

---

## 🧱 Creating an Atom

```ts
import { createAtom } from "atomix-core";

const counter = createAtom({ count: 0 }, (set) => {
  increment: () => set((state) => ({ count: state.count + 1 }));
});
```

Atoms store state internally and provide a consistent API to read, update, and subscribe to changes.

## 📖 Reading State

```ts
const state = counter.getState();
console.log(state.count); // 0
```

## 🔁 Updating State

```ts
counter.setState((prev) => ({
  count: prev.count + 1,
}));
counter.increment();
```

Updates are done immutably using a function that receives the previous state.

## 🎯 Subscribing to State

```ts
const unsubscribe = counter.subscribe(
  (state) => state.count, // selector
  (value) => console.log("New count:", value) // listener
);
```

Atomix uses selectors to watch only parts of the state you care about, improving performance and avoiding unnecessary work.

## 🧼 Unsubscribing

```ts
unsubscribe();
```

Always unsubscribe when the listener is no longer needed (in useEffect cleanup, for example).
