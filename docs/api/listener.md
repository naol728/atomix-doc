# Listener Type in Atomix API

The **Listener** is a fundamental concept in Atomix that allows you to react to changes in the state or selected parts of the state.

---

## What is a Listener?

A Listener is a callback function that receives the updated selected value whenever the part of the state it listens to changes. It enables reactive updates and helps components or other logic respond to state mutations.

---

## Listener Type Definition

```ts
type Listener<U> = (selectedValue: U) => void;
```

## How Listeners Work

When you subscribe to the store using a selector, you provide a listener to get notified of changes in the selected data.

Example:

```ts
import { Listener, Selector } from "atomix-core";

interface State {
  count: number;
}

const listener: Listener<number> = (newCount) => {
  console.log("Count changed to:", newCount);
};

const selector: Selector<State, number> = (state) => state.count;

// Subscribe to store updates
const unsubscribe = store.subscribe(selector, listener);

// Later, unsubscribe when no longer needed
unsubscribe();
```

## Best Practices

Keep listener logic lightweight to avoid performance bottlenecks.

Unsubscribe listeners when no longer needed to prevent memory leaks.

Use selectors to scope listeners only to the parts of state they actually need.

## Summary

Listeners enable reactive programming in Atomix by notifying you when selected state data changes. They are essential for building performant and maintainable apps
