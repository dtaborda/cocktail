# React Native architecture

An opinionated architecture with the following technical stack and configuration:

* React  (16.x)
* React Native (0.59.x)
* React Native Navigation (2.x)
* Flux by using Redux (4.x)
* Redux Saga (1.x)
* apisauce (1.x)
* Typescript (3.x)
* Testing Jest (24.x)

## TO DO

- [ ] Configureation of react native navigation library from android
- [ ] Search and filer implementation. The filter modal is WIP, the filter strategy was implemented, but there are only two filters configured, the Cocktail_glass list and cocktails that contain a vodka ingredient, also the search input was presented, if tiping into the inpunt, the cleaning search input button will display, but the serach input is not wired with redux.
- [ ] Wrapper of native and vendor component
- [ ] Theme structure creation for ui component, becasue the color, size, etc are hardcode into the component
- [ ] Reactotrom configuration
- [ ] Replacement the library redux by mbox
- [ ] Test examples for unit test with shallow rendering.

## Getting started

To start hacking simply do:

```
$ yarn install
$ react-native link
& react-native run-ios
```

For more detailed reference continue reading.

## Architecture (React + Flux)

### Services

* api configuration: 
  The URL of the api.
  Milliseconds before we timeout the request.
* api problem: 
  Attempts to get a common cause of problems from an api response.
* api problem test:
  test case for each api problem where mencined before
* api types: 
  api response type
* api: 
  apisauce configration, is it wrapper for  axios http client library
  - all responses follow the same flow: success and failure alike
  - responses have a problem property to help guide exception flow
  - attach functions that get called each request attach functions that change all request or response data
  - detects connection issues (on React Native)


### Redux

* redux with ducks: Library for managing application state.
* react-redux: Library for managing React application state.
* redux-saga: a middleware for logging, crash reporting, talking to an asyn API.

There are many other ways to manage your local state outside the React components—for example, some people who didn’t like Redux are happy with MobX. because In MobX there is lot of built in abstraction, and this leads to less code. But when implementing redux you will end up writing lot of boilerplate code.

### react-native-navigation

React Native Navigation using native navigation by wrapping each screen with a native controller. So the performance is optimized by the native realm. The area you gonna implement is inside the header and tab bar.
React Navigation is pure js implementation. It uses React-native root view as the container view. Each screen is under the root view hierarchical tree.
So if you open the app from View Hierarchy console, you will see a big difference (React Navigation includes a bunch of weird components like multiple headers or tab bar, the tree is also difficult to understand).


### FlatList

is the best native option and the most performant, because it doesn't render all items in the same time, it render the item on demand
This is a convenience wrapper around `VirtualizedList`, and here inherits its props (as well as those of `ScrollView`)

## React patterns

## Other patterns