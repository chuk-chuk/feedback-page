# FEEDBACK PAGE

Technology used:

- React
- Typescript
- Tailwind
- Highcharts
- Formik
- Yup
- react-resting-library, jest

This is a single page application bootstrapped with Create React App. To provide a better developer experience, type checking and easier debugging I used Typescript over Javascript. From a styling point of view I brought in a utility-like tool Tailwind that is intuitive to use once you know the pattern and very well documented. It's capable of handling responsiveness too, but requires further configuration. I decided to display a number of reviews by its rating in the graph. It will be shown when there is a first review left. To keep the interface updated dynamically I used local state (build-in hook useState) to keep values of a user comments and ratings. I tend to keep most of the components stateless therefore some of the logic passed on to the parent. The source code itself is structured in a way, that the components can be reused in the other parts of the app, unit tested separately. I prefer to keep components folder at the src level, separate to pages, route, utils, redux when it comes to lager applications.
As for the validation, I used yup library and the formik to track the state of the fields. There are error messages raised upon invalid submission and preventing a user from the button click. I have added unit tests to the ValidationMessage and the TextInput to demonstrate my knowledge of the testing library as well as a few integration tests to the main app component.

If I had more time I would think of the following:

- web accessibility
- more unit tests to gain 100% of coverage
- improved styling, responsiveness for various break points
- more atomic like design extraction of components (atoms, molecules, organisms)
- add a helper function to capitalise first letter

## How to run the application

Clone down this repository. You will need node and npm installed globally on your machine
In the project directory, you can run:

### `npm run install`

To install all the dependencies

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
