# `createAtom`

```ts
function createAtom<T, U>(initialState: T, actions: U): AtomixStore<T>;
```

Creates a new atom — a reactive, standalone unit of state. You can read, update, and subscribe to it.

## 📥 Parameters

| Name           | Type | Description                    |
| -------------- | ---- | ------------------------------ |
| `initialState` | `T`  | The initial state of the atom. |
| `actions`      | `U`  | The actions of the atom.       |

## 📤 Returns

Returns an object with the following API:

```ts
{
  getState: () => T
  setState: (updater: (prev: T) => T) => void
  subscribe: <U>(
    selector: (state: T) => U,
    listener: (selected: U) => void
  ) => () => void
}
```

This is the full AtomixStore instance for that atom.

## ✅ Example

```ts
const counter = createAtom({ count: 0 }, (set) => ({
  increase: () => set((s) => ({ count: s.count + 1 })),
}));

counter.increase();
console.log(counter.getState()); // { count: 1 }
```

You can also subscribe to part of the state:

```ts
const unsubscribe = counter.subscribe(
  (s) => s.count,
  (val) => console.log("Count changed:", val)
);
```

## 📌 Notes

Every atom is independent and reactive.

Designed to work both with and without React.

State updates are immutable and functional.
