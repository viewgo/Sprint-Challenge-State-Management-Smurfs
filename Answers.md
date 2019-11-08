1. What problem does the context API help solve?
    Prop drilling. Allows for global variables in a react app.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Reducers: take the current state and returns a modified state
    Actions: Sends data (payloads) to the Redux store
    Store: The state container for Redux. Holds the data used inside the app.
    Single source of truth: The state tree is the state of the app. Data comes and goes through the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state is global, component state is local. Component only state/functions should be kept in it's on component. Application level state is used for items used at multiple points in the application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Thunk is middleware that lets you return functions instead of just objects in an action.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux isn't as complicated as I thought. Relatively easy to set up, but gives you a lot of control over data flow and error handling
