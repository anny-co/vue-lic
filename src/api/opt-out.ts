import { getOptions } from "../options";

export default (): void => {
  const { globalObjectName, globalDataStore } = getOptions();
  window[globalObjectName] = undefined;
  window[globalDataStore] = undefined;
  // disable(true);
  console.log("Opted out of LinkedIn campaign");
};
