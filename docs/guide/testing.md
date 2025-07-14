# Testing

Atomix is easy to test because its atoms are just pure JavaScript objects with no hidden magic. You don’t need special tools or mocks — just call and assert.

This page walks you through testing atoms both with and without React.

---

## ✅ Test Atom Logic (Core Only)

Here's how you can test an atom without any React dependency:

```ts
import { createAtom } from "atomix-core";

test("increments counter", () => {
  const counter = createAtom({ count: 0 });

  counter.setState((s) => ({ count: s.count + 1 }));

  expect(counter.getState().count).toBe(1);
});
```

## 🎯 Test Subscriptions

You can assert that listeners are triggered when state changes:

```ts
test("calls listener when count changes", () => {
  const atom = createAtom({ count: 0 });

  const spy = vi.fn();
  atom.subscribe((s) => s.count, spy);

  atom.setState((s) => ({ count: 1 }));
  atom.setState((s) => ({ count: 2 }));

  expect(spy).toHaveBeenCalledTimes(2);
});
```

✅ You can use jest.fn() if you're using Jest instead of Vitest.

## ⚛️ Testing React Components

You can use any testing library like @testing-library/react or RTL to test your React components.

```ts
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import { counterAtom } from "./atoms/counter";

test("react counter increments", () => {
  const { getByText } = render(<Counter />);

  fireEvent.click(getByText("Increment"));

  expect(getByText("Count: 1")).toBeTruthy();
});
```

Atomix doesn’t require a provider or context setup — just import the atom and use it as usual.

## 🧪 Tips

Reset atom state between tests if you're reusing the same atom

Wrap updates in act() if needed when testing React

You can create atoms inline or import them

That's it! You now have full control over your atoms and how to test them effectively.
