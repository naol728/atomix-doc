# `AtomixStore<T>`

The `AtomixStore<T>` is the core object returned by `createAtom`.  
It gives you full control over the atom’s state — read, update, and subscribe.

---

## 🧱 Interface

```ts
interface AtomixStore<T> {
  getState(): T;
  setState(updater: (prev: T) => T): void;
  subscribe<U>(
    selector: (state: T) => U,
    listener: (selected: U) => void
  ): () => void;
}
```

## 📌 Methods

getState()
Returns the current state of the atom.

```ts
const state = atom.getState();
```

setState(updater)
Updates the state immutably using a pure function

```ts
atom.setState((prev) => ({
  ...prev,
  count: prev.count + 1,
}));
```

The updater receives the previous state and returns the new one.

subscribe(selector, listener)
Listens for changes in selected parts of the state.

```ts
const unsubscribe = atom.subscribe(
  (s) => s.count,
  (newCount) => {
    console.log("Count changed:", newCount);
  }
);
```

✅ The listener only runs if the selector value changes (shallow equality).

To stop listening:

```ts
unsubscribe();
```

## ✅ Best Practices

Always use selectors for performance

Use getState for reads, not direct state access

Don’t mutate state — return a new object in setState
