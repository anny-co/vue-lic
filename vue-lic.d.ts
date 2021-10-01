/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
declare module "@anny.co/vue-lic" {
  import _Vue from "vue";

  namespace Lic {
    interface Lic {
      (command: "event", eventName: string, object: string): void;
    }
  }

  export type LicOptInOut = () => void;

  export type LicEvent = (verb: string, object: string) => void;

  export type LicInitialize = () => void;

  export type Dictionary<T> = { [key: string]: T };

  export interface VueLic {
    optIn: LicOptInOut;
    optOut: LicOptInOut;
    initialize: LicInitialize;
  }

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
    globalDataStorageName: "_linkedin_data_partner_ids";
    globalObjectName: "lintrk";
    config: {
      id: string;
    };
  }

  export class VueLicPlugin {
    static install(Vue: typeof _Vue, options: Options): void;
  }

  export function bootstrap(): Promise<Lic.Lic>;
  export function setOptions(options: Partial<Options>): void;

  export default VueLicPlugin;

  export const init: LicInitialize;
  export const optIn: LicOptInOut;
  export const optOut: LicOptInOut;

  module "vue/types/vue" {
    interface Vue {
      $lic: VueLic;
    }
  }
}
