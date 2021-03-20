import { URLChangeEmitter } from "./helper";

class AddonManager {
  private url: string;
  private static addonManager: AddonManager;
  private urlChangeEmitter: URLChangeEmitter;

  private constructor(u: string) {
    this.url = u;
    this.urlChangeEmitter = new URLChangeEmitter(this.url);
    this.urlChangeEmitter.emitSite();
  }

  static getInstance(url: string) {
    if (this.addonManager) return this.addonManager;

    this.addonManager = new AddonManager(url);
    return this.addonManager;
  }
}

AddonManager.getInstance(location.href);

// learn first about promise in js then promise in return in ts
// render button on post page (first work on image)
// render button everywhere
// Start working on emit functionality
