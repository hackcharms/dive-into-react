# Started with component
### You will learn
- How to create component and use nest components
- Writing markup with JSX 
- Introduction to react Fragment `<>` `<React.Fragment></React.Fragment>`
- How to add styles
- How to display data
- How to render conditions and lists
- How to respond to events and update the screen
- How to share data between components
  
#### How to create component and use nest components
```ts
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

#### Writing markup with JSX 
```ts
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```
#### Introduction to react Fragment
 It's a way to group multiple child elements together in your JSX code without adding an extra DOM node.
 eg: [Writing markup with JSX code example](#introduction-to-react-fragment) 

#### How to add styles
```ts
return (
  <h1 style={{backgroundColor:red}}>
    Hello world!
  </h1>
);
```
#### why {{}}?
style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.

#### How to display data
JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name 
```ts
return (
  <h1>
    {user.name}
  </h1>
);
```
You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:
```ts
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

### Conditional rendering 
In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:
```ts
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```
If you prefer more compact code, you can use the conditional `?` operator. Unlike if, it works inside JSX:
```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```
When you don’t need the else branch, you can also use a shorter logical `&&` syntax:
```ts
<div>
  {isLoggedIn && <AdminPanel />}
</div>
```
### Rendering lists 
You will rely on JavaScript features like `for loop` and the array `map()` function to render lists of components.
For example, let’s say you have an array of products:
```ts
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
```
Inside your component, use the `map()` function to transform an array of products into an array of `<li>` items:
```tsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```
### Responding to events 
```ts
function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

### Updating the screen 
Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.

You can declare a state variable inside your component:
```ts
import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

**bonus:** [html to jsx convertor](https://transform.tools/html-to-jsx)