# anny-co/vue-lic

A Vue plugin to embed the LinkedIn Campaign into your webpage and control it like a Vue plugin.
In particular helpful with Nuxt and noscript Nuxt context.

## Usage

Install the package into your Nuxt project:

```
yarn add @anny.co/vue-lic
```

Then, add a plugin to `./plugins` like this

```typescript
// vue-lic.ts

import Vue from 'vue'
import VueLIC from '@anny.co/vue-lic'
import type { Options } from '@anny.co/vue-lic'
import { Plugin } from '@nuxt/types'

/**
 * vue-lic plugin
 */
const vueGtag: Plugin = ({ app, $config }) => {
  // check env for LIC_ENABLED
  if (!$config.licEnabled) {
    return
  }
  if (process.client) {
    Vue.use(
      VueLIC,
      {
        config: {
          id: $config.licId,
        },
        bootstrap: false, // no automatic bootstrapping
        enabled: true,
        appName: $config.appName,
      } as Options,
      app.router
    )
  }
}

export default vueLIC
```

Then, add the plugin to your `nuxt.config.{js,ts}`:

```javascript
plugins: [
  ...
  './plugins/vue-lic.ts',
],
```

Lastly, make sure to fit your cookie guidelines and privacy policy to allow the usage of LinkedIn campaigns on your website and
remember **ask your users if they want to be tracked, don't do tracking by default!**

In your application, check if the user accepted tracking cookies and then bootstrap the plugin
```typescript
import { bootstrap as loadLic } from '@anny.co/vue-lic';

...

if (acceptedCookies) {
  loadLic().then(() => {
    Vue.$lic.optIn();
  }.catch((err) => {
    return;
  });
}
```