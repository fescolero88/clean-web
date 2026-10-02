# CLEAN Web App

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [webpack guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<hr/>

## How To Use Feature Flags
1. define feature toggles in webpack.<ENVIRONTMENT>.conf.js
  e.g. you can define the features in webpack.dev.conf.js
  var features = {
    AWESOME_FEATURE: true,
    FEATURE_IN_DEVELOPMENT: isProduction() ? false : true,
  }

2. feed the feature toggles into DefinePlugin for use with JavaScript
  e.g. you can define the features in webpack.<stage>.conf.js
  plugins: [
    new webpack.DefinePlugin({
      'features': features
    })
  ]

3. define feature in VueComponent
  data() {
    features: features
  }

4. Guard your code with feature toggles in JavaScript
  if (features.AWESOME_FEATURE) {
    ...
  }

5. Guard your code with feature toggles in Vue templates
  <template v-if="features.FEATURE_IN_DEVELOPMENT">
    ...
  </template>
## Authentication configuration

Build the frontend with DESKPRO_URL set to the trusted HTTPS support site, for example
DESKPRO_URL=https://support.example.com. Return links on other origins are rejected.
If the setting is absent, login continues to the dashboard without sending a support JWT.

Deploy this frontend together with the API changes: password recovery requests and
password changes now use POST, and new passwords travel in the request body.


## Credentials for deployment

Provide CLIENT_SECRET and EASYVISTA_AUTH_CODE through private build environment
configuration. Set SLACK_WEBHOOK_URL and SLACK_API_TOKEN for deployment notifications.
Embedded credential values were removed from this public repository history.
Rotate the original service credentials before reusing the associated accounts.
