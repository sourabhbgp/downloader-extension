export class InstagramURLChangeEmitter {
  static isHome(url: string): boolean {
    return /^https:\/\/www\.instagram\.com\/(\?.*)*$/.test(url);
  }

  static isPost(url: string): boolean {
    return /https:\/\/www\.instagram\.com\/p\/[^/]*\/(\?.*)*$/.test(url);
  }

  static isExplore(url: string): boolean {
    return (
      /https:\/\/www\.instagram\.com\/explore\/tags\/[^\/]*\/(\?.*)*$/.test(
        url
      ) || /https:\/\/www\.instagram\.com\/explore\/$/.test(url)
    );
  }

  static isStory(url: string): boolean {
    return (
      /https:\/\/www\.instagram\.com\/stories\/[^/]*\/[^/]*\/(\?.*)*$/.test(
        url
      ) ||
      /https:\/\/www\.instagram\.com\/stories\/highlights\/[^/]*\/(\?.*)*$/.test(
        url
      )
    );
  }

  static isChannel(url: string): boolean {
    return /https:\/\/www\.instagram\.com\/[^/]*\/channel\/(\?.*)*$/.test(url);
  }

  static isTV(url: string): boolean {
    return /https:\/\/www\.instagram\.com\/tv\/[^/]*\/(\?.*)*$/.test(url);
  }

  static isSaved(url: string): boolean {
    return /https:\/\/www\.instagram\.com\/[^/]*\/saved\/(\?.*)*$/.test(url);
  }

  static isTagged(url: string): boolean {
    return /https:\/\/www\.instagram\.com\/[^/]*\/tagged\/(\?.*)*$/.test(url);
  }

  static isAccount(url: string): boolean {
    return (
      /https:\/\/www\.instagram\.com\/[^/]*\/(\?.*)*$/.test(url) &&
      !/.*explore\/$/.test(url)
    );
  }

  static emitOnSite(url: string) {
    if (InstagramURLChangeEmitter.isHome(url)) {
      console.log("Home");
    } else if (InstagramURLChangeEmitter.isPost(url)) {
      console.log("Post");
    } else if (InstagramURLChangeEmitter.isExplore(url)) {
      console.log("Explore");
    } else if (InstagramURLChangeEmitter.isStory(url)) {
      console.log("Story");
    } else if (InstagramURLChangeEmitter.isChannel(url)) {
      console.log("Channel");
    } else if (InstagramURLChangeEmitter.isTV(url)) {
      console.log("Tv");
    } else if (InstagramURLChangeEmitter.isSaved(url)) {
      console.log("Saved");
    } else if (InstagramURLChangeEmitter.isTagged(url)) {
      console.log("Tagged");
    } else if (InstagramURLChangeEmitter.isAccount(url)) {
      console.log("Account");
    }
  }
}
