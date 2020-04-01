# SKY Add-in React App Demo

Simple demo showing a React app using the [SKY Add-In framework](https://developer.blackbaud.com/skyapi/docs/addins) and some primitive [SKY UX](https://developer.blackbaud.com/skyux) styles.

Original README created from `create-react-app` is listed below, with a few notable changes regarding SSL and the internal routes used.

We require a SKY UX Add-in to use https, so we've enabled HTTPS in the the `.env` file. The react dev server by default uses an auto-generated self-signed certificate.  You will need to add manually trust or add an exception for the certificate.  You could also use a tool like [mkcert](https://github.com/FiloSottile/mkcert) to auto trust a local certificate and add the corresponding `SSL_CRT_FILE` and `SSL_KEY_FILE` in `.env`, but that's outside the scope of this demo.

When following the [Create an Add-in tutorial](https://developer.blackbaud.com/skyapi/docs/addins/get-started/createaddin), use `https://localhost:3000/tile` as the value for your SKY Add-in URL.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
