/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { isBrowser } from "./utils";
import { getOptions } from "./options";

export default (): void => {
  if (!isBrowser()) {
    return;
  }

  const { globalObjectName } = getOptions();

  if (window[globalObjectName]) {
    // already loaded
    return;
  }

  // proxy list for storing any data until the campaign is fully loaded
  const lic = function (a: unknown, b: unknown) {
    window[globalObjectName].q.push([a, b]);
  };

  window[globalObjectName] = Object.assign(lic, {
    q: [],
    push: Array.prototype.push,
  });

  return window[globalObjectName];
};
