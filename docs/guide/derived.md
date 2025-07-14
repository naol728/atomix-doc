# Derived State

Sometimes you need to compute values based on existing atom state — like totals, booleans, or filtered data. This is known as **derived state**.

Atomix encourages keeping derived values out of the state and instead computing them from the source atom on the fly.

---

## 💡 Why Derived State?

Derived state lets you:

- Avoid redundant state updates
- Keep logic declarative and predictable
- Reduce bugs by minimizing state duplication

---

## 🧠 Simple Example

Let's say you have a list of todos:

```ts
const todosAtom = createAtom({
  todos: [
    { id: 1, text: "Write docs", done: true },
    { id: 2, text: "Build example", done: false },
  ],
});
```

You can derive completedCount like this:

```ts
const completedCount = useAtom(
  (state) => state.todos.filter((todo) => todo.done).length
);
```

✅ This will automatically recompute when the underlying todos array changes — no manual updates needed.

## 🔁 With Plain JS

You can derive data without React:

```ts
const unsubscribe = todosAtom.subscribe(
  (s) => s.todos.filter((t) => t.done).length,
  (count) => {
    console.log("Completed todos:", count);
  }
);
```

❗ Don’t Store Derived State
Avoid this pattern:

```ts
createAtom({ count: 0, doubled: 0 }); // ❌ Don't store `doubled`
```

Instead, compute it:

```ts
const doubled = useAtom(counterAtom, (s) => s.count * 2);
```

Atomix encourages reactive thinking — derive what you need, when you need it.
