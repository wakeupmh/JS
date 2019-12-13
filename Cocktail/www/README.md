This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About this project

This project is an estudy about React Hooks using a drink's OpenAPI.

## Packages 
- [👩‍🎤 Emotion (CSS-in-JS)](https://github.com/emotion-js/emotion)
- [Axios](https://github.com/axios/axios)
- [React Loader Spinner](https://github.com/mhnpd/react-loader-spinner)

## Techniques
### [Lazy & Suspense 😴](https://blog.bitsrc.io/lazy-loading-react-components-with-react-lazy-and-suspense-f05c4cfde10c)
    ### Why is Lazy Loading (& Suspense) Important
    Firstly, bundling involves aligning our code components in progression and putting them in one javascript chunk that it passes to the browser; but as our application grows, we notice that bundle gets very cumbersome in size. This can quickly make using your application very hard and especially slow. 
    
    With Code splitting, the bundle can be split to smaller chunks where the most important chunk can be loaded first and then every other secondary one lazily loaded.

    Also, while building applications we know that as a best practise consideration should be made for users using mobile internet data and others with really slow internet connections. We the developers should always be able to control the user experience even during a suspense period when resources are being loaded to the DOM.
### [Hooks 🎣](https://pt-br.reactjs.org/docs/hooks-intro.html) 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
