# `subscribe()`

The `subscribe` method lets you listen to specific parts of an atom’s state. It’s a powerful way to react to changes without triggering unnecessary work.

---

## 📦 Signature

```ts
subscribe<U>(
  selector: (state: T) => U,
  listener: (selectedValue: U) => void
): () => void
```

## 🧩 Parameters

| Name       | Type                    | Description                            |
| ---------- | ----------------------- | -------------------------------------- |
| `selector` | `(state: T) => U`       | Extracts the piece of state to observe |
| `listener` | `(selected: U) => void` | Runs when selected value changes       |

## 🔁 Return

Returns a cleanup function:

```ts
const unsubscribe = atom.subscribe(selector, listener);
unsubscribe(); // stops listening
```

## ✅ Example

```ts
const counter = createAtom({ count: 0 });

const unsubscribe = counter.subscribe(
  (s) => s.count,
  (val) => console.log("New count:", val)
);

counter.setState((s) => ({ count: s.count + 1 }));
// → New count: 1

unsubscribe();
```

## ⚠️ Selector Comparison

The selector result is shallow-compared (===).
If the value hasn’t changed, the listener will not be called.

Avoid this pattern:

```ts
(s) => ({ ...s }); // ❌ always returns a new object
```

Instead, select primitives or memoized values:

```ts
(s) => s.user.id; // ✅
```

## 🧼 Cleanup

Always call the unsubscribe function when done (unless using useAtom in React, which handles it automatically).
