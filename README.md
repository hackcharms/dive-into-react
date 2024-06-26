# Vite: A Fast and Modern Build Tool
Vite is a relatively new frontend build tool similar of [webpack](https://webpack.js.org/) and [parcel](https://parceljs.org/) that has gained significant popularity due to its exceptional speed and streamlined development experience. 

## What is [React.js](https://react.dev/) ?
React.js, often simply referred to as React, is a popular JavaScript library for building user interfaces (UIs) on the web. It was created by Facebook and is now maintained by a community of developers and companies like Meta. Here are some key characteristics of React:
### Component-Based Architecture:
React promotes a component-based approach where complex UIs are broken down into smaller, reusable components.
Each component has its own logic and presentation, making code more manageable and maintainable.
Components can be nested to create hierarchical UIs.

### Declarative Style:
In React, you describe what the UI should look like rather than how to manipulate the DOM (Document Object Model) directly.
This declarative style simplifies development and makes the code easier to reason about.

### Virtual DOM:
React employs a virtual DOM, a lightweight in-memory representation of the actual DOM.
When changes occur, React efficiently calculates the difference between the previous and current virtual DOM states.
It then applies only the minimal necessary changes to the real DOM, resulting in faster updates and smoother user experiences.

### JSX (JavaScript XML):
React uses JSX, a syntax extension for JavaScript that allows you to write HTML-like structures within your code.
This improves readability and makes it easier to visualize the UI you're building. However, JSX is transformed into regular JavaScript before being executed in the browser.

### Advantages of Using React:
**Reusable Components:** Building reusable components saves development time and reduces code duplication.

 **Declarative Style:** Declarative programming makes code easier to understand and maintain.

**Virtual DOM:** The virtual DOM leads to faster UI updates and improved performance.
**Large Community and Ecosystem:** React has a vast community of developers and a rich ecosystem of tools and libraries to support various functionalities.

### Use Cases of React:
React is widely used for building single-page applications (SPAs) same as [Angular](https://angular.dev), where the page content updates dynamically without full page reloads.

### React vs Angular
React and Angular are both popular choices for front-end development, but they have some key differences:

**Here's a breakdown:**

- **Type:** React is a JavaScript library, while Angular is a full-fledged TypeScript framework.
- **Structure:** Angular enforces a stricter, opinionated structure based on MVC (Model-View-Controller). React is more flexible, allowing for different architectural patterns.
- **Data Binding:** Angular uses two-way data binding, meaning changes in the UI are reflected in the data and vice versa. React uses one-way data binding, requiring a more explicit flow of data updates.
- **Performance:** React's virtual DOM can potentially lead to faster performance, especially for complex UIs.
- **Learning Curve:** React is often considered easier to learn initially, while Angular's structure can have a steeper learning curve.
- **Ecosystem:** Both have vast ecosystems, but React often has more third-party libraries available.
### Choosing the right one depends on your project:
#### Angular is a good fit for:
- Large, enterprise-grade applications.
- Projects that benefit from a structured approach.
- Teams that value stability and built-in features.
#### React is a good fit for:
- Smaller, more dynamic applications.
- Projects requiring a high degree of flexibility.
- Teams comfortable with a more custom setup.

### [NPM Trends](https://npmtrends.com/angular-vs-react-vs-vue)
## [Creating new projects Old way](https://legacy.reactjs.org/docs/create-a-new-react-app.html)

`npx create-react-app my-app`

## Creating new projects using [Vite](https://vitejs.dev/guide/)([recommended](https://react.dev/learn/start-a-new-react-project))
`yarn create vite my-react-app --template react`

`cd my-react-app`

`npm install`

`npm run dev`

### Code introduction
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
