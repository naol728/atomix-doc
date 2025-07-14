# Selectors & Subscriptions

Atomix encourages precise and efficient reactivity through **selectors** — functions that extract a specific slice of your atom's state. This allows you to subscribe only to the data you care about.

---

## 🎯 What is a Selector?

A selector is simply a function:

```ts
(state) => state.count;
```

It receives the full state and returns the part you're interested in. Atomix uses this to determine when to trigger listeners.

## 📡 Subscribing with a Selector

```ts
const unsubscribe = counterAtom.subscribe(
  (state) => state.count,
  (count) => {
    console.log("Count changed:", count);
  }
);
```

✅ This only triggers when count changes — not when unrelated parts of the atom state do.

## 🧠 Behind the Scenes

Under the hood, Atomix shallow-compares the previous and next result of the selector. If they’re different, the listener runs.

This minimizes unnecessary re-renders or computations.

## 🚀 React + Selector

In React, you can use selectors directly with useAtom:

```ts
const count = useAtom((state) => state.count)``;
```

The component will only re-render when state.count changes — not for other keys like state.loading or state.user.

## 🧹 Unsubscribing

If you're using plain JavaScript (outside React), always call unsubscribe() when done:

```ts
const stop = atom.subscribe(sel, fn);
// ...
stop();
```
