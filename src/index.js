import { Launch } from "@lightningjs/sdk";
import App from "./App.js";

function setFavicon() {
  try {
    document.querySelector("link[rel*='icon']").href = "static/favicon.ico";
  } catch (exception) {
    console.error(
      "I don't really want to deal with this exception, but here it is:",
      exception
    );
  }
}

export default function () {
  setFavicon();
  return Launch(App, ...arguments);
}
