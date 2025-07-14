# `Selector<T, U>`

A **Selector** in Atomix is a function that extracts a specific part of the atom’s state.

It allows you to:

- Subscribe only to what you care about
- Reduce unnecessary re-renders or listener calls
- Improve performance in both React and vanilla JS

---

## 🧱 Type Definition

```ts
type Selector<T, U> = (state: T) => U;
```

## ✅ Example

```ts
const counterAtom = createAtom({ count: 0, name: "Naol" });

const countSelector = (state: { count: number }) => state.count;

const unsubscribe = counterAtom.subscribe(countSelector, (val) => {
  console.log("Count:", val);
});
```

## ⚛️ With React

Selectors work the same way inside useAtom:

```ts
const count = useAtom(counterAtom, (state) => state.count);
```

✅ React component only re-renders when count changes.

## 🚫 Anti-Patterns

Avoid selectors that return new objects or functions every time:

```ts
(s) => ({ ...s }); // ❌ always creates a new object
(s) => new Date(); // ❌ always new value
```

## 💡 Tip

Selectors should return stable values (e.g., strings, numbers, booleans, object references) to ensure === comparison is meaningful.
