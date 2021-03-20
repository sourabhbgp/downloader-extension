import { InstagramURLChangeEmitter } from "./site/instagram";
import { YoutubeURLChangeEmitter } from "./site/youtube";

export class URLChangeEmitter {
  private url: string;

  constructor(url: string) {
    this.url = url;
    URLChangeEmitter.addLocationChangeListener();
    this.subscribeToLocationChangeListener();
  }

  private static addLocationChangeListener(): void {
    const script: HTMLScriptElement = document.createElement("script");
    script.id = "universal-downloader";
    script.innerText = `
      history.pushState = (f => function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event('pushstate'));
          window.dispatchEvent(new Event('locationchange'));
          return ret;
      })(history.pushState);
      history.replaceState = (f => function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event('replacestate'));
          window.dispatchEvent(new Event('locationchange'));
          return ret;
      })(history.replaceState);
      window.addEventListener('popstate', () => {
          window.dispatchEvent(new Event('locationchange'))
      });
      `;
    document.head.appendChild(script);
  }

  private subscribeToLocationChangeListener(): void {
    window.addEventListener("locationchange", () => {
      if (this.url !== location.href) {
        this.url = location.href;
        this.emitSite();
      }
    });
  }

  public emitSite() {
    if (this.url.includes("instagram")) {
      InstagramURLChangeEmitter.emitOnSite(this.url);
    } else throw Error("Website not valid");
  }
}
