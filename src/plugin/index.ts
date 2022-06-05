import { App, Ref, ref, watch } from "vue-demi";
import { Options } from "./types";
import * as CallbackTypes from "./callbackTypes";
import {
  loadGApi,
  initOptions,
  decodeCredential,
  googleOneTap,
  googleLogout,
  googleTokenLogin,
  googleAuthCodeLogin,
  googleSdkLoaded,
} from "./utils";
import { setState, libraryState } from "./state";
import GoogleLogin from "./GoogleLogin.vue";

export {
  GoogleLogin,
  CallbackTypes,
  decodeCredential,
  googleOneTap,
  googleLogout,
  googleTokenLogin,
  googleAuthCodeLogin,
  googleSdkLoaded,
};

/**
 * A composable function to get a boolean state showing whether the google [client library](https://developers.google.com/identity/gsi/web/guides/client-library) is loaded or not
 * @returns a boolean state which changes to true once google [client library](https://developers.google.com/identity/gsi/web/guides/client-library) is loaded
 */
export const useGoogleSdkLoaded = (): Ref<boolean> => {
  const loaded = ref(false);
  watch(
    () => libraryState.apiLoaded,
    (n) => {
      loaded.value = n;
    }
  );
  return loaded;
};

export default {
  install: (app: App, options: Options) => {
    options && setState(options);
    loadGApi.then(() => {
      options && initOptions(options);
    });
    app.component("GoogleLogin", GoogleLogin);
  },
};
