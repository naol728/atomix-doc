# Changelog

> All notable changes to **Atomix** will be documented in this file.  
> This project adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.2] — 2025-07-14

### ✨ Features

- Added `AtomixContext` to provide global store access via React context.
- Introduced `useAtomix` hook for subscribing to store state via selectors.
- Introduced `useActions` hook to access actions defined in `createAtom`.
- Enhanced `subscribe()` to support selectors with deep equality comparison.

### 🐛 Bug Fixes

- Fixed stale closure issue in React bindings.
- Resolved type inference issue for generic listener functions.

---

## [0.0.2] — 2025-07-10

### ✨ Features

- Initial core API implementation:
  - `createStore()`
  - `useStore`
  - `subscribe()`
  - `setState()` and `getState()`

### 🛠 Improvements

- Established documentation structure using VitePress.

---

## [0.0.1] — 2025-07-01

- Initial project scaffolding using:
  - `pnpm` for package management
  - `tsup` for bundling
  - `vitepress` for documentation

---

## 🔗 Related

- 📦 [GitHub Releases](https://github.com/naol728/Atomix/releases)
