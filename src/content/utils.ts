const isHome = (url: string): boolean => {
  return /^https:\/\/www\.instagram\.com\/(\?.*)*$/.test(url);
};

const isPost = (url: string): boolean => {
  return /https:\/\/www\.instagram\.com\/p\/[^/]*\/(\?.*)*$/.test(url);
};

const isExplore = (url: string): boolean => {
  return (
    /https:\/\/www\.instagram\.com\/explore\/tags\/[^\/]*\/(\?.*)*$/.test(
      url
    ) || /https:\/\/www\.instagram\.com\/explore\/$/.test(url)
  );
};

const isStory = (url: string): boolean => {
  return (
    /https:\/\/www\.instagram\.com\/stories\/[^/]*\/[^/]*\/(\?.*)*$/.test(
      url
    ) ||
    /https:\/\/www\.instagram\.com\/stories\/highlights\/[^/]*\/(\?.*)*$/.test(
      url
    )
  );
};

const isChannel = (url: string): boolean => {
  return /https:\/\/www\.instagram\.com\/[^/]*\/channel\/(\?.*)*$/.test(url);
};

const isTV = (url: string): boolean => {
  return /https:\/\/www\.instagram\.com\/tv\/[^/]*\/(\?.*)*$/.test(url);
};

const isSaved = (url: string): boolean => {
  return /https:\/\/www\.instagram\.com\/[^/]*\/saved\/(\?.*)*$/.test(url);
};

const isTagged = (url: string): boolean => {
  return /https:\/\/www\.instagram\.com\/[^/]*\/tagged\/(\?.*)*$/.test(url);
};

const isAccount = (url: string): boolean => {
  return (
    /https:\/\/www\.instagram\.com\/[^/]*\/(\?.*)*$/.test(url) &&
    !/.*explore\/$/.test(url)
  );
};
