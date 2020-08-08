# redux-state-example

# Development

## Redux

Our typical redux setup would be done in `config/store.js`. This would setup the redux store, add middleware (such as redux-persist).

Then add the react-redux `Provider` to `app/App.js`. Root navigator would be wrapped by `Provider` in `app/App.js`.

Redux state (`Actions` and `Reducers`) would be managed in `app/state`.

Packages needed to setup store:

| package       | purpose                                              |
| ------------- | ---------------------------------------------------- |
| react-redux   | to setup provider in `app/App.js`                    |
| redux         | main redux package                                   |


