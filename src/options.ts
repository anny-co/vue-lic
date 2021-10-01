/* eslint-disable no-unused-vars */

export interface Options {
  bootstrap: boolean;
  onReady(args?: unknown[]): unknown;
  onError(err: Error): void;
  customResourceURL: string;
  customNoscriptURL: string;
  deferScriptLoad: boolean;
  enabled: boolean;
  disableScriptLoad: boolean;
  appName: string;
  globalObjectName: "lintrk";
  globalDataStore: "_linkedin_data_partner_ids";
  config: {
    id: string;
  };
}

export const getDefaultOptions = (): Options => ({
  bootstrap: true,
  onReady: () => ({}),
  onError: () => ({}),
  customResourceURL: "https://snap.licdn.com/li.lms-analytics/insight.min.js",
  customNoscriptURL: "https://px.ads.linkedin.com/collect/?fmt=gif",
  globalDataStore: "_linkedin_data_partner_ids",
  deferScriptLoad: false,
  enabled: true,
  disableScriptLoad: false,
  appName: "",
  globalObjectName: "lintrk",
  config: {
    id: "",
  },
});

let options: Options = getDefaultOptions();

export const setOptions = (_options: Partial<Options>): void => {
  options = { ...getDefaultOptions(), ..._options };
};

export const getOptions = (): Options => {
  return options;
};
