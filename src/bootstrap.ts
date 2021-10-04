import initialize from "./api/initialize";
import { getOptions } from "./options";
import registerGlobals from "./register-globals";
import { load } from "./utils";

export default async (): Promise<void> => {
  const {
    onReady,
    onError,
    globalObjectName,
    globalDataStore,
    config,
    customResourceURL,
    deferScriptLoad,
    disableScriptLoad,
  } = getOptions();

  registerGlobals();

  if (disableScriptLoad) {
    return;
  }

  try {
    // data list for pids
    window[globalDataStore] = window[globalDataStore] || [];
    window[globalDataStore].push(config.id);

    await load(globalObjectName, customResourceURL, deferScriptLoad, true);
    if (onReady) {
      onReady(window[globalObjectName]);
    }
    initialize();
  } catch (err) {
    if (onError) {
      onError(err as Error);
    }
  }
};
