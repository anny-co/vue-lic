import { getOptions } from "../options";
import { isBrowser } from "../utils";

export default (): void => {
  const { config } = getOptions();

  if (!isBrowser()) {
    return;
  }

  console.log(`Started LinkedIn campaign for ${config.id}`);
};
