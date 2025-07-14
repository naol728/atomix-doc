# Changelog

> All notable changes to **Atomix** will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.1.3] - 2025-07-14

### ✨ Added

- `subscribe()` now supports selectors with deep equality checks
- New utility: `createAtom` now accepts an `onInit` lifecycle
- Auto-pruning for unused subscriptions in React adapter

### 🐛 Fixed

- React integration issue with stale closures
- Type inference issue for generic listeners

---

## [0.1.2] - 2025-07-10

### ✨ Added

- First release with:
  - `createAtom()`
  - `AtomixStore`
  - `subscribe()` and `setState()`

### 🛠 Internal

- Added unit tests for core logic
- Docs structure with VitePress

---

## [0.1.0] - 2025-07-07

- Initial commit
- Project scaffolded using `pnpm`, `vitepress`, and `tsup`

---

## 🔗 Links

- [Full GitHub Releases](https://github.com/naol728/Atomix/releases)
