# Performance Tips

Atomix is designed to be lightweight and performant by default — but you can get even more out of it with the right patterns.

This guide covers how to avoid unnecessary work and ensure fast reactivity at scale.

---

## 🎯 Use Selectors to Limit Re-Renders

Instead of subscribing to the entire atom:

```ts
const state = useAtom((state) => state); // ❌ Subscribes to whole object
```

Select only what you need:

```ts
const count = useAtom((s) => s.count); // ✅
```

This reduces unnecessary re-renders and improves component isolation.

## 🧠 Avoid Storing Derived State

Don’t do this:

```ts
createAtom({ count: 0, doubled: 0 }); // ❌
```

Do this instead:

```ts
const doubled = useAtom((state) => state.count * 2); // ✅
```

Derived state should be computed, not stored.

## 💧 Keep Atom State Shallow

Avoid deeply nested state objects, since changes to deep values are harder to track and optimize.

```ts
// Instead of this:
createAtom({ user: { profile: { name: "Naol" } } }); // ❌

// Do this:
createAtom({ userName: "Naol" }); // ✅
```

## 🚀 Batch Updates (WIP)

In future versions, Atomix may support batched updates to reduce render cycles. For now, just group setState calls carefully.

## 📚 Summary

| Tip                    | Benefit                    |
| ---------------------- | -------------------------- |
| Use selectors          | Reduce unnecessary renders |
| Avoid derived in state | Keep logic declarative     |
| Split state by concern | Easier to debug and test   |
