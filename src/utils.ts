/**
 * Load script and return load status as Promise
 *
 * @param name property to bind to on the global scope
 * @param src script source code
 * @param defer whether to defer script loading or load eagerly
 * @returns {Promise<unknown>} Promise that resolves with the closure bound to the global scope, rejects if loading fails
 */
export function load(
  name: string,
  src: string,
  defer = true,
  async = true
): Promise<unknown> {
  if (typeof document === "undefined") {
    return Promise.reject(new Error("No document element"));
  }

  const scriptElement = new Promise((resolve, reject) => {
    const s = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    script.defer = defer;
    script.async = async;
    script.type = "text/javascript";
    script.src = src;
    script.onload = () => {
      resolve((<never>window)[name]);
    };
    script.onerror = () => {
      reject();
    };
    s.parentNode?.insertBefore(script, s);
  });
  return scriptElement;
}

/**
 * Doesn't make much sense, does it?!
 * @param src img source attribute
 * @param id partner id
 */
export function loadNoscript(src: string, id: string): void {
  if (typeof document === "undefined") {
    return;
  }
  /** <img height="1" width="1" style="display: none" src="https://www.facebook.com/tr?id=${this.$config.fbId}&ev=PageView&noscript=1"/> */
  const head = document.head || document.getElementsByTagName("head")[0];
  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = 1;
  img.width = 1;
  img.src = `${src}&pid=${id}`;
  img.style.display = "none";
  noscript.appendChild(img);
  head.appendChild(noscript);
}

export const isObject = (item: { [x: string]: unknown }): boolean => {
  return item && typeof item === "object" && !Array.isArray(item);
};

export const isBrowser = (): boolean => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  return true;
};
