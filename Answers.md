# Answers

1.  What is React JS and what problems does it try and solve?
    - React JS is a LIBRARY we use so that we can have our JS and html being sorted in one place, and it allows us to be constantly assigning html markup with JS values based on changing/updating data, without having to refresh a page or go into the console as a user.

1.  What does it mean to _think_ in react?
    - Being able to view a piece of UI and draw out what portions of it will be individual componenets or classes, and then being able to list out the functions/data that need to be worked/drilled down to the appropriate places

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    - stateful components have data that can be manipulated and updated, and then cause a re-rendering of the page. A Presentational component does not have the render function.

1.  Describe state.
    - State is a curation of current data that can be manipulated and updated in a number of ways, then when we 'setState' we call into action the render() function to re-update the information on-screen

1.  Describe props.
    -props are anything we are handing down from a higher level class/component to a lower level class/component. This can accomplish a number of things, but so far I've seen it be useful for manipulating high-level state at low-level components.
