import { isBrowser } from "../utils";
import { getOptions } from "../options";

export default (value = true): void => {
  const { config } = getOptions();
  if (!isBrowser()) {
    return;
  }

  // mark the pid as disabled
  // NOTE: this does not actually do anything, it's just a marker for debugging
  window[`lic-disable-${config.id}`] = value;
};
