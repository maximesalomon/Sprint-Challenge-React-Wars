# Answers

1.  What is React JS and what problems does it try and solve?

React is a UI library that is used in various forms to create complex, rich user interfaces. These rich UI, interact with ever-changing data and multiple users interacting with DOM elements at the same time, with lots of animations and events firing. React enable front-end developers to manipulate the DOM more easily with better performance. We can use State to manage the data from our container and pass it as a prop to our child component. By doing that, when our state changes, React re-render it is be modified across our app. This is where the term React comes from.

Resources -
- https://scotch.io/@anitashah/what-problems-does-reactjs-solve-when-must-you-select-reactjs
- https://learn.lambdaschool.com/fsw/module/reck045duabdvwf72

2.  What does it mean to _think_ in react?

Thinking in React means deconstructing out UI in reusable components that consumes data.

There is 5 steps to it :
- Step 1: Break The UI Into A Component Hierarchy
- Step 2: Build A Static Version in React
- Step 3: Identify The Minimal (but complete) Representation Of UI State
- Step 4: Identify Where Your State Should Live
- Step 5: Add Inverse Data Flow

Resources -
- https://reactjs.org/docs/thinking-in-react.html

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class/Stateful component have access to data through state and can CRUD it. Functional/Presentational component takes in data and display it.

4.  Describe state.

State is the heart of the application. It's where the data lives. It is then pass to the components by calling this.state. It can be passed down to child components as a prop. You can create and update a state with setState. Each time a state is updated, the render function is called and React refresh the modified data. React is watching the state and when it changes, it Reacts. This is where the name "React" comes from.

5.  Describe props.

Props are "components data attributes". It's a way to pass down data to other components for them to be displayed. Props are not mutable like state is. When a component takes in data as prop, the idea is for it to be handled, displayed or passed to an grand child components. That's pretty much it. 