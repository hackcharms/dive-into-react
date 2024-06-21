# Hooks
Functions starting with `use` are called Hooks. `useState` is a built-in Hook provided by React. You can find other built-in Hooks in the [API reference](https://react.dev/reference/react). You can also write your own Hooks by combining the existing ones.


Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use `useState` in a condition or a loop, extract a new component and put it there.

Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.

### State Hooks 
- `useState` declares a state variable that you can update directly.
- `useReducer` declares a state variable with the update logic inside a [reducer function](https://react.dev/learn/extracting-state-logic-into-a-reducer).

### Context Hooks 
Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.

`useContext` reads and subscribes to a context.

```ts
function Button() {
  const theme = useContext(ThemeContext);
  
  ```

### Ref Hooks
  Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.

  ```ts
  function Form() {
  const inputRef = useRef(null);
  // ...
  ```

### Effect Hooks
Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

- `useEffect` connects a component to an external system.
  
```ts
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
  ```
  - use of effect hook as created and updated hook

### Performance Hooks

- `useMemo` lets you cache the result of an expensive calculation.
- `useCallback` lets you cache a function definition before passing it down to an optimized component.

```ts
function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

#### Use memo

### [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks#only-call-hooks-from-react-functions)
Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.

- Only call Hooks at the top level
- Only call Hooks from React functions
