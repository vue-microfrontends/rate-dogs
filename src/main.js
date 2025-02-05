import { createApp, h } from 'vue';
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import router from "./router";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },
  handleInstance(app) {
    app.use(router);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
