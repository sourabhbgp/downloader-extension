import {
  isInstagram,
  getInstaVideoURL,
  addLocationChangeListener,
} from "./function";

let CURRENT_URL: string = location.href;

// const main = () => {
//   if (isInstagram(CURRENT_URL)) {
//     let videoURL = getInstaVideoURL();
//   }
// };

addLocationChangeListener();
// main();

console.log(CURRENT_URL);

window.addEventListener("locationchange", () => {
  if (CURRENT_URL !== location.href) {
    CURRENT_URL = location.href;
    console.log(location.href);
  }
});
