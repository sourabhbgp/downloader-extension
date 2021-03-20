const isInstagram = (url: String) => {
  if (url.includes("https://www.instagram.com/")) return true;
  else return false;
};

const getInstaData = (data: String) => {
  try {
    const startString = `"graphql":`;
    const endString = `});`;
    let cleanedData: string;

    cleanedData = data.slice(
      data.indexOf(startString) + startString.length,
      data.indexOf(endString)
    );
    return JSON.parse(cleanedData);
  } catch (error) {
    console.log(error);
  }
};

const getInstaVideoURL = () => {
  try {
    document
      .querySelectorAll("script[type='text/javascript']")
      .forEach((ele) => {
        if (
          ele.textContent?.includes("https://instagram.fpat2-2.fna.fbcdn.net")
        ) {
          let data = getInstaData(ele.textContent);
          return data.shortcode_media.video_url;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

const addLocationChangeListener = (): void => {
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
};

export {
  isInstagram,
  getInstaData,
  getInstaVideoURL,
  addLocationChangeListener,
};
