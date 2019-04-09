# React assignment

## ClockController

All the logic of is used in this .js file we can get the current Time and Date

We initialize state values of currentTime, currenDate and isRunning

- currentTime with js we create an instance of the current Time
  `new Date().toLocaleTimeString()`

- currentDate with js we create an instance of the current Date
  `new Date().toLocaleDateString()`

- isRunning is a boolean to specify if the tick is currently running in the interval

- changeIntervalTime() we set the interval if isRunning is true that means we need to stop the interval if it is false we need to clear it and we toggle the isRunning boolean

- tick() we set the state for currentTime and currentDate and we set run state to true meaning is currently running this is the function that is going to run in the interval

- componenDidMount() after the component is render this method is called which means we can start the interval

- Inside this component we render Clock and DateComp components

## Clock

- A functional component only showing the prop time and getting the button text and onClick callback

## Date

- A functional component only showing the prop date

## Bootstrap

- Using bootstrap we get a simple style for the button
